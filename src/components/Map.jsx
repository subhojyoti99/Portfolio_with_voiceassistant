import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: YOUR_API_KEY,
    libraries,
  });

  const [center, setCenter] = useState({
    lat: 22.538704,
    lng: 88.363126,
  });

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "400px" }}
      center={center}
      zoom={15}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}

export default Map;
