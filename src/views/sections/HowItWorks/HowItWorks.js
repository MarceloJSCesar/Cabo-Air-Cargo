import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoPlayer from '../../../components/VideoPlayer/VideoPlayer';
import './styles.css';

export default function HowItWorks() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://cabo-air-cargo.onrender.com/api/s2/howitworks')
            .then(res => {
                setData(res.data);
                setLoading(false);
                console.log(res.data);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
                setData({
                    title: 'Receba Suas Compras Super Rápido',
                    description: 'Assista a este vídeo simples, passo a passo, e veja como pode receber todas as suas encomendas a partir de qualquer lugar, mais rapidamente do que nunca!'
                });
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const subtitle = data.title.split(' ');
    const lastTwoWords = subtitle.slice(-2).join(' ');
    const titleWithoutLastTwoWords = subtitle.slice(0, -2).join(' ');

    function isValidYouTubeEmbedUrl(url) {
        try {
            const parsedUrl = new URL(url);
            return parsedUrl.hostname === 'www.youtube.com' && parsedUrl.pathname.startsWith('/embed/');
        } catch (e) {
            return false;
        }
    }

    


    return (
        <div className="howitworks" id="how-it-works">
            <div className="hiw-main">
                <div className="hiw-wrapper">
                    <div className="hiw-Headers">
                        <h1 className="hiw-title">Como Funciona</h1>
                        <p className="hiw-subtitle">
                            {titleWithoutLastTwoWords} <span>{lastTwoWords}</span>
                          
                        </p>
                    </div>

                    <div className="hiw-content">
                        <p>{data.description}</p>

                    </div>
                </div>

                <div className="hiw-container">
                    {isValidYouTubeEmbedUrl(data.videoUrl) 
                    ? 
                    (<VideoPlayer videoUrl={data.videoUrl} />) 
                    :
                    (
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
                            <p className="coming-soon-text">
                                {/* Video Coming Soon */}
                                Vídeo em breve
                            </p>
                            <p className="coming-soon-subtext">
                                {/* We're creating an amazing step-by-step guide for you */}
                                Estamos a criar um guia passo-a-passo fantástico para si
                            </p>
                        </div>
                    </div>
                    )
                
                }

                </div>
            </div>
        </div>
    );
}