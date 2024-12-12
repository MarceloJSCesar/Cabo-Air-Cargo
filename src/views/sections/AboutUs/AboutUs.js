import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import ManualVideoPlayer from '../../../components/Manual-VideoPlayer/Manual_VideoPlayer';
import aboutVideo from '../../../assets/how-it-works.mp4'; // Make sure to add your video file
import WaitlistComponent from '../../../components/WaitlistComponent/WaitlistComponent';

export default function AboutUs() {
    function isValidMp4Url(url) {
        try {
          const parsedUrl = new URL(url);
          return parsedUrl.pathname.endsWith(".mp4");
        } catch (e) {
          return false;
        }
      }

    const [isLoading, setIsLoading] = useState(false);
    const title= "Sobre Nós";
    const paragraph1 = "As empresas de Cabo Verde poderão agora manter produtos de alta qualidade em stock, utilizando os nossos serviços de carga aérea super rápidos.";
    const paragraph2 = "Além disso, os nossos preços ultra competitivos darão a todos os cabo-verdianos acesso a produtos de comércio eletrónico dos Estados Unidos, Europa, África e América do Sul. Os seus artigos chegarão a Cabo Verde nos nossos voos semanais regulares e estarão prontos para serem recolhidos em apenas 10 dias ou menos.";
    
    const [aboutUsContent, setAboutUsContent] = useState({
        title: title,
        paragraph1: paragraph1,
        paragraph2: paragraph2,
        videoUrl: aboutVideo,
    });

    useEffect(() => {
        const fetchAboutUsContent = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get('https://cabo-air-cargo.onrender.com/api/s3/aboutus');
                setAboutUsContent({
                    title: response.data.title || 'Sobre Nós',
                    description: 'As empresas de Cabo Verde poderão agora manter produtos de alta qualidade em stock, utilizando os nossos serviços de carga aérea super rápidos. Além disso, os nossos preços ultra competitivos darão a todos os cabo-verdianos acesso a produtos de comércio eletrónico dos Estados Unidos, Europa, África e América do Sul. Os seus artigos chegarão a Cabo Verde nos nossos voos semanais regulares e estarão prontos para serem recolhidos em apenas 10 dias ou menos.',
                    videoUrl: response.data.videoUrl || aboutVideo,
                });
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                console.error('Error fetching About Us content:', error);
            }
        };

        fetchAboutUsContent();
    }, []);

    return (
        <div>
            <div className="aboutus-section" id="about-us">
                <div className="aboutus-main">
                    <div className="aboutus-wrapper">
                        <div className="aboutus-headers">
                            <h1 className="aboutus-title">{isLoading ? title : aboutUsContent.title}</h1>
                        </div>

                        <div className="aboutus-content">
                            <p>
                                {/* Cape Verde Businesses will now be able to keep high quality products in inventory by utilizing our super fast air cargo services. */}
                                {/* Additionally, our ultra competitive pricing will give every Cape Verdean access to e-Commerce products from United States, Europe, Africa, and South America. 
                                Your items will arrive in Cape Verde on our weekly scheduled flights and will be ready for pick up in just 10 days or less. */}
                                {isLoading ? `${paragraph1} ${paragraph2}` : aboutUsContent.description}
                            </p>
                        </div>
                    </div>

                    <div className="aboutus-container">
                        <ManualVideoPlayer 
                            videoSrc={isLoading ? aboutVideo : aboutUsContent.videoUrl} 
                        />

                    </div>

                </div>
            </div>
            <WaitlistComponent />
        </div>
    );
}
