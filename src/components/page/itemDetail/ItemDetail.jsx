import { Typography, CardMedia, Card } from "@mui/material";
import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <Card
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
        sx={{ color: "black", mb: "20px" }}
        variant="body1"
        color="text.secondary"
      >
        {item.description}
      </Typography>

      <Typography
        sx={{ color: "black", mb: "20px" }}
        variant="h5"
        color="text.secondary"
      >
        Available stock: {item.stock}
      </Typography>

      <Typography sx={{ color: "black" }} variant="h3" color="text.secondary">
        ${item.price}
      </Typography>

      <CardMedia
        sx={{ height: 300, width: 300 }}
        component={"img"}
        image={item.img}
        alt="plants"
      />

      <CounterContainer stock={item.stock} onAdd={onAdd} initial={initial} />
    </Card>
  );
};

export default ItemDetail;
