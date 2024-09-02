import Paper from '@mui/material/Paper';
import * as React from "react";
import 'leaflet/dist/leaflet.css';
import MultiActionAreaCard from "../components/card";
import {useContext} from "react";
import {AppContext} from "../providers/appProvider";
import Map from '../components/map/map';

const MapCard = () => {
    const context: any = useContext(AppContext)
    const cardText = context?.locationSelected ? `The point selected is ${context?.locationSelected}` : "No pointer selected"

    return (
        <Paper elevation={6}>
            <MultiActionAreaCard
              title="Map"
              text={cardText}
            >
                <Map center={[41.38602511798184, 2.1694234966120516]} />
            </MultiActionAreaCard>
        </Paper>
    );
}

export default MapCard