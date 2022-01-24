import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Responsive from "../layouts/Responsive";
import styles from "./styles";
import telegram from "../../utils/assets/imgs/icon-telegram.png";
const { bg8 } = require('../../utils/assets/images.json');

export default function Contact() {
    const getContact = res =>
        <Box style={res === 'd' ? styles.wrapper : { height: '652px' }}>
            <Box sx={styles.community}>
                <img style={styles.communityImg} src={`data:image/jpg;base64, ${bg8}`}/>
            </Box>
            <Box sx={res === 'd' ? styles.communityContent : {...styles.communityContent, ...{marginTop: '-255px'}}}>
                <p style={res === 'm-t' ? {...styles.communityTitle, ...{ fontSize: '2rem'}} : styles.communityTitle}>Join the Community</p>
                <p style={res === 'm-t' ? {...styles.communityText, ...{ fontSize: '1rem'}} : styles.communityText}>
                Chat with the community, ask questions, get involved in competitions and more! 
                </p>
                <Box sx={styles.communityButton}>
                    <Link style={res === 'm-t' ? {...styles.communtiyTelegram, ...{ fontSize: '1rem'}} : styles.communtiyTelegram} to='https://t.me/koakuma_official'>
                        <Box sx={res === 'm-t' ? {...styles.communityIcon, ...{ width: '20px', height: '20px'}} : styles.communityIcon}>
                            <img style={styles.communityImg} src={telegram}/>
                        </Box>
                        <span style={styles.buttonCommunityText}>Join Telegram</span>
                    </Link>
                </Box>
            </Box>
        </Box>;
    return (
        <Box>
            <Responsive size = 'desktop'>
                {getContact('d')}
            </Responsive>
            <Responsive size = 'tablet+desktop'>
                {getContact('t-d')}
            </Responsive>
            <Responsive size = 'mobile+tablet'>
                {getContact('m-t')}
            </Responsive>
        </Box>
        
    )
}