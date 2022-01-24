import { Paper, Box } from "@mui/material";
import Responsive from "../layouts/Responsive";
import styles from './styles';
import seperatorImg1 from '../../utils/assets/imgs/seperator1.png';
import { Link } from "react-router-dom";
import { description } from "../../utils";

const {
    portraitLynn, 
    portraitGranetrans, 
    gameplayExploring, 
    gameplayCollecting, 
    gameplayBattling,
    gameplayGathering,
    gameplayCrafting,
    gameplayBigworld
} = require('../../utils/assets/images.json');

const listArray = [
    { id: 1, name: 'Exploring', img: gameplayExploring, description: description.Exploring },
    { id: 2, name: 'Collecting', img: gameplayCollecting, description: description.Collecting },
    { id: 3, name: 'Gathering', img: gameplayGathering, description: description.Gathering },
    { id: 4, name: 'Battling', img: gameplayBattling, description: description.Battling },
    { id: 5, name: 'Crafting', img: gameplayCrafting, description: description.Crafting },
    { id: 6, name: 'Big World', img: gameplayBigworld, description: description.BigWorld },
]
export default function AboutUs() {
    const getAboutUsLayout = (responsive) => 
        <Paper sx={styles.wrapper}>
            <div style={styles.seperatorContent}>
                <img alt='super' style={styles.img} src = {seperatorImg1}/>
            </div>
            { responsive === 'desktop' ?
                <Box style={styles.container}>
                    <div style = {{ flex: 1 }}>
                        <img alt='super' style={styles.img} src={`data:image/png;base64, ${portraitLynn}`}/>
                    </div>
                    <div style = {styles.titleContent}>
                        <p style = {styles.titleHeader}>
                            ABOUT
                        </p>
                        <p style = {styles.titleDescription}>
                            Koakuma is an multiplayer online ARPG game with immersive combat systems and mechanics within a graphics intensive metaverse. All in-game items and creatures are blockchain based tokens and NFTs. Koakuma’s visuals and gameplay are completely original and inspired by classics like Gigantic, World of Warcraft and Diablo. 
                        </p>
                        <Link style = {styles.readBtn} to = "https://bit.ly/lite_kok" target="_blank">
                            <span style = {styles.readText}>Read Litepaper</span>
                        </Link>
                    </div>
                    <div style = {{ flex: 1, transform: 'rotateY(180deg)' }}>
                        <img alt='super' style={styles.img} src={`data:image/png;base64, ${portraitGranetrans}`}/>
                    </div>
                </Box>
                 :
                 <Box style = {{ textAlign: 'center' }}>
                     <div style = {styles.tabletPortraitContent}>
                        <img alt='super' style={styles.img} src={`data:image/png;base64, ${portraitLynn} `}/>
                     </div>
                     <div style = {styles.titleContent }>
                        <p style = {{...styles.titleHeader, ...{fontSize: '3rem'}}}>
                            ABOUT
                        </p>
                        <p style = {{...styles.titleDescription, ...{ width: '66%', marginTop: 20, fontSize: '1.2rem' }}}>
                            Koakuma is an multiplayer online ARPG game with immersive combat systems and mechanics within a graphics intensive metaverse. All in-game items and creatures are blockchain based tokens and NFTs. Koakuma’s visuals and gameplay are completely original and inspired by classics like Gigantic, World of Warcraft and Diablo. 
                        </p>
                        <Link style = {styles.readBtn} to = "https://bit.ly/lite_kok" target="_blank">
                            <span style = {{...styles.readText, ...{fontSize: '1rem'}}}>Read Litepaper</span>
                        </Link>
                    </div>
                 </Box>
            }
            <Box>
                {
                    listArray.map(item =>
                        <Box key = {item.id} sx={responsive === 'tablet' ? styles.tabletListWrapper: styles.listWrapper}>
                            <div style = {styles.listImgContent}>
                                <img alt='super' style={styles.img} src={`data:image/png;base64, ${item.img}`}/>
                            </div>
                            <p style = {styles.listTitle}>
                                {item.name}
                            </p>
                            <p style = {responsive === 'desktop' ? styles.listDescription : {...styles.listDescription, ...{width: '90%', fontSize: '1rem'}}}>
                                {item.description}
                            </p>
                        </Box>
                    )
                }
            </Box>           
        </Paper>;
    return (
        <Box id="ABOUT">
            <Responsive size = 'desktop'>
                {getAboutUsLayout('desktop')}
            </Responsive>
            <Responsive size = 'tablet+desktop'>
                {getAboutUsLayout('t-desktop')}
            </Responsive>
            <Responsive size = 'mobile+tablet'>
                {getAboutUsLayout('tablet')}
            </Responsive>
        </Box>
    )
}