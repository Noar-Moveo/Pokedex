import React from "react";
import { Card, Number, PokemonImage, Name } from "../styles/PokemonCardStyles";
import { Pokemon } from "../data/types";

const PokemonCard: React.FC<Pokemon> = ({ id, name, imageUrl }) => {
  return (
    <Card>
      <Number>#{id.toString().padStart(3, "0")}</Number>
      <PokemonImage src={imageUrl} alt={name} />
      <Name>{name}</Name>
    </Card>
  );
};

export default PokemonCard;
