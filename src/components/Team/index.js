import { Box } from "@mui/material";
import Responsive from "../layouts/Responsive";
import seperatorImg2 from '../../utils/assets/imgs/seperator2.png';
import styles from './styles';
const { 
    avatarKarasu, 
    avatarStephen, 
    avatarParker, 
    avatarMiyo, 
    avatarRyan, 
    avatarMichael, 
    avatarHenry, 
    avatarAllan
} = require('../../utils/assets/images.json');

const teamMembers = [
    { id: 1, name: 'Karasu', avatar: avatarKarasu, rule: 'CEO / Founder' },
    { id: 2, name: 'Stephen', avatar: avatarStephen, rule: 'Lead Artist / Co-Founder' },
    { id: 3, name: 'Parker', avatar: avatarParker, rule: 'Lead Game Designer' },
    { id: 4, name: 'Miyo', avatar: avatarMiyo, rule: 'Marketing Manager' },
    { id: 5, name: 'Rayn', avatar: avatarRyan, rule: 'Concept Artist' },
    { id: 6, name: 'Michael', avatar: avatarMichael, rule: '3D Designer' },
    { id: 7, name: 'Henry', avatar: avatarHenry, rule: 'Sound Designer' },
    { id: 8, name: 'Allan Ta', avatar: avatarAllan, rule: 'Advisor' },
]
export default function Footer() {
    const getTeamLayout = (res) =>
        <Box>
            <p style={res === 'm' ? {...styles.title, ...{fontSize: '3rem'}} : styles.title}>CORE TEAM</p>
            <Box sx={styles.topMembers}>
                {
                    teamMembers.map(item =>
                        <Box 
                            key={item.id} 
                            sx={
                                res === 'desktop' ? 
                                styles.avatarContent : 
                                res === 't' ? {...styles.avatarContent, ...{width: '50%'}} :
                                {...styles.avatarContent, ...{width: '100%' }}}
                        >
                            <img style = {styles.avatar} alt="avatar" src={`data:image/png;base64, ${item.avatar}`}/>
                            <p style = {styles.name}>{item.name}</p>
                            <p style = {styles.rule}>{item.rule}</p>
                        </Box>
                    )
                }
                
                
            </Box>
        </Box>;
    return (
        <Box id="TEAM" sx={styles.wrapper}>
            <div>
                <img alt='hero' width = "100%" height="100%" src = {seperatorImg2}/>
            </div>
            <Responsive size = 'desktop'>
                {getTeamLayout('desktop')}
            </Responsive>
            <Responsive size = 'tablet+desktop'>
                {getTeamLayout('t')}
            </Responsive>
            <Responsive size = 'mobile+tablet'>
                {getTeamLayout('m')}
            </Responsive>
        </Box>
    )
}