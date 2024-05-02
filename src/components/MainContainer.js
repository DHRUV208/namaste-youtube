import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="col-span-11">
      <h2 className="text-3xl"> Main container</h2>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
