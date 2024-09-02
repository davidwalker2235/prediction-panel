// @ts-ignore
import { HeatmapLayer } from "react-leaflet-heatmap-layer-v3";
import {addressPoints as points} from "./addressPoints";

const HeatMap = ({active, addressPoints}: {active?: boolean, addressPoints?: [number?, number?, string?]}) => {
    const heatmapOptions = {
        radius: 20,
        blur: 50,
        maxZoom: 18,
        minOpacity: 0.5,
        maxOpacity: 1
    };

    return (
        active ? <HeatmapLayer
            fitBoundsOnLoad
            fitBoundsOnUpdate
            points={addressPoints || points}
            longitudeExtractor={(point: any) => point[1]}
            latitudeExtractor={(point: any) => point[0]}
            key={Math.random() + Math.random()}
            intensityExtractor={(point: any) => parseFloat(point[2])}
            {...heatmapOptions}
        /> : null
    )
}

export default HeatMap