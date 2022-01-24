import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const { logoNavigator } = require('../../../utils/assets/images.json');

const pages = ['ABOUT', 'CHARACTERS', 'TEAM'];

const Topbar = () => {
  return (
    <AppBar position="absolute" sx={{ background: '#08323e', height: 70, zIndex: 1 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img width="182px" src={`data:image/png;base64, ${logoNavigator} `}/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
            {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ margin: '0 10px', display: 'block', fontWeight: 700, fontSize: '1rem' }}
                >
                  <AnchorLink style = {{ color: '#fcfbdd', textDecoration: 'none' }} href={`#${page}`}>{page}</AnchorLink>
                </Button>
              ))}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ margin: '0 20px', display: 'block', fontWeight: 700, fontSize: '1.5rem' }}
              >
                <AnchorLink style = {{ color: '#fcfbdd', textDecoration: 'none' }} href={`#${page}`}>{page}</AnchorLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Topbar;
