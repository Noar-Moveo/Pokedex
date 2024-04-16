import { Location } from "../data/types";
import { TelAvivBounds, GenerateLocationFunction } from "../data/LocationTypes";


export const  getPokemonLocation = (id: string, generateLocation: GenerateLocationFunction) => {
    const locationKey = `pokemonLocation_${id}`;
    const storedLocation = localStorage.getItem(locationKey);
  
    if (storedLocation) {
      return JSON.parse(storedLocation);
    } else {
      const newLocation = generateLocation();
      localStorage.setItem(locationKey, JSON.stringify(newLocation));
      return newLocation;
    }
};

const generateRandomCoordinate = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};
export const generateRandomPokemonLocation = (): Location => {
  const latitude = generateRandomCoordinate(
    TelAvivBounds.south,
    TelAvivBounds.north
  );
  const longitude = generateRandomCoordinate(
    TelAvivBounds.west,
    TelAvivBounds.east
  );

  return { lat: latitude, lng: longitude };
};

export const addMarkersAndRoute = (
  map: google.maps.Map,
  originIcon: string,
  destinationIcon: string,
  origin: google.maps.LatLngLiteral,
  destination: google.maps.LatLngLiteral,
  mode: google.maps.TravelMode = google.maps.TravelMode.DRIVING,
): google.maps.DirectionsRenderer => {
  if (!map) {
    console.error("Map is null. Cannot add markers and route.");
    throw new Error("Map is null. Cannot add markers and route.");
  }

  const createMarker = (position: google.maps.LatLngLiteral, iconUrl: string) => {
    return new google.maps.Marker({
      position: position,
      map: map,
      icon: {
        url: iconUrl,
        scaledSize: new google.maps.Size(33, 33),
      },
    });
  };

  const originMarker = createMarker(origin, originIcon);
  const destinationMarker = createMarker(destination, destinationIcon);

  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer({
    map: map,
    suppressMarkers: true
  });

  const originPosition = originMarker.getPosition();
  const destinationPosition = destinationMarker.getPosition();

  if (originPosition && destinationPosition) {
    const request: google.maps.DirectionsRequest = {
      origin: originPosition,
      destination: destinationPosition,
      travelMode: mode,
    };

    directionsService.route(request, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(result);
      } else {
        console.error("Error fetching directions:", status);
      }
    });
  } else {
    console.error("Markers' positions are undefined.");
  }

  return directionsRenderer;
};
