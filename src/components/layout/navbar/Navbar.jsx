import "./Navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#dad7cd", p: "20px" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/">
              <img
                style={{ width: "100px" }}
                className="plant-logo"
                src="https://res.cloudinary.com/dsrxguglp/image/upload/v1712711016/zkfye9rcxizf27x7kz1m.webp"
                alt="plant logo"
              />
            </Link>

            <Typography
              variant="h4"
              noWrap
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#344e41",
                textDecoration: "none",
              }}
            >
              Plants & home decor
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              ></IconButton>
              <Menu
                open={false}
                id="menu-appbar"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              ></Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "flex" },
                justifyContent: "right",
                p: "10px",
                m: "20px",
              }}
            >
              <Typography
                sx={{
                  color: "#344e41",
                  display: { xs: "none", md: "flex", xl: "flex" },
                  textAlign: "center",
                  m: "30px",
                }}
                variant="body1"
              >
                Categories
              </Typography>
              <ul className="category-list">
                <li>
                  <Link
                    to="/"
                    className="category-link"
                    style={{ textDecoration: "none" }}
                  >
                    All
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category/Indoor"
                    style={{ textDecoration: "none" }}
                  >
                    Indoor
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category/Outdoor"
                    style={{ textDecoration: "none" }}
                  >
                    Outdoor
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category/Cactus"
                    style={{ textDecoration: "none" }}
                  >
                    Cactus
                  </Link>
                </li>
              </ul>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                mt: "20px",
              }}
            >
              <CartWidget />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* <ul>
        <Link to="/">All</Link>
        <Link to="/category/Indoor">Indoor</Link>
        <Link to="/category/Outdoor">Outdoor</Link>
        <Link to="/category/Cactus">Cactus</Link>
        <Link to="/category/PlantsPaintings">Plants Paintings</Link>
      </ul>
      <CartWidget />

      <h1 className="title-page">Plants & home decor</h1> */}
    </div>
  );
};

export default Navbar;
