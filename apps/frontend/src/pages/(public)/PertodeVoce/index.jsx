import React, { useState, useEffect } from "react";
import Paginacao from "../../../components/Paginacao";
import { Space } from "./styled";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const PertodeVoce = () => {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    //Esse if verifica se a api "geolocation" é suportada pelo navegador
    if ("geolocation" in navigator) {

      /*
        A função navigator.geolocation.getCurrentPosition() mostra automaticamente na tela
        o pop up pra pedir permissão da localização. Essa função segue o curso de ação de 
        position se der tudo certo, ou fluxo de err se algum erro acontecer quando tentar 
        pegar a localização do usuário
      */
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
  }, []);

  return (
    <>
      <Paginacao text={"Família do sítio > Perto de você"} />
      <Space />
      {error ? (
        <p>{error}</p>
      ) : location.lat && location.lng ? (
        <h2>Latitude {location.lat}, Longitude {location.lng} </h2>
      ) : (
        <p>Obtendo sua localização...</p>
      )}
    </>
  );
};

export default PertodeVoce;
