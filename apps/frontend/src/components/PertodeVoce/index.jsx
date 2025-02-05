import React, { useState, useEffect, useRef } from "react";
import Paginacao from "../Paginacao";
import { 
  Form,
  Label,
  Input,
  Title,
  Button
} from "./styled";
import "leaflet/dist/leaflet.css";
import L from "leaflet"; // Alterei para 'L', pois essa é a convenção do Leaflet


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

  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  
  
  useEffect(() => {
    if (mapRef.current) return; // Evita reinicialização do mapa

    mapRef.current = L.map(mapContainerRef.current).setView([-15.7801, -47.9292], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapRef.current);
  }, []);

  return (
    <>
      <div id="map" ref={mapContainerRef} style={{ height: "500px", width: "100%" }} />
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