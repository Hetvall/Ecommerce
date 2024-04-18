import { Typography, CardMedia, Button } from "@mui/material";

const ItemDetail = ({ item }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{ color: "#588157", fontFamily: "cursive" }}
        gutterBottom
        variant="h2"
        component="div"
      >
        {item.title}
      </Typography>
      <Typography
        sx={{ color: "black" }}
        variant="body1"
        color="text.secondary"
      >
        {item.description}
      </Typography>
      <CardMedia
        sx={{ height: 300, width: 300 }}
        image={item.img}
        alt="plants"
      />
      <Button
        sx={{
          color: "inherit",
          fontSize: "medium",
          marginTop: "20px",
          border: "1px solid",
        }}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ItemDetail;
