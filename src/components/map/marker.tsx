import { Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
import {useContext, useRef} from "react";
import {AppContext} from "../../providers/appProvider";


const LocationPoint = ({text, position}: {text: string, position: [number, number]}) => {
    const redPin = L.icon({ iconUrl: require('../../images/location-pin.png') });
    const context: any = useContext(AppContext)
    const isSelected = useRef<boolean>(false)

    const handleClick = (info: any) => {
        isSelected.current = !isSelected.current
        context?.setLocationSelected(isSelected.current ? info.target.getLatLng() : null)
    }

    return (
        <Marker
            position={position}
            icon={redPin}
            eventHandlers={{
                click: handleClick
            }}>
            <Popup>
                {text}
            </Popup>
        </Marker>
    )
}

export default LocationPoint