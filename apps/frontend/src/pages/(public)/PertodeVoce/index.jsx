import React, { useState, useEffect } from "react";
import Paginacao from '../../../components/Paginacao';
import {
  Space
} from "./styled";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const PertodeVoce = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error("Erro ao obter localização:", error);
        }
      );
    } else {
      console.log("Geolocalização não suportada.");
    }
  }, []);

  return (
    <section>
    <Paginacao text={"Família do sítio > Perto de você"}/>
    <Space/>
    <div>
      {location ? (
        <p>Posição do usuário: Latitude = {location[0]}, Longitude = {location[1]}</p>
        
      ) : (
        <p>Obtendo localização...</p>
      )}
      
    </div>
    </section>
  );
};

export default PertodeVoce;
