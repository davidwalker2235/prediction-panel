import Paper from '@mui/material/Paper';
import * as React from "react";
import 'leaflet/dist/leaflet.css';
import MultiActionAreaCard from "../components/card";
import Map from '../components/map/map';

const MapCard = () => {
    return (
        <Paper elevation={6}>
            <MultiActionAreaCard
              title="Map"
              text=''
            >
                <Map center={[41.38602511798184, 2.1694234966120516]} />
            </MultiActionAreaCard>
        </Paper>
    );
}

export default MapCard