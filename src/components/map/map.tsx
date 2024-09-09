import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import LocationPoint from "./marker";
import {useContext} from "react";
import {AppContext} from "../../providers/appProvider";
import {MarkerType} from "../../types/globalTypes";

export enum MapType {
    heatMap = "heatMap",
    positions = "positions",
}

const Map = ({center, mapType, hasFullScreen}: {center: [number, number], mapType?: MapType, hasFullScreen?: boolean}) => {
    const context: any = useContext(AppContext)

    return (
        <MapContainer center={center} zoom={17} scrollWheelZoom style={{height: 400}}>
            <TileLayer
                attribution='&copy; <a href="https://www.betterask.erni/">ERNI Consulting</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {context?.markers.map((data: MarkerType, index: number) => <LocationPoint {...data} key={`${data.markerKey}-${index}`} />)}
        </MapContainer>
    )
}

export default Map
