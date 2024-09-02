import Paper from '@mui/material/Paper';
import * as React from "react";
import 'leaflet/dist/leaflet.css';
import MultiActionAreaCard from "../components/card";
import Weather from "../components/Weather";

const WeatherCard = () => {
    return (
        <Paper elevation={6}>
            <MultiActionAreaCard title="Weather" text='' >
                <Weather />
            </MultiActionAreaCard>
        </Paper>
    );
}

export default WeatherCard