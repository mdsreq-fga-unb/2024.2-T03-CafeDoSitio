import React, { useState, useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Resultados from "../Resultados";

import {
  Title,
  Label,
  Form,
  Button,
  LocAtual,
  Input
} from "./styled";

function PertodeVoce() {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [error, setError] = useState(null);
  const [produto, setProduto] = useState(""); // Estado para armazenar o nome do produto digitado
  const [nomeProdutoBusca, setNomeProdutoBusca] = useState(""); // Estado que será passado para Resultados

  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const markerRef = useRef(null);

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

  const handleBuscarProduto = (e) => {
    e.preventDefault(); // Evita o comportamento padrão de submit
    setNomeProdutoBusca(produto); // Define o nome do produto a ser buscado
  };

  useEffect(() => {
    if (mapRef.current) return;

    mapRef.current = L.map(mapContainerRef.current).setView([-15.7801, -47.9292], 12);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(mapRef.current);
  }, []);

  useEffect(() => {
    if (!mapRef.current || location.lat === null || location.lng === null) return;

    if (markerRef.current) {
      mapRef.current.removeLayer(markerRef.current);
    }

    markerRef.current = L.marker([location.lat, location.lng])
      .addTo(mapRef.current)
      .bindTooltip("Você está aqui!", { permanent: false, direction: "top" });

    mapRef.current.setView([location.lat, location.lng], 13);
  }, [location]);

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
        <Input
          type="text"
          id="produto"
          placeholder="Digitar produto que deseja encontrar"
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
        />
        <Button type="button" onClick={handleBuscarProduto}>
          Buscar
        </Button>
      </Form>

      <Resultados nomeProduto={nomeProdutoBusca} />

      {error && <p>{error}</p>}

      <div
        id="map"
        ref={mapContainerRef}
        style={{ height: "500px", width: "100%", marginTop: "20px" }}
      />
    </>
  );
}

export default PertodeVoce;
