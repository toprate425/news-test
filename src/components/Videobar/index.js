import ReactPlayer from "react-player";
import KoakumaBox from "../layouts/KoakumaBox";
import Responsive from "../layouts/Responsive";
import largeVideo from "../../utils/assets/video/large.mp4";
import midVideo from "../../utils/assets/video/mid.mp4";
import smallVideo from "../../utils/assets/video/small.mp4";

export default function Videobar() {
    const getVideoLayout = (name) =>
        <ReactPlayer width='100%' muted height='100%' playing loop url={name === 'desktop' ? `${largeVideo}` : name === 't-desktop' ? `${midVideo}` : `${smallVideo}`}/>
    return (
        <KoakumaBox>
            <Responsive size='desktop'>
                {getVideoLayout('desktop')}
            </Responsive>
            <Responsive size='tablet+desktop'>
                {getVideoLayout('t-desktop')}
            </Responsive>
            <Responsive size='mobile+tablet'>
                {getVideoLayout('tablet')}
            </Responsive>
        </KoakumaBox>
    )
}