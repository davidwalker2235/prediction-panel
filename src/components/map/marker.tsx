import { Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
import {useContext, useEffect, useRef, useState} from "react";
import {AppContext} from "../../providers/appProvider";
import {findStationByPosition, isTheSameMarker} from "../../utils/utils";
import {MarkerType} from "@/types/globalTypes";
import {set} from "immutable";


const LocationPoint = (props: MarkerType) => {
  const redPin = L.icon({ iconUrl: require('../../images/location-pin.png') });
  const [marketText, setMarketText] = useState('')
  const {setLocationSelected, markers, locationSelected}: any = useContext(AppContext)
  const markerRef = useRef(null)
  useEffect(() => {
    const xxx = isTheSameMarker(props, locationSelected)
    if(xxx) {
      setMarketText(props.text)
      const marker: any = markerRef.current
      if (marker) {
        marker.openPopup()
      }
    }
  }, [props, locationSelected])

  const handleClick = (info: any) => {
    const markerSelected = findStationByPosition(markers, info?.latlng || {});
    if (!!markerSelected) {
      setLocationSelected(markerSelected);
    } else {setLocationSelected(null)}
  }

  return (
      <Marker
        ref={markerRef}
        position={props.position}
        icon={redPin}
        eventHandlers={{
            click: handleClick
        }}>
        <Popup>
            {marketText}
        </Popup>
      </Marker>
  )
}

export default LocationPoint