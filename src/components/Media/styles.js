import Bg5 from "../../utils/assets/imgs/bg-5.jpg";
import MediaBg2 from "../../utils/assets/imgs/media-bg-2.png";
import CoverImg from "../../utils/assets/imgs/cover.jpg";

export default {
    wrapper: {
        background: `url(${Bg5})`,
        backgroundPositionX: '50%',
        padding: '50px 0 100px',
        position: 'relative',
        zIndex: 1,
    },

    title: {
        fontSize: '4rem',
        textAlign: 'center',
        fontWeight: 700,
        fontFamily: 'å¾®è½¯é›…é»‘',
        color: '#fffcd6',
        margin: '50px 0 0'
    },

    container: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
    },

    mediaBackLeft: {
        position: 'relative',
        zIndex: -1,
        left: '10%',
        display: 'inline-block',
        overflow: 'hidden',
    },

    mediaBackRight: {
        position: 'relative',
        zIndex: -1,
        right: '10%',
        display: 'inline-block',
        overflow: 'hidden',
    },

    mainBoard: {
        background: `url(${MediaBg2})`,
        backgroundRepeat: 'space',
        width: '1030px',
        backgroundSize: '100% 100%',
        padding: '35px'
    },

    videoBoard: {
        width: '100%',
        maxWidth: '100%',
        height: 0,
        paddingTop: '56.25%',
        display: 'block',
        verticalAlign: 'top',
        boxSizing: 'border-box',
        color: '#fff',
        backgroundColor: '#000',
        position: 'relative',
        fontSize: '10px',
        lineHeight: 1,
        fontWeight: 400,
        fontStyle: 'normal',
        fontFamily:'Arial,Helvetica,sans-serif',
        wordBreak: 'normal',
    },

    image: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        verticalAlign: 'top'
    },

    videoTag: {
        backgroundImage: `url(${CoverImg})`,
        backgroundSize: 'cover',
        verticalAlign: 'middle',
        padding: 0,
        display: 'inline-block',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundColor: '#000',
        cursor: 'pointer',
        margin: 0,
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        height: '100%'
    }
}