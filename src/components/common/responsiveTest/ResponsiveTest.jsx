import { Grid, Typography } from "@mui/material";

const ResponsiveTest = () => {
  return (
    <div>
      <Grid container>
        <Grid
          item
          sx={{ backgroundColor: { xs: "Red", sm: "blue" } }}
          xs={12}
          sm={6}
          md={4}
        >
          <Typography variant="h1" align="center">
            Caja 1
          </Typography>
        </Grid>
        <Grid
          item
          sx={{ backgroundColor: "Red", padding: { xs: "20px", sm: "120px" } }}
          xs={12}
          sm={6}
          md={4}
        >
          <Typography>Caja 2</Typography>
        </Grid>
        <Grid item sx={{ backgroundColor: "Red" }} xs={12} sm={6} md={4}>
          <Typography variant="h4">Caja 3</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResponsiveTest;
