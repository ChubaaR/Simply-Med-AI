
import os
import io
import torch
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
from transformers import pipeline
from dotenv import load_dotenv

# Ngrok integration
try:
    from pyngrok import ngrok
    NGROK_AUTH_TOKEN = os.environ.get("NGROK_TOKEN")
    if NGROK_AUTH_TOKEN:
        ngrok.set_auth_token(NGROK_AUTH_TOKEN)
        public_url = ngrok.connect(8000)
        print("Public URL:", public_url)
except ImportError:
    print("pyngrok not installed. Skipping ngrok tunnel.")

load_dotenv()

MODEL_ID = "google/medgemma-1.5-4b-it"

PROMPT = (
    "You are a senior consultant radiologist. Write a detailed, structured chest X-ray report.\n\n"
    "Use this exact format:\n"
    "1) Clinical context: (if not provided, state 'Not provided')\n"
    "2) Technique: (projection PA/AP, inspiration, rotation, penetration; if uncertain, say so)\n"
    "3) Findings:\n"
    "   - Airways\n"
    "   - Lungs & pleura (consolidation, atelectasis, effusion, pneumothorax, interstitial markings, and any other relevant findings)\n"
    "   - Cardiomediastinal silhouette (heart size, mediastinum, hila)\n"
    "   - Diaphragm\n"
    "   - Bones & soft tissues\n"
    "   - Devices/lines (if any)\n"
    "4) Impression: (bullet points, most likely diagnosis + key differentials)\n"
    "5) Urgent alerts: (state 'None' if none)\n\n"
    "Be specific about location and limitations. Do not invent clinical history. "
    "If something is not clearly visible, say 'cannot be confidently assessed'."
)

# Load once (global)
hf_token = os.environ.get("HF_TOKEN")
if not hf_token:
    raise RuntimeError("HF_TOKEN is missing. Set it as an environment variable.")

use_cuda = torch.cuda.is_available()
dtype = torch.bfloat16

pipe = pipeline(
    "image-text-to-text",
    model=MODEL_ID,
    torch_dtype=dtype,
    device=0 if torch.cuda.is_available() else -1,
    token=hf_token,
)

app = FastAPI()

# Allow frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/analyze")
async def analyze(file: UploadFile = File(...)):
    try:
        # Read image file
        image_bytes = await file.read()
        img = Image.open(io.BytesIO(image_bytes)).convert("RGB")

        messages = [{
            "role": "user",
            "content": [
                {"type": "image", "image": img},
                {"type": "text", "text": PROMPT},
            ],
        }]

        out = pipe(
            text=messages,
            max_new_tokens=700,
            do_sample=False,
        )

        report = out[0]["generated_text"]
        return {"report": report}
    except Exception as e:
        print("Error during analysis:", str(e))
        return {"error": "An error occurred during analysis."} 