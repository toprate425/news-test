import { Box, Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material";
import { styled } from '@mui/material/styles';
import styles from "./styles";
import Responsive from "../layouts/Responsive";
import seperatorImg2 from '../../utils/assets/imgs/seperator2.png';
import { Link } from "react-router-dom";
const { 
    portraitCasey,
    portraitLynn,
    portraitGranetrans,
    portraitGrane,
    portraitCaseytrans,
    portraitElitetree,
} = require('../../utils/assets/images.json');

const newItems = [
    { id: 1, title: 'new1', url: '/#', description: 'testing mode', banner: portraitCasey },
    { id: 2, title: 'new2', url: '/#', description: 'testing mode', banner: portraitLynn },
    { id: 3, title: 'new3', url: '/#', description: 'testing mode', banner: portraitGranetrans },
    { id: 4, title: 'new4', url: '/#', description: 'testing mode', banner: portraitGrane },
    { id: 5, title: 'new5', url: '/#', description: 'testing mode', banner: portraitCaseytrans },
    { id: 6, title: 'new6', url: '/#', description: 'testing mode', banner: portraitElitetree }
]

const CustomImg = styled(CardMedia) ({
    opacity: 0.5,
    objectFit: 'contain',
    "&:hover": {
        opacity: 0.8
    }
})
export default function News() {
    const getNews = res =>
        <Box sx={styles.wrapper}>
            <div>
                <img alt='hero' style = {{ marginTop: "-5px"}} width = "100%" height="100%" src = {seperatorImg2}/>
            </div> 
            <Box sx={{ margin: '0 auto'}}>
                <p style={styles.title}>News</p>
                <Box sx={{ width: '80%', margin: '0 auto' }}>
                    {
                    newItems.map(item =>
                        <Card 
                            sx={res === 'desktop' ? 
                            styles.cardContent : res === 't+desktop' ? 
                            {...styles.cardContent, ...{width: '45%'}} : 
                            {...styles.cardContent, ...{width: '60%'}}}>
                            <CardActionArea>
                                <Link to={item.url} style={{ color: 'white', textDecoration: 'none'}}>
                                    <CustomImg
                                        component="img"
                                        image={`data:image/png;base64, ${item.banner}`}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        {item.title}
                                        </Typography>
                                        <Typography variant="body2">
                                        {item.description}
                                        </Typography>
                                    </CardContent>
                                </Link>
                            </CardActionArea>
                        </Card>
                        )
                      }
                </Box>
            </Box>
        </Box>;
    return (
        <Box>
            <Responsive size = 'desktop'>
                {getNews('desktop')}
            </Responsive>
            <Responsive size = 'tablet+desktop'>
                {getNews('t+desktop')}
            </Responsive>
            <Responsive size = 'mobile+tablet'>
                {getNews('m+tablet')}
            </Responsive>
        </Box>
    )
}