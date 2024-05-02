import { useEffect, useState } from "react"
import { YOUTUBE_VIDEOS_API } from "../utils/constants";

const useGetVideos = () => {
    const [videos, setVideos] = useState([]);

    useEffect(()=> {
        getVideos();
    }, []);
    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const jsonData = await data.json();
        // console.log("json",jsonData);
         setVideos(jsonData.items);
    }
    // console.log("videos", videos);
    return videos;
};

export default useGetVideos;