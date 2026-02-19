import React from 'react';
import Logo from '../../../assets/Logo.png';

const SplashScreen = () => {
    return (
        <div className="screen splash-screen">
            <div className="splash-logo">
                <img
                    src={Logo}
                    alt="SimplyMedAI Logo"
                    className="splash-brand-logo"
                    style={{ width: '350px', height: '350px' }}
                />
            </div>
        </div>
    );
};

export default SplashScreen;
