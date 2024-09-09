import React from 'react';
import Grid from "@mui/material/Grid";
import MapCard from "./layouts/mapCard";
import BicingListCard from "./layouts/bicingListCard";
import BarChartCard from "./layouts/barChartCard";
import WeatherCard from "./layouts/weatherCard";

function App() {
  return (
      <Grid container spacing={2} paddingTop={10}>
        <Grid item xs={8} md={8} lg={8}>
          <MapCard />
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <BicingListCard />
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <BarChartCard />
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <WeatherCard />
        </Grid>
      </Grid>
  );
}

export default App;
