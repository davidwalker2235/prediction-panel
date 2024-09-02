import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import erniLogo from '../images/ERNI_logo_color.png';
import Aida from "./aida";
// import {Aida} from 'aida-chatbot'

export default function ButtonAppBar() {
    return (
        <Box sx={{
            flexGrow: 1,
            position: 'fixed',
            width: '100%',
            zIndex: '10000',
            top: 0
        }} >
            <AppBar position="static">
                <Toolbar>
                    <img src={erniLogo}
                         width={70}
                         height={50}
                         alt="Picture of the author"
                    />
                    <Typography
                        fontFamily="arial"
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        ERNI Prediction System
                    </Typography>
                  <Aida />
                </Toolbar>
            </AppBar>
        </Box>
    );
}