import Paper from '@mui/material/Paper';
import * as React from "react";
import 'leaflet/dist/leaflet.css';
import MultiActionAreaCard from "../components/card";
import BarCharts from "../components/BarChart/BarChart";

const BarChartCard = () => {
    return (
        <Paper elevation={6}>
            <MultiActionAreaCard title="Bike estimate" text='' >
                <BarCharts />
            </MultiActionAreaCard>
        </Paper>
    );
}

export default BarChartCard