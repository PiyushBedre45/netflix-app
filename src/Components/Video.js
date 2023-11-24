import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import axios, { Axios } from "axios";
import { useLocation } from "react-router-dom";


// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=gadar&key=AIzaSyAV9CODEyYdCkH8dDe9meocM21UTdKoFVM




const VideoApiKey = "AIzaSyAV9CODEyYdCkH8dDe9meocM21UTdKoFVM";
const StartApi = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=";



const Trail = ({ vdo }) => {


    const videoId = `https://www.youtube.com/embed/${vdo}?autoplay&controls=0`

    return (
        <>
            <div >

                <iframe className='w-[100%] h-[100vh]' src={videoId} title="YouTube video player"   ></iframe>
            </div>

        </>
    )
}

const Video = () => {
    const [Trailvideo, setTrailVideo] = useState("")
    const { state } = useLocation();
    console.log(state.MovieAndSeries)

    useEffect(() => {
        const FetchVideo = async () => {
            const { data } = await axios.get(`${StartApi}${state.MovieAndSeries} trailer &key=${VideoApiKey}`)

            setTrailVideo(data.items[0].id.videoId)
        }
        FetchVideo(Trailvideo);
    }, [])

    return (
        <div>
            <Trail vdo={Trailvideo} />
        </div>






    )
}

export default Video
