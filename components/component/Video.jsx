import myImage from "../Assets/video.mp4";

const Video = ({}) => {
  return (
    <video className="w-full h-full object-cover" autoPlay loop muted>
      <source src={myImage} type="video/mp4" />
    </video>
  );
};

export default Video;
