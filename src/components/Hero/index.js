import { useState } from 'react';
import { Box } from "@mui/material";
import Responsive from "../layouts/Responsive";
import seperatorImg2 from '../../utils/assets/imgs/seperator2.png';
import styles from "./styles";
import { heroDescription } from "../../utils";
const { 
    portraitCasey,
    portraitLynn,
    portraitGranetrans,
    portraitGrane,
    portraitCaseytrans,
    portraitElitetree,
    avatarCaseySelected, 
    avatarCasey, 
    avatarLynn, 
    avatarLynnSelected, 
    avatarCaseytrans,
    avatarCaseytransSelected,
    avatarGrane,
    avatarGraneSelected,
    avatarElitetree,
    avatarElitetreeSelected,
    avatarGranetrans,
    avatarGranetransSelected,
    bg3
} = require('../../utils/assets/images.json');

const heroAvatarArray = [
    { id: 1, img1: avatarCasey, img2: avatarCaseySelected, img3: portraitCasey, name: 'Casey', description: heroDescription.Casey, atk: 'linear-gradient(to right, rgb(255, 255, 215), rgb(255, 255, 215) 50%, rgba(221, 221, 221, 0.4) 50%, rgba(221, 221, 221, 0.4) 100%)', def: 'linear-gradient(to right, rgb(255, 255, 215), rgb(255, 255, 215) 40%, rgba(221, 221, 221, 0.4) 40%, rgba(221, 221, 221, 0.4) 100%)', agi: 'linear-gradient(to right, rgb(255, 255, 215), rgb(255, 255, 215) 80%, rgba(221, 221, 221, 0.4) 80%, rgba(221, 221, 221, 0.4) 100%', int: 'linear-gradient(to right, rgb(255, 255, 215), rgb(255, 255, 215) 10%, rgba(221, 221, 221, 0.4) 10%, rgba(221, 221, 221, 0.4) 100%)' },
    { id: 2, img1: avatarLynn, img2: avatarLynnSelected,img3: portraitLynn, name: 'Lynn', description: heroDescription.Lynn, atk: 'linear-gradient(to right, rgb(255, 255, 215), rgb(255, 255, 215) 10%, rgba(221, 221, 221, 0.4) 10%, rgba(221, 221, 221, 0.4) 100%)', def: 'linear-gradient(to right, rgb(255, 255, 215), rgb(255, 255, 215) 30%, rgba(221, 221, 221, 0.4) 30%, rgba(221, 221, 221, 0.4) 100%)', agi: 'linear-gradient(to right, rgb(255, 255, 215), rgb(255, 255, 215) 20%, rgba(221, 221, 221, 0.4) 20%, rgba(221, 221, 221, 0.4) 100%)', int: 'linear-gradient(to right, rgb(255, 255, 215), rgb(255, 255, 215) 80%, rgba(221, 221, 221, 0.4) 80%, rgba(221, 221, 221, 0.4) 100%)' },
    { id: 3, img1: avatarCaseytrans, img2: avatarCaseytransSelected,img3: portraitCaseytrans, name: 'CaseyFox', description: heroDescription.CaseyFox, atk: 'linear-gradient(to right, rgb(255, 255, 215), rgb(255, 255, 215) 70%, rgba(221, 221, 221, 0.4) 70%, rgba(221, 221, 221, 0.4) 100%)', def: 'linear-gradient(to right, rgb(255, 255, 215), rgb(255, 255, 215) 50%, rgba(221, 221, 221, 0.4) 50%, rgba(221, 221, 221, 0.4) 100%)', agi: 'linear-gradient(to right, rgb(255, 255, 215), rgb(255, 255, 215) 60%, rgba(221, 221, 221, 0.4) 60%, rgba(221, 221, 221, 0.4) 100%)', int: 'linear-gradient(to right, rgb(255, 255, 215), rgb(255, 255, 215) 10%, rgba(221, 221, 221, 0.4) 10%, rgba(221, 221, 221, 0.4) 100%)' },
    { id: 4, img1: avatarGrane, img2: avatarGraneSelected,img3: portraitGrane, name: 'Grane', description: heroDescription.Grane, atk: 'linear-gradient(to right, rgb(255, 255, 215), rgb(255, 255, 215) 70%, rgba(221, 221, 221, 0.4) 70%, rgba(221, 221, 221, 0.4) 100%)', def: 'linear-gradient(to right, rgb(255, 255, 215), rgb(255, 255, 215) 60%, rgba(221, 221, 221, 0.4) 60%, rgba(221, 221, 221, 0.4) 100%)', agi: 'linear-gradient(to right, rgb(255, 255, 215), rgb(255, 255, 215) 30%, rgba(221, 221, 221, 0.4) 30%, rgba(221, 221, 221, 0.4) 100%)', int: 'linear-gradient(to right, rgb(255, 255, 215), rgb(255, 255, 215) 10%, rgba(221, 221, 221, 0.4) 10%, rgba(221, 221, 221, 0.4) 100%)' },
    { id: 5, img1: avatarElitetree, img2: avatarElitetreeSelected,img3: portraitElitetree, name: 'Guardian', description: heroDescription.Guardian, atk: 'linear-gradient(to right, rgb(255, 255, 215), rgb(255, 255, 215) 80%, rgba(221, 221, 221, 0.4) 80%, rgba(221, 221, 221, 0.4) 100%)', def: 'linear-gradient(to right, rgb(255, 255, 215), rgb(255, 255, 215) 60%, rgba(221, 221, 221, 0.4) 60%, rgba(221, 221, 221, 0.4) 100%)', agi: 'linear-gradient(to right, rgb(255, 255, 215), rgb(255, 255, 215) 10%, rgba(221, 221, 221, 0.4) 10%, rgba(221, 221, 221, 0.4) 100%)', int: 'linear-gradient(to right, rgb(255, 255, 215), rgb(255, 255, 215) 20%, rgba(221, 221, 221, 0.4) 20%, rgba(221, 221, 221, 0.4) 100%)' },
    { id: 6, img1: avatarGranetrans, img2: avatarGranetransSelected,img3: portraitGranetrans,name: 'GraneWolf', description: heroDescription.GraneWolf, atk: 'linear-gradient(to right, rgb(255, 255, 215), rgb(255, 255, 215) 70%, rgba(221, 221, 221, 0.4) 70%, rgba(221, 221, 221, 0.4) 100%)', def: 'linear-gradient(to right, rgb(255, 255, 215), rgb(255, 255, 215) 60%, rgba(221, 221, 221, 0.4) 60%, rgba(221, 221, 221, 0.4) 100%)', agi: 'linear-gradient(to right, rgb(255, 255, 215), rgb(255, 255, 215) 30%, rgba(221, 221, 221, 0.4) 30%, rgba(221, 221, 221, 0.4) 100%)', int: 'linear-gradient(to right, rgb(255, 255, 215), rgb(255, 255, 215) 10%, rgba(221, 221, 221, 0.4) 10%, rgba(221, 221, 221, 0.4) 100%)' },
];

export default function HeroLayout() {
    const [activeItem, setActiveItem] = useState(1);
    const [selected, setSelected] = useState(true);
    const [info, setInfo] = useState({ id: 1, img1: avatarCasey, img2: avatarCaseySelected, img3: portraitCasey, name: 'Casey', description: heroDescription.Casey, atk: 'linear-gradient(to right, rgb(255, 255, 215), rgb(255, 255, 215) 50%, rgba(221, 221, 221, 0.4) 50%, rgba(221, 221, 221, 0.4) 100%)', def: 'linear-gradient(to right, rgb(255, 255, 215), rgb(255, 255, 215) 40%, rgba(221, 221, 221, 0.4) 40%, rgba(221, 221, 221, 0.4) 100%)', agi: 'linear-gradient(to right, rgb(255, 255, 215), rgb(255, 255, 215) 80%, rgba(221, 221, 221, 0.4) 80%, rgba(221, 221, 221, 0.4) 100%', int: 'linear-gradient(to right, rgb(255, 255, 215), rgb(255, 255, 215) 10%, rgba(221, 221, 221, 0.4) 10%, rgba(221, 221, 221, 0.4) 100%)' })
    
    const handleSelected = (item) => {
        if(activeItem === item.id) {
            setSelected(!selected)
        } else {
            setActiveItem(item.id);
            setSelected(selected);
            setInfo(item)
        }
    }

    const getHeroList = res =>
    <Box sx={styles.wrapper}>
            <div>
                <img alt='hero' style = {{ marginTop: "-30px"}} width = "100%" height="100%" src = {seperatorImg2}/>
            </div> 
            <Box sx={res !== 'm-tablet' ? styles.heroContainer : {...styles.heroContainer, ...{width: '100%', paddingTop: '28px'}}}>
            { 
                heroAvatarArray.map(item => 
                    <Box sx = {styles.heroAvatarContent} key={item.id}>
                        <img alt='hero' 
                            style = {styles.heroAvatar}
                            src={(selected && activeItem === item.id) ? `data:image/png;base64, ${item.img2}` : `data:image/png;base64, ${item.img1}`} 
                            onClick={() => handleSelected(item)}
                        />
                    </Box>
                )
            }
            </Box>
            <Box sx = {res !== 'm-tablet' ? styles.coverContainer : {...styles.coverContainer, ...{top: '17%'}}}>
                <img alt='hero' style = {res !== 'm-tablet' ? styles.coverImg : {...styles.coverImg, ...{objectFit: 'cover'}}} src={`data:image/png;base64, ${bg3}`}/>
            </Box>
            <Box sx={res !== 'm-tablet' ? styles.characterWrapper : {...styles.characterWrapper, ...{marginTop: '-165px'}}}>
                <p style = {res !== 'm-tablet' ? styles.characterTitle : {...styles.characterTitle, ...{fontSize: '3rem', marginLeft: '-25px'}}}>CHARACTERS</p>
                <Box sx={res !== 'm-tablet' ? styles.propertyContent : {}}>
                    <Box sx={res !== 'm-tablet' ? { flex: 1, width: '50%'} : { width: '90%', margin: '0 auto' }}>
                        <p style = {res !== 'm-tablet' ? styles.name : {...styles.name, ...{fontSize: '2rem'}}}>{info.name}</p>
                        <p style = {res !== 'm-tablet' ? styles.description : {...styles.description, ...{fontSize: '1rem'}}}>{info.description}</p>
                        <Box style = {styles.progressContent}>
                            <span style={styles.propertyLabel}>ATK</span>
                            <div style={{ background: info.atk, ...styles.progress}}></div>
                        </Box>
                        <Box style = {styles.progressContent}>
                            <span style={styles.propertyLabel}>DEF</span>
                            <div style={{ background: info.def, ...styles.progress}}></div>
                        </Box>
                        <Box style = {styles.progressContent}>
                            <span style={styles.propertyLabel}>AGI</span>
                            <div style={{ background: info.agi, ...styles.progress}}></div>
                        </Box>
                        <Box style = {styles.progressContent}>
                            <span style={styles.propertyLabel}>INT</span>
                            <div style={{ background: info.int, ...styles.progress}}></div>
                        </Box>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Box sx={res !== 'm-tablet' ? styles.characterCover : {...styles.characterCover, ...{height: '300px', marginTop: '60px'}}}>
                            <img alt='hero' style = {res !== 'm-tablet' ? styles.heroAvatar : {...styles.heroAvatar, ...{objectFit: 'contain'}}} src={`data:image/png;base64, ${info.img3}`}/>
                        </Box>
                    </Box>
                </Box> 
            </Box>
        </Box>;
    
    return (
        <Box id='CHARACTERS'>
            <Responsive size = 'desktop'>
                {getHeroList('desktop')}
            </Responsive>
            <Responsive size = 'tablet+desktop'>
                {getHeroList('t-desktop')}
            </Responsive>
            <Responsive size = 'mobile+tablet'>
                {getHeroList('m-tablet')}
            </Responsive>
        </Box>
    )
}