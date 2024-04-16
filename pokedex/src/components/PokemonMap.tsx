import React, { useState, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { addMarkersAndRoute } from "../utils/locationUtils";
import { MapComponentProps, containerStyle, MoveoLocation, apiKey } from "../data/LocationTypes";


const MapComponent: React.FC<MapComponentProps> = ({
  isLoadedMap,
  center,
  pokemonLocation,
  pokemonIcon,
  moveoIcon,
}) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    
    const loader = new Loader({
      apiKey: apiKey,
      libraries: ["places"],
    });

    console.log(loader);
    

    loader
      .importLibrary("core")
      .then(() => {
        if (mapRef.current) {
          const localMap = new google.maps.Map(mapRef.current, {
            center,
            zoom: 13,
          });
          setMap(localMap);
        }
      })
      .catch((error) => {
        console.error("Error loading Google Maps", error);
      });
  }, [center]);


  useEffect(() => {
    
    if (isLoadedMap && map) {
      const moveoCoordinates = { lat: MoveoLocation.latitude, lng: MoveoLocation.longitude };
      addMarkersAndRoute(
        map,
        pokemonIcon,
        moveoIcon,
        { lat: pokemonLocation.lat, lng: pokemonLocation.lng },
        moveoCoordinates,
        google.maps.TravelMode.WALKING,
        () => {}  
      );
    }
  }, [map, isLoadedMap, pokemonLocation, moveoIcon, pokemonIcon ]);

  return (
    <div>
      <div ref={mapRef} style={containerStyle}></div>
    </div>
  );
};

export default MapComponent;
