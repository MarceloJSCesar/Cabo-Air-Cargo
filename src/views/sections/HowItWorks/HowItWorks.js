import { useState, useEffect} from 'react';
import  axios  from 'axios';
import  VideoPlayer  from '../../../components/VideoPlayer/VideoPlayer';
import "./styles.css";
import ManualVideoPlayer from '../../../components/Manual-VideoPlayer/Manual_VideoPlayer';

export default function HowItWorks(){

    const [data, setData] = useState({});

    useEffect(() => {
        axios.get('https://youtube.com')
            .then(response => setData(response.data))
            .catch(() => {
                setData({
                    title: "How It Works",
                    subtitle: "Receive your packages",
                    span: "super fast",
                    content: "Watch this simple step by step video, and see how you can receive all your orders from anywhere quicker than ever!",
                    videoTitle: "Video Title",
                    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
                });
            });
    }, []);

    return (
        <div className="howitworks" id="how-it-works">
            <div className="hiw-main">
                <div className="hiwwrapper">

                    <div className="hiw-Headers">
                        <h1 className="hiw-title">{data.title}</h1>
                        <p className="hiw-subtitle">{data.subtitle}&nbsp;<span>{data.span}</span> </p>
                    </div>

                    <div className="hiw-content">
                        <p>
                        {data.content}
                        </p>
                    </div>

                </div>

                <div className="hiw-container">

                <ManualVideoPlayer />
                </div>
            </div>
           


        </div>
    )
}