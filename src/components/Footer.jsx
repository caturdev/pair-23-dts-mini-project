import { Box, Container, Grid, Typography } from "@mui/material";
import { Fragment } from "react";

const Footer = () => {
    return (
        <Fragment>
            <Box p={10} sx={{ bgcolor: '#222831' }}>
                <Container>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <Box >
                                    Logo
                                </Box>
                            </Grid>
                            <Grid item xs={3}>
                                <Box>
                                    <Typography> Tentang </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={3}>
                                <Box>
                                    <Typography> Tentang </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={3}>
                                <Box>
                                    <Typography> Tentang </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </Fragment>
    );
}

export default Footer;