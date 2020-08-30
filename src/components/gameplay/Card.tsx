import React from "react";
import { CardData } from "../../models/cards/CardData";

interface CardProps {
	card: CardData;
}
export function Card({ card }: CardProps) {
	return <img src={card.url} alt={card.description} width="300px" />;
}
