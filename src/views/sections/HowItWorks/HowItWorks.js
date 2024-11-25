import { useState, useEffect } from 'react';
import axios from 'axios';
import "./styles.css";
import ManualVideoPlayer from '../../../components/Manual-VideoPlayer/Manual_VideoPlayer';
import howItWorksVideo from '../../../assets/how-it-works.mp4'; // Make sure this video exists in assets

export default function HowItWorks() {
    const [data, setData] = useState({
        title: "How It Works",
        subtitle: "Receive Your Packages",
        span: "Super Fast",
        content: "Watch this simple step by step video, and see how you can receive all your orders from anywhere quicker than ever!",
    });

    return (
        <div className="howitworks" id="how-it-works">
            <div className="hiw-main">
                <div className="hiw-wrapper">
                    <div className="hiw-Headers">
                        <h1 className="hiw-title">{data.title}</h1>
                        <p className="hiw-subtitle">
                            {data.subtitle}&nbsp;<span>{data.span}</span>
                        </p>
                    </div>

                    <div className="hiw-content">
                        <p>{data.content}</p>
                    </div>
                </div>

                <div className="hiw-container">
                    <ManualVideoPlayer 
                        videoSrc={howItWorksVideo}
                    />
                </div>
            </div>
        </div>
    );
}