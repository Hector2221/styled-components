import React from "react";

import Header from "./Components/Header";
import Container from "./Components/Container";
import { GlobalStyled } from "./GlobalStyled";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { ThemeProvider } from "styled-components";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";
import { useState } from "react";

function App() {
  const [tema, setTema] = useState(true);
  const toggleTema = () => {
    setTema((tema) => !tema);
  };
  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
      <GlobalStyled />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
