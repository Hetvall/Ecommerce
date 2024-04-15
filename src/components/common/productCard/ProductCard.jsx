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

const ProductCard = ({ title, description, price, img, id }) => {
  return (
    <Grid xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{ maxWidth: 345, backgroundColor: "#84a98c", border: "3px solid" }}
      >
        <CardMedia sx={{ height: 200, width: 200 }} image={img} alt="plants" />
        <CardContent>
          <Typography
            sx={{ color: "white" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            sx={{ color: "white" }}
            variant="body3"
            color="text.secondary"
          >
            {description}
          </Typography>
          <Typography
            sx={{ color: "white" }}
            variant="body2"
            color="text.secondary"
          >
            {price}
          </Typography>
          <Typography
            sx={{ color: "white" }}
            variant="body2"
            color="text.secondary"
          >
            {id}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            sx={{
              color: "white",
              fontSize: "small",
            }}
          >
            Share
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
