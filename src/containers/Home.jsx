import { Box, Divider, Typography } from "@mui/material";
import { Fragment } from "react";
import Auth from "../components/Auth";
import Body from "../components/Body";
import MovieCarousel from "../components/carousel/MovieCarousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Section from "../components/Section";

const Home = () => {
    return (
        <Fragment>
            <Auth>
                <Body>
                    <Header />
                    <Main>
                        <Section>
                            <Box mb={5}>
                                <Typography variant="h6" component="h1">SEDANG TAYANG</Typography>
                                <Divider sx={{ my: 1 }} />
                                <MovieCarousel type="now_playing" />
                            </Box>
                            <Box mb={5}>
                                <Typography variant="h6" component="h1">RATING TERBAIK</Typography>
                                <Divider sx={{ my: 1 }} />
                                <MovieCarousel type="top_rated" />
                            </Box>
                            <Box mb={5}>
                                <Typography variant="h6" component="h1">SEGERA HADIR</Typography>
                                <Divider sx={{ my: 1 }} />
                                <MovieCarousel type="upcoming" />
                            </Box>
                        </Section>
                    </Main>
                    <Footer />
                </Body>
            </Auth>
        </Fragment>
    )
}

export default Home;