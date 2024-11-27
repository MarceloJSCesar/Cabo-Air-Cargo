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
                        <h1 className="aboutus-title">About Us</h1>
                    </div>

                    <div className="aboutus-content">
                        <p>
                            Cape Verde Businesses will now be able to keep high quality products in inventory by utilizing our super fast air cargo services.
                        </p>
                        <p>
                            Additionally, our ultra competitive pricing will give every Cape Verdean access to e-Commerce products from United States, Europe, Africa, and South America. 
                            Your items will arrive in Cape Verde on our weekly scheduled flights and will be ready for pick up in just 10 days or less.
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