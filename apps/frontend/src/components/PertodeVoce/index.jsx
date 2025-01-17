import React, { useState, useEffect } from "react";
import Paginacao from "../Paginacao";
import { 
  Form,
  Label,
  Input,
  Title,
  Button
} from "./styled";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function PertodeVoce()  {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [error, setError] = useState(null);


  const handleGetLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (err) => {
          setError("Erro ao obter localização: " + err.message);
        }
      );
    } else {
      setError("Geolocalização não é suportada por este navegador.");
    }
  };

  return (
    <>
      <Form>
      <Title>Perto de Você</Title>
        <Label htmlFor="name" style={{color: "#006343"}}>Onde você quer encontrar a Família do Sítio?</Label>
        <Input type="text" id="name" placeholder="Digitar CEP ou cidade"/>
        <Button type="button" onClick={handleGetLocation}>ou clique aqui para usar a localização atual</Button>
      </Form>
      {error ? (
        <p>{error}</p>
      ) : location.lat && location.lng ? (
        <h2>Latitude {location.lat}, Longitude {location.lng} </h2>
      ) : null}
    </>
  );
};

export default PertodeVoce;