import React, { useState, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { addMarkersAndRoute } from "../utils/locationUtils";
import {
  MapComponentProps,
  containerStyle,
  MoveoLocation,
  apiKey,
  TravelMode
} from "../data/LocationTypes";

const MapComponent: React.FC<MapComponentProps> = ({
  isLoadedMap,
  center,
  pokemonLocation,
  pokemonIcon,
  moveoIcon,
}) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [travelMode, setTravelMode] = useState<TravelMode>(TravelMode.WALKING);
  const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer | null>(null);
  const prevDirectionsRenderer = useRef<google.maps.DirectionsRenderer | null>(null);

  //const apiKey = import.meta.env.VITE_API_KEY;


  useEffect(() => {
    async function loadMap() {
      try {
        const loader = new Loader({
          apiKey: apiKey,
          libraries: ["places"],
        });
        await loader.load();
        
        if (mapRef.current) {
          const localMap = new google.maps.Map(mapRef.current, {
            center,
            zoom: 13,
          });
          setMap(localMap);
        }
      } catch (error) {
        console.error("Error loading Google Maps", error);
      }
    }

    loadMap();
  }, [center]);

  useEffect(() => {
    if (isLoadedMap && map) {
      const moveoCoordinates = {
        lat: MoveoLocation.latitude,
        lng: MoveoLocation.longitude,
      };

      if (prevDirectionsRenderer.current) {
        prevDirectionsRenderer.current.setMap(null); 
      }

      if (travelMode === TravelMode.WALKING) {
        const newDirectionsRenderer = addMarkersAndRoute(
          map,
          pokemonIcon,
          moveoIcon,
          { lat: pokemonLocation.lat, lng: pokemonLocation.lng },
          moveoCoordinates,
          google.maps.TravelMode.WALKING,
        );
        setDirectionsRenderer(newDirectionsRenderer);
        prevDirectionsRenderer.current = newDirectionsRenderer;
      } else if (travelMode === TravelMode.DRIVING) {
        const newDirectionsRenderer = addMarkersAndRoute(
          map,
          pokemonIcon,
          moveoIcon,
          { lat: pokemonLocation.lat, lng: pokemonLocation.lng },
          moveoCoordinates,
          google.maps.TravelMode.DRIVING,
        );
        setDirectionsRenderer(newDirectionsRenderer);
        prevDirectionsRenderer.current = newDirectionsRenderer;
      }
    }
  }, [map, isLoadedMap, pokemonLocation, moveoIcon, pokemonIcon, travelMode]);

  const handleShowDirectionsWalk = () => {
    setTravelMode(TravelMode.WALKING);

  };

  const handleShowDirectionsDrive = () => {
    setTravelMode(TravelMode.DRIVING);
  };

  return (
    <div>
      <button onClick={handleShowDirectionsWalk} autoFocus>
        WALKING
      </button>
      <button onClick={handleShowDirectionsDrive}>
        DRIVING
      </button>
      <div ref={mapRef} style={containerStyle}></div>
    </div>
  );
};

export default MapComponent;

