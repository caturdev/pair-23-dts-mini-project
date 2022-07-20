import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const Header = () => {

    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const onSignOut = async () => {
        try {
            await signOut(getAuth());
            enqueueSnackbar('Selamat tinggal', { variant: 'success' });
            navigate('/');
        } catch (error) {
            console.log('error : ', error);
        }
    }

    return (
        <AppBar position="static" color="secondary">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box flexGrow="1">
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                textDecoration: "none",
                            }}
                        >
                            NONTON-IN
                        </Typography>
                    </Box>
                    <Box>
                        <IconButton onClick={onSignOut}>
                            <Avatar />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;