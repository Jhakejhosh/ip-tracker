import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../Context";
import ReactMapGl, {Marker} from 'react-map-gl';
import { FaMapMarkerAlt } from "react-icons/fa";

const MapTrack = () => {

    const {lat, long} = useGlobalContext()
    const [viewPort, setViewPort] = useState({
        longitude: long,
        latitude: lat,
        zoom:14,
        bearing:0,
        pitch:0,
        width:"100%",
        height:"100%"
    });
    const mapDesign = "mapbox://styles/mapbox/streets-v11";
    const Access_token = "pk.eyJ1Ijoiamhha2VqaG9zaCIsImEiOiJja3oxMDNnN3UwYnR0MnJ0MjJkaDVzbnF1In0.3NPBvK-Z3aa8g-otsJFnIQ";

    useEffect(() => {
        const view = {...viewPort};
        view.latitude = lat;
        view.longitude = long;
        setViewPort(view)
    }, [lat, long])

    return (
        <div className="map">
           <ReactMapGl mapboxApiAccessToken = {Access_token}
           {...viewPort} onViewportChange={viewPort => setViewPort(viewPort)}
           mapStyle={mapDesign}>
               <Marker latitude={lat} longitude={long}>
                   <div className="mark">
                       <FaMapMarkerAlt size="50px" color="red"/>
                   </div>
               </Marker>
           </ReactMapGl>
        </div>
    )
}

export default MapTrack