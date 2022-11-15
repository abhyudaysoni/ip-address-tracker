import React from "react";
import { useSelector } from "react-redux";
import { Container } from "./styles";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  const data = useSelector((state) => state.data.data);
  const lat = data?.location.lat || 37.3861;
  const lng = data?.location.lng || -122.0839;
  const position = [lat, lng];
  return (
    <Container>
      {data && (
        <MapContainer center={position} zoom={2} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>You are here.</Popup>
          </Marker>
        </MapContainer>
      )}
    </Container>
  );
};

export default Map;
