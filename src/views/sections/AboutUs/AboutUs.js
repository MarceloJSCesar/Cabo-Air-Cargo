import React from 'react';
import './styles.css';
import ManualVideoPlayer from '../../../components/Manual-VideoPlayer/Manual_VideoPlayer';
import aboutVideo from '../../../assets/how-it-works.mp4'; // Make sure to add your video file

export default function AboutUs() {
    return (
        <div className="aboutus-section" id="about-us">
            <div className="aboutus-main">
                <div className="aboutus-wrapper">
                    <div className="aboutus-headers">
                        <h1 className="aboutus-title">Sobre Nós</h1>
                    </div>

                    <div className="aboutus-content">
                        <p>
                            {/* Cape Verde Businesses will now be able to keep high quality products in inventory by utilizing our super fast air cargo services. */}
                            As empresas de Cabo Verde poderão agora manter produtos de alta qualidade em stock, utilizando os nossos serviços de carga aérea super rápidos.
                        </p>
                        <p>
                            {/* Additionally, our ultra competitive pricing will give every Cape Verdean access to e-Commerce products from United States, Europe, Africa, and South America. 
                            Your items will arrive in Cape Verde on our weekly scheduled flights and will be ready for pick up in just 10 days or less. */}

                            Além disso, os nossos preços ultra competitivos darão a todos os cabo-verdianos acesso a produtos de comércio eletrónico dos Estados Unidos, Europa, África e América do Sul. 
                            Os seus artigos chegarão a Cabo Verde nos nossos voos semanais regulares e estarão prontos para serem recolhidos em apenas 10 dias ou menos.
                        </p>
                    </div>
                </div>

                <div className="aboutus-container">
                    <ManualVideoPlayer 
                        videoSrc={aboutVideo}
                    />
                </div>
            </div>
        </div>
    );
}