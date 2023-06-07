import React from "react";
import alimentacion from "./assets/images/alimentacion.svg";
import salud from "./assets/images/salud.svg";
import otros from "./assets/images/otros.svg";
import transporte from "./assets/images/transporte.svg";
import utilidades from "./assets/images/utilidades.svg";
import { Icono, IconoTema } from "./Components/UI";

export default (type) => {
  const Images = {
    // eslint-disable-next-line react/react-in-jsx-scope
    Restaurante: <IconoTema src={alimentacion} alt="Restaurante" />,
    Salud: <IconoTema src={salud} alt="Salud" />,
    Otros: <IconoTema src={otros} alt="Otros" />,
    Transporte: <IconoTema src={transporte} alt="transporte" />,
    Utilidades: <IconoTema src={utilidades} alt="utilidades" />,
    default: <IconoTema src={otros} alt="Otros" />,
  };
  return Images[type] || Images["default"];
};
