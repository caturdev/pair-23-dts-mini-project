import MainComponent from "../components/Main";
import { Fragment } from "react"
import Body from "../components/Body"
import Header from "../components/Header"
import Section from "../components/Section"
import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();

    return (
        <Fragment>
            <Body>
                <Header />
                <MainComponent>
                    <Section>
                        <Grid container justifyContent="center">
                            <Grid item xs={12} md={4}>
                                <Card sx={{ bgcolor: '#222831' }}>
                                    <CardContent sx={{ textAlign: 'center' }}>
                                        <Typography align="center" variant="h4" component="h1"> Selamat Datang </Typography>
                                        <Typography align="center" variant="body1"> Temukan informasi-informasi menarik seputar film terkini di sini </Typography>
                                        <Box mt={5}>
                                            <Button variant="contained" color="primary" onClick={() => { navigate('/login') }}> Login </Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Section>
                </MainComponent>
            </Body>
        </Fragment>
    )
}

export default Main;