import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker, LoadScript } from '@react-google-maps/api';
import { WrapperFull } from "../Layout/WrapperFull";
import { CircleNotch } from "phosphor-react";

const containerStyle = {
  width: '100%',
  height: '100%'
};

const coords = {
  lat: -4.5677299, lng: -37.7691225
};

const GoogleMaps: React.FC = () => { 
  const [loading, setLoading] = useState(true);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_API_KEY_GOOGLE
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback((map: any) => {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(coords);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback((map: any) => {
    setMap(null)
  }, [])

  return (
    <React.Fragment>
      <LoadScript
        googleMapsApiKey={import.meta.env.VITE_API_KEY_GOOGLE}  
      >
        {isLoaded ? (
          <GoogleMap
          mapContainerStyle={containerStyle}
            center={coords}
            zoom={17}
            options={{mapTypeId: "satellite"}}
            
            onLoad={onLoad}
            // onUnmount={onUnmount}
            >
              <Marker position={coords}
              options={{
                label: {
                  text: "Position current",
                  className: "-mt-11 bg-zinc-50 px-2 py-1 rounded font-bold border-2 border-zinc-300"
                }
              }}/>
          </GoogleMap>
          ) : (
            <WrapperFull fullScreen={false}>
              <CircleNotch size={36} className="animate-spin" />
            </WrapperFull>
          )
        }
      </LoadScript>
    </React.Fragment>
  )
}

export default React.memo(GoogleMaps)