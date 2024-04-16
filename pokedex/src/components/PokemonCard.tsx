//import React, { useEffect } from "react";
import {
  Card,
  Number,
  PokemonImage,
  Name,
} from "../styles/PokemonCardStyles";
import { Pokemon } from "../data/types";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const PokemonCard: React.FC<Pokemon> = ({ id, name, imageUrl }) => {
  const formattedId = useMemo(() => `#${id.toString().padStart(3, "0")}`, [id]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokemon/${id}`);
  };

  return (
    <Card onClick={handleClick}>
      <Number>{formattedId}</Number>
      <PokemonImage src={imageUrl} alt={name} draggable="false" />
      <Name>{name}</Name>
    </Card>
  );
};

export default PokemonCard;
