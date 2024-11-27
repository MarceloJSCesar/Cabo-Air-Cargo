import React from 'react';
import './styles.css';

export default function HowItWorks() {
    return (
        <div className="howitworks" id="how-it-works">
            <div className="hiw-main">
                <div className="hiw-wrapper">
                    <div className="hiw-Headers">
                        <h1 className="hiw-title">Como Funciona</h1>
                        <p className="hiw-subtitle">
                            Receive Your Packages <span>Super Fast</span>
                        </p>
                    </div>

                    <div className="hiw-content">
                        <p>
                            Watch this simple step by step video, and see how you can receive all your orders from anywhere quicker than ever!
                        </p>
                    </div>
                </div>

                <div className="hiw-container">
                    <div className="video-placeholder">
                        <div className="placeholder-content">
                            <svg 
                                viewBox="0 0 24 24" 
                                className="play-icon" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2"
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <polygon points="10 8 16 12 10 16 10 8" />
                            </svg>
                            <p className="coming-soon-text">Video Coming Soon</p>
                            <p className="coming-soon-subtext">We're creating an amazing step-by-step guide for you</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}