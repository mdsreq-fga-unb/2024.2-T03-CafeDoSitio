import React, { useState, useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import {
  Title,
  Label,
  Form,
  Button,
  LocAtual,
  Input
} from "./styled"

function PertodeVoce() {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [error, setError] = useState(null);

  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const markerRef = useRef(null); // Referência para o marcador

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

  // Inicializa o mapa apenas uma vez
  useEffect(() => {
    if (mapRef.current) return;

    mapRef.current = L.map(mapContainerRef.current).setView([-15.7801, -47.9292], 12);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(mapRef.current);
  }, []);

  // Adiciona um marcador quando a localização estiver disponível
  useEffect(() => {
    if (!mapRef.current || location.lat === null || location.lng === null) return;

    // Remove marcador anterior, se existir
    if (markerRef.current) {
      mapRef.current.removeLayer(markerRef.current);
    }

    // Adiciona novo marcador
    markerRef.current = L.marker([location.lat, location.lng])
      .addTo(mapRef.current)
      .bindTooltip("Você está aqui!", { permanent: false, direction: "top" });

    // Move o mapa para a nova localização
    mapRef.current.setView([location.lat, location.lng], 13);
  }, [location]); // Roda apenas quando `location` muda

  // return (
  //   <>
  //     <div id="map" ref={mapContainerRef} style={{ height: "500px", width: "100%" }} />
  //     <Form>
  //     <Title>Perto de Você</Title>
  //       <Label htmlFor="name" style={{color: "#006343"}}>Onde você quer encontrar a Família do Sítio?</Label>
  //       <Input type="text" id="name" placeholder="Digitar CEP ou cidade"/>
  //       <Button type="button" onClick={handleGetLocation}>ou clique aqui para usar a localização atual</Button>
  //     </Form>
  //     {error ? (
  //       <p>{error}</p>
  //     ) : location.lat && location.lng ? (
  //       <h2>Latitude {location.lat}, Longitude {location.lng} </h2>
  //     ) : null}
  //   </>
  // );
return (
  <>
    <Form>
      <Title>Perto de Você</Title>
      <Label htmlFor="name" style={{ color: "#006343" }}>
        Onde você quer encontrar a Família do Sítio?
      </Label>
      <Input type="text" id="name" placeholder="Digitar CEP ou cidade" />
      <LocAtual as="p" onClick={handleGetLocation}>
        ou clique aqui para usar a localização atual
      </LocAtual>
      <Input type="text" id="produto" placeholder="Digitar produto que deseja encontrar" />
      <Button type="submit">
        Buscar
      </Button>
    </Form>

    {error && <p>{error}</p>}  
    <div id="map" ref={mapContainerRef} style={{ height: "500px", width: "100%", marginTop: "20px" }} />
  </>
);

}

export default PertodeVoce;
