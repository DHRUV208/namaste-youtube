import { Link } from "react-router-dom";
import useGetVideos from "../hooks/useGetVideos";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const videosData = useGetVideos();
  // console.log("videosData", videosData);

  return (
    <div className="flex flex-wrap">
      {videosData.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard  info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
