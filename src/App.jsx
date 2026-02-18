import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Auth Components
import SplashScreen from './frontend/components/Auth/SplashScreen';
import CreateAccount from './frontend/components/Auth/CreateAccount';
import Login from './frontend/components/Auth/Login';

// Dashboard Components
import Home from './frontend/components/Dashboard/Home';
import History from './frontend/components/Dashboard/History';
import Results from './frontend/components/Dashboard/Results';

// Top Content Components
import Download from './frontend/components/Dashboard/Download';

// Navigation Components
import AppBar from './frontend/components/Navigation/AppBar';
import NavBar from './frontend/components/Navigation/NavBar';

// Profile Components
import Profile from './frontend/components/Profile/Profile';
import EditProfile from './frontend/components/Profile/EditProfile';


// Protected Route Component
const ProtectedRoute = ({ children, isLoggedIn }) => {
    const location = useLocation();

    if (!isLoggedIn) {
        // Redirect to login but save the attempted location
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

function App() {
    const [showSplash, setShowSplash] = useState(true);
    const [isDisabilityModalOpen, setIsDisabilityModalOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        // Initialize state from local storage
        return localStorage.getItem('isLoggedIn') === 'true';
    });

    useEffect(() => {
        // Show splash screen for 2 seconds
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleLogin = (status) => {
        setIsLoggedIn(status);
        localStorage.setItem('isLoggedIn', status);
    };

    if (showSplash) {
        return <SplashScreen />;
    }

    return (
        <Router>
            <div className="app-container">
                {/* Show AppBar only if logged in and not on auth pages */}
                {isLoggedIn && !['/login', '/register'].includes(window.location.pathname) && (
                    <AppBar />
                )}
                <Routes>
                    {/* Auth Routes */}
                    <Route path="/" element={<Navigate to={isLoggedIn ? "/home" : "/login"} replace />} />
                    <Route path="/login" element={<Login onLogin={() => handleLogin(true)} />} />
                    <Route path="/register" element={<CreateAccount onRegister={() => handleLogin(true)} />} />

                    {/* Main App Routes (Protected) */}
                    <Route path="/home" element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <Home />
                        </ProtectedRoute>
                    } />
                    <Route path="/download" element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <Download />
                        </ProtectedRoute>
                    } />
                    <Route path="/history" element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <History />
                        </ProtectedRoute>
                    } />

                    <Route path="/results" element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <Results />
                        </ProtectedRoute>
                    } />

                    {/* Profile Routes (Protected) */}
                    <Route path="/profile" element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <Profile onLogout={() => handleLogin(false)} />
                        </ProtectedRoute>
                    } />
                    <Route path="/profile/edit" element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <EditProfile />
                        </ProtectedRoute>
                    } />
                </Routes>

                {/* Show Bottom Nav only if logged in and not on auth pages */}
                {isLoggedIn && !['/login', '/register'].includes(window.location.pathname) && (
                    <>
                        {/* Fixed Bottom Nav Container */}
                        <div style={{
                            position: 'fixed',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            zIndex: 100,
                            pointerEvents: 'none'
                        }}>
                            <div style={{ pointerEvents: 'auto' }}>
                                <NavBar onDisabilityClick={() => setIsDisabilityModalOpen(true)} />
                            </div>
                        </div>
                    </>
                )}

            </div>
        </Router>
    );
}

export default App;