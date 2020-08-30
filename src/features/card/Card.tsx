import React from "react";
import { CardData } from "../../models/cards/CardData";

interface CardProps {
	card: CardData;
}
export const Card: React.FC<CardProps> = ({ card }) => {
	return <img src={card.url} alt={card.description} width="300px" />;
};
