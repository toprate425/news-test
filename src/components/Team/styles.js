import Bg2 from "../../utils/assets/imgs/bg-2.jpg";

export default {
    wrapper: {
        background: `url(${Bg2})`,
        backgroundColor: 'transparent',
        marginTop: '-4px',
        paddingBottom: '50px'
    },

    title: {
        fontSize: '4rem',
        fontWeight: 700,
        fontFamily: 'å¾®è½¯é›…é»‘',
        color: '#fffcd6',
        margin: '50px 0 0',
        textAlign: 'center'
    },

    topMembers: {
        width: '80%',
        margin: '0 auto',
    },

    avatarContent: {
        width: '25%',
        position: 'relative',
        display: 'inline-block',
        height: '200px',
        margin: '50px 0px',
        textAlign: 'center'
    },

    avatar: {
        width: '100%', 
        height: '100%',
        verticalAlign: 'top', 
        objectFit: 'contain'
    },

    name: {
        fontSize: '2rem',
        fontWeight: 700,
        fontFamily: '微软雅黑',
        color: 'rgb(255, 252, 214)',
        margin: '10px 0px 0px',
    },

    rule: {
        fontSize: '1.2rem',
        fontWeight: 700,
        fontFamily: '微软雅黑',
        color: 'rgb(47, 221, 222)',
        margin: '10px 0px 0px',
    }
}