import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ title, price, img, id }) => {
  return (
    <Grid xs={12} sm={6} md={4} lg={3} justifyContent="center">
      <Card className="product-cards" sx={{ bgcolor: "#84a98c" }}>
        <CardMedia
          sx={{ height: 200, width: 200 }}
          image={img}
          alt="plants-cards"
        />
        <CardContent>
          {/* <Typography
            sx={{ color: "white" }}
            variant="body2"
            color="text.secondary"
          >
            {id}
          </Typography> */}
          <Typography
            sx={{ color: "white" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          {/* <Typography
            sx={{ color: "white" }}
            variant="body3"
            color="text.secondary"
          >
            {description}
          </Typography> */}
          <Typography
            sx={{ color: "white" }}
            variant="body1"
            color="text.secondary"
          >
            Price: ${price}
          </Typography>
          {/* <Typography
            sx={{ color: "white" }}
            variant="body2"
            color="text.secondary"
          >
            Stock: {stock}
          </Typography> */}
        </CardContent>
        <CardActions>
          <Link to={`/itemDetail/${id}`}>
            <Button
              sx={{
                color: "white",
                fontSize: "small",
              }}
            >
              See Details
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
