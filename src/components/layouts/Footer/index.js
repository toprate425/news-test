import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import logo2 from "../../../utils/assets/imgs/logo-2.png";
import twitter from "../../../utils/assets/imgs/footer-twitter.png";
import telegram from "../../../utils/assets/imgs/footer-telegram.png";
import borderLink from "../../../utils/assets/imgs/divider.png";
import styles from "./styles";
import Responsive from "../Responsive";

export default function Footer() {
    const getFooter = res =>
        <Box sx={!res ? {...styles.wrapper, ...{padding: '20px 5%', textAlign: 'center' }} : styles.wrapper}>
            <Box style={!res ? styles.mobileContactInfo : styles.contactInfo}>
                <Box sx={styles.imgCover}>
                    <img style={{...styles.img, ...{ width: '45px' }}} src={logo2}/>
                </Box>
                <Box>
                    <Link style={styles.linkButton} to='mailto:admin@koakuma.io'>CONTACT</Link>
                    <Link style={styles.linkButton} to='https://bit.ly/lite_kok'>LITEPAPER</Link>
                </Box>
                <Box>
                    <Link to='https://twitter.com/Koakuma_Game'>
                        <img style={styles.img} src={twitter}/>
                    </Link>
                    <Link to='https://t.me/koakuma_official'>
                        <img style={styles.img} src={telegram}/>
                    </Link>
                </Box>
            </Box>
            <Box sx={{...styles.imgCover, ...{ width: '100%', height: '10px' }}}>
                <img style={styles.borderLink} src={borderLink}/>
            </Box>
            <Box>
                <span style={{ fontSize: '.5rem'}}>© 2021 Koakuma Games, Inc. All Rights Reserved.</span>
            </Box>
        </Box>;
    return (
        <Box>
            <Responsive size = 'desktop'>
                {getFooter(true)}
            </Responsive>
            <Responsive size = 'tablet+desktop'>
                {getFooter(false)}
            </Responsive>
            <Responsive size = 'mobile+tablet'>
                {getFooter(false)}
            </Responsive>
        </Box>
    )
}