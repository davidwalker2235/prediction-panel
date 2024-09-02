"use client"

import Paper from '@mui/material/Paper';
import * as React from "react";
import 'leaflet/dist/leaflet.css';
import MultiActionAreaCard from "../components/card";
import BicingList from "../components/BicingList";

const LineChartCard = () => {
    return (
        <Paper elevation={6}>
            <MultiActionAreaCard title="Line Chart" text="">
                <BicingList />
            </MultiActionAreaCard>
        </Paper>
    );
}

export default LineChartCard