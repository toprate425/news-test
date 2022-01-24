import Bg2 from "../../utils/assets/imgs/bg-2.jpg";
import Bg4 from "../../utils/assets/imgs/bg-4.jpg";

export default {
    wrapper: {
        background: `url(${Bg2})`,
        backgroundColor: 'transparent',
        marginTop: '-4px'
    },

    container: {
        display: 'flex',
        boxSizing: 'border-box',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'transparent',
    },

    titleContent: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    titleHeader: {
        fontSize: '3.5rem',
        fontWeight: 700,
        fontFamily: "å¾®è½¯é›…é»‘",
        color: 'rgb(255, 252, 214)',
        margin: '50px 0px 0px',
    },

    titleDescription: {
        fontSize: '1.5rem',
        fontWeight: 700,
        fontFamily: 'å¾®è½¯é›…é»‘',
        color: 'rgb(243, 242, 212)',
    },

    readBtn: {
        background: '#019888',
        borderRadius: '20px',
        display: 'inline-block',
        margin: '80px 0 80px',
        padding: '22px 45px',
        boxShadow: '2px 2px 5px #000',
        textDecoration: 'none'
    },

    readText: {
        verticalAlign: 'middle',
        width: 40,
        height: 40,
        fontSize: '1.5rem',
        fontWeight: 700,
        color: '#fff'
    },
    tabletPortraitContent: {
        height: 300,
        position: 'relative',
        display: 'inline-block',
        overflow: 'hidden',
        marginBottom: -80
    },

    tabletListWrapper: {
        display: 'inline-block',
        width: '100%',
        textAlign: 'center',
        marginBottom: '55px'
    },

    listWrapper: {
        display: 'inline-block',
        width: '50%',
        textAlign: 'center',
        height: 600
    },
    listImgContent: {
        height: 300,
        position: 'relative',
        display: 'inline-block',
        overflow: 'hidden',
    },
    listTitle: {
        fontSize: '2rem',
        color: 'rgb(139, 232, 220)',
        marginTop: 0,
        fontWeight: 700,
        fontFamily: '微软雅黑',
    },
    listDescription: {
        color: 'rgb(243, 242, 212)',
        fontSize: '1.2rem',
        fontWeight: 700,
        fontFamily: '微软雅黑',
        margin: '0 auto',
        width: '62%'
    },

    heroWrapper: {
        background: `url(${Bg4})`
    },

    img: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        verticalAlign: 'top'
    }
}