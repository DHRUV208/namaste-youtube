import { useSearchParams } from "react-router-dom";
import useCollapseSidebar from "../hooks/useCollapseSidebar";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  useCollapseSidebar();
  return (
    <div className="flex flex-col">
    <div className="px-5 ">
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
    <CommentsContainer />
    </div>
  );
};

export default WatchPage;