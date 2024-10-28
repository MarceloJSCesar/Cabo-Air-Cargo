import VideoPlayer from "../../components/VideoPlayer/VideoPlayer"
import "./style.css"

export default function HowItWorks(){


    return (
        <div className="howitworks" id="howitworks">

            <div className="main">
                <div className="hwrapper">

                    <div className="Headers">
                        
                        <h1 className="title">How It Works</h1>
                        <p className="subtitle">Receive your<br/>
                        packages <span>faster</span> </p>
                    </div>

                    <div className="content">
                        <p>
                        Watch this simple step by step video, and see how you can receive all your orders from anywhere quicker than ever!
                        </p>
                    </div>

                </div>
                <div className="container">
                <VideoPlayer
                title="Video player"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
                className="videoplayer"
                />
                </div>
            </div>
           


        </div>
    )
}