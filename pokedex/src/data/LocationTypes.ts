export interface Location {
    lat: number;
    lng: number;
  }
  
export interface MapComponentProps {
    center: Location;
    pokemonLocation: Location;
    isLoadedMap: boolean;
    pokemonIcon: string;
    moveoIcon: string;
  }
  
 export  const containerStyle = {
    width: "500px",
    height: "500px",
  };
  
 export const MoveoLocation = {
    latitude: 32.064584,
    longitude: 34.771829,
  };
  
 export const apiKey = "AIzaSyCbRoE1LBwpa95FBvWtzkigLzRZl4YuMGQ"; 

 
 export const center = {
    lat: 32.0853,
    lng: 34.7818,
  };

  export const TelAvivBounds = {
    north: 32.0853,
    south: 32.056,
    east: 34.7818,
    west: 34.764889,
  };

  export type GenerateLocationFunction = () => Location;

  export enum TravelMode {
    WALKING = "WALKING",
    DRIVING = "DRIVING"
}