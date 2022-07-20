import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";

const Header = () => {
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
                        <IconButton>
                            <Avatar />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;