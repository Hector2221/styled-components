import React from "react";
import { Box, Btn } from "../UI";
import { lista } from "../../info";
import Card from "../Card";

export const Linst = () => {
  return (
    <Box>
      {lista.cargos.map((cargo, i) => {
        return <Card key={i} cargo={cargo} />;
      })}
      <Btn>Ver mas</Btn>
    </Box>
  );
};
