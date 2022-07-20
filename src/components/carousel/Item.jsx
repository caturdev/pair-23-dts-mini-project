import { useNavigate } from "react-router-dom";
import { Card, CardMedia } from "@mui/material";

const Item = ({ data }) => {
    const navigate = useNavigate();

    return (
        <Card
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate(`/movie/${data.id}`)}
        >
            <CardMedia
                component="img"
                height="400"
                image={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                alt="green iguana"
            />
        </Card>
    )
}

export default Item;