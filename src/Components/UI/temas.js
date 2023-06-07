import {
  fondoClaro,
  contenidoClaro,
  textoFondoClaro,
  fondoOscuro,
  contenudoOscuro,
  textoFondoOscuro,
} from "./variables";

export const temaClaro = {
  body: fondoClaro,
  inside: contenidoClaro,
  text: textoFondoClaro,
  filter: "",
};

export const temaOscuro = {
  body: fondoOscuro,
  inside: contenudoOscuro,
  text: textoFondoOscuro,
  filter: "invert(100%)",
};
