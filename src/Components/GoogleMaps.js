import React from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const GoogleMaps = () => {

    const containerStyle = {
        width: '100%',
        height: '350px'
    };

    const center = {
        lat: -3.745,
        lng: -38.523
    };

    return (
        <>
            <LoadScript
                googleMapsApiKey="YOUR_API_KEY"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                </GoogleMap>
            </LoadScript>
        </>
    );
};

export default GoogleMaps;
