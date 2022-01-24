import Bg4 from "../../utils/assets/imgs/bg-4.jpg";

export default {
    wrapper: {
        background: `url(${Bg4})`,
        marginTop: '-25px',
        position: 'relative'
    },

    heroContainer: {
        width: '75%',
        display: 'flex',
        margin: '0 auto',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '105px'
    },

    heroAvatarContent: {
        position: 'relative',
        display: 'inline-block',
        overflow: 'hidden',
        margin: '0 3px',
        height: 500,
        cursor: 'pointer'
    },

    heroAvatar: {
        verticalAlign: 'top',
        objectFit: 'cover',
        width: '100%',
        height: '100%'
    },

    coverContainer: {
        position: 'absolute',
        top: '28%',
        zIndex: 1,
        width: '100%',
        height: '955px'
    },

    coverImg: {
        width: "100%",
        height: "100%",
        objectFit: 'fill',
        verticalAlign: 'top'
    },

    characterWrapper: {
        position: 'relative',
        zIndex: 1, 
        marginTop: 0,
        textAlign: 'center'
    },

    characterTitle: {
        fontSize: '4rem',
        fontWeight: 700,
        fontFamily: 'å¾®è½¯é›…é»‘',
        color: 'rgb(255, 252, 214)',
        margin: '50px 0px 0px',
    },
    progress: {
        display: 'inline-block',
        width: 300,
        height: 20,
        marginLeft: 20
    },

    propertyContent: {
        display: 'flex',
        width: "75%",
        margin: '0 auto'
    },

    name: {
        fontSize: '3rem',
        fontWeight: 700,
        fontFamily: 'å¾®è½¯é›…é»‘',
        color: '#fffcd6',
        margin: 0,
        textAlign: 'left',
    },

    description: {
        fontSize: '1.2rem',
        fontWeight: 700,
        fontFamily: 'å¾®è½¯é›…é»‘',
        color: '#fffcd6',
        marginTop: '30px',
        textAlign: 'left',
    },

    propertyLabel: {
        fontSize: '1rem',
        fontWeight: 700,
        fontFamily: '微软雅黑',
        color: '#fffcd6',
        textAlign: 'left',
        width: '100px',
    },

    progressContent: {
        display: 'flex',
        alignContent: 'center',
        justifyItems: 'center',
        marginTop: '10px',
    },

    characterCover: {
        height: '500px', 
        position: 'relative', 
        display: 'inline-block', 
        overflow: 'hidden'
    }
}