import React from "react";
import alimentacion from "./assets/images/alimentacion.svg";
import salud from "./assets/images/salud.svg";
import otros from "./assets/images/otros.svg";
import transporte from "./assets/images/transporte.svg";
import utilidades from "./assets/images/utilidades.svg";
import { Icono } from "./Components/UI";

export default (type) => {
  const Images = {
    // eslint-disable-next-line react/react-in-jsx-scope
    Restaurante: <Icono src={alimentacion} alt="Restaurante" />,
    Salud: <Icono src={salud} alt="Salud" />,
    Otros: <Icono src={otros} alt="Otros" />,
    Transporte: <Icono src={transporte} alt="transporte" />,
    Utilidades: <Icono src={utilidades} alt="utilidades" />,
    default: <Icono src={otros} alt="Otros" />,
  };
  return Images[type] || Images["default"];
};
