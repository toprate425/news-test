export default {
    wrapper: {
        background: '#252423',
        color: '#8a8887',
        display: 'flex', 
        flexDirection: 'column',
        padding: '50px 20%'
    },

    contactInfo: {
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    mobileContactInfo: {
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        height: '145px'
    },

    imgCover: {
        display: 'inline',
        verticalAlign: 'middle',
        position: 'relative'
    },

    linkButton: {
        backgroundColor: 'transparent',
        color: '#8d8d8d',
        textDecoration: 'none',
        fontWeight: 700,
        fontSize: '.8rem',
        padding: '10px',
        border: 'none'
    },

    img: {
        width: '25px',
        height: '100%',
        verticalAlign: 'top',
        objectFit: 'cover'
    },

    borderLink: {
        width: '100%',
        height: '100%',
        verticalAlign: 'top'
    }
}