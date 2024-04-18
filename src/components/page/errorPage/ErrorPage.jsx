import "./ErrorPage.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const ErrorPage = () => {
  return (
    <div className="error-container">
      <img
        className="error-image"
        src="https://res.cloudinary.com/dsrxguglp/image/upload/v1713326601/404error.jpg"
        alt="404-Not Found"
      />
      <Typography>
        We are sorry, the page you are trying to search does not exist!
      </Typography>

      <Link to="/">
        <Button variant="outlined" color="error" sx={{ m: 2 }}>
          GO BACK
        </Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
