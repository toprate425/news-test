import { useState } from "react";
import ReactPlayer from "react-player";
import { Box, Button } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { styled } from '@mui/material/styles';
import Responsive from "../layouts/Responsive";
import styles from "./styles";
import largeVideo from "../../utils/assets/video/large.mp4";

const { mediaBg1, mediaBg2 } = require('../../utils/assets/images.json');

const CustomBtn = styled(Button)({
    top: '50%',
    left: '50%',
    marginTop: '-0.75em',
    marginLeft: '-1.5em',
    fontSize: '3em',
    lineHeight: '1.5em',
    height: '1.5em',
    width: '3em',
    display: 'block',
    position: 'absolute',
    backgroundColor: 'rgba(43,51,63,.7)',
    borderRadius: '0.3em',
    transition: 'all .4s',
    padding: 0,
    cursor: 'pointer',
    opacity: 1,
    border: '0.06666em solid #fff',
    '&:hover': {
        backgroundColor: 'rgba(115,133,159,.5)',
    }
})
export default function Media() {
    const [videobar, setVideobar] = useState(false)
    const getMedia = res =>
        <Box sx={styles.wrapper}>
            <p style={styles.title}>Media</p>
            <Box sx={styles.container}>
                <Box sx={res ? styles.mediaBackLeft : {display: 'none'}}>
                    <img style={styles.image} src={`data:image/png;base64, ${mediaBg1}`}/>
                </Box>
                <Box sx={styles.mainBoard}>
                {
                    videobar ?
                    <ReactPlayer width='100%' height='100%' controls playing url={largeVideo}/>
                    :
                        <Box sx={styles.videoBoard}>
                            <Box sx={styles.videoTag}>
                                <CustomBtn onClick={() => setVideobar(true)}><PlayArrowIcon sx={{color: 'white', fontSize: 30 }}/></CustomBtn>
                            </Box>
                        </Box>
                }
                </Box>
                <Box sx={res ? styles.mediaBackRight : {display: 'none'}}>
                    <img style={styles.image} src={`data:image/png;base64, ${mediaBg1}`}/>
                </Box>
            </Box>
        </Box>;
    return (
        <Box>
            <Responsive size = 'desktop'>
                {getMedia(true)}
            </Responsive>
            <Responsive size = 'tablet+desktop'>
                {getMedia(false)}
            </Responsive>
            <Responsive size = 'mobile+tablet'>
                {getMedia(false)}
            </Responsive>
        </Box>
        
    )
}