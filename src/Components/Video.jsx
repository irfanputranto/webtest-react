import { useState, useRef, useEffect } from "react";
import ArticleService from "../services/ArticleService";
import { useParams } from "react-router-dom";
import Loading from "./Loading";



const Video = () => {
    const {id} = useParams()
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoData, setVideoData] = useState(null);

    useEffect(() => {
        const fetchVideoData = async () => {
            try {
                const res = await ArticleService.getById(id)
               setVideoData(res.data)
            } catch (error) {
                console.log("error ", error);
            }
        }

        fetchVideoData()
    }, [])

    const togglePlay = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }

        setIsPlaying(!isPlaying)
    }

    return (
        <>
        {videoData ? (
            <div className="card w-full bg-base-100 shadow-xl ">
            <div className="relative w-full max-w-screen-lg mx-auto mt-12">
                <video ref={videoRef} controls onClick={() => togglePlay} className="w-full h-96 block bg-slate-400 rounded-lg" >
                    <source src={videoData.video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="video-details">
                    <h2 className="text-xl font-bold mt-4">{videoData.title}</h2>
                    <p className="text-gray-600">{videoData.content}</p>
                </div>

            </div>
        </div>
        ): (
           <div className="flex items-center h-screen"><Loading /></div>
        )}
        
        </>
    )
}

export default Video