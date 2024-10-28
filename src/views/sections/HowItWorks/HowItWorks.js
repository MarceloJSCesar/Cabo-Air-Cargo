import { useState, useEffect} from 'react';
import  axios  from 'axios';
import VideoPlayer from "../../../components/VideoPlayer/VideoPlayer"
import "./style.css"

export default function HowItWorks(){


    const [data, setData] = useState({});

    useEffect(() => {
        axios.get('https://youtube.com')
            .then(response => setData(response.data))
            .catch(() => {
                setData({
                    title: "How It Works",
                    subtitle: "Receive your packages",
                    span: "faster",
                    content: "Watch this simple step by step video, and see how you can receive all your orders from anywhere quicker than ever!",
                    videoTitle: "Video Title",
                    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
                });
            });
    }, []);

    return (
        <div className="howitworks" id="howitworks">

            <div className="main">
                <div className="hwrapper">

                    <div className="Headers">
                        <h1 className="title">{data.title}</h1>
                        <p className="subtitle">{data.subtitle}&nbsp;<span>{data.span}</span> </p>
                    </div>

                    <div className="content">
                        <p>
                        {data.content}
                        </p>
                    </div>

                </div>
                <div className="container">
                <VideoPlayer
                title={data.videoTitle}
                src={data.url}
                className="videoplayer"
                />
                </div>
            </div>
           


        </div>
    )
}