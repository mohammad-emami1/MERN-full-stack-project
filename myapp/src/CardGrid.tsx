// CardGrid.tsx
import React from 'react';
import MarkdownCard from './MarkdownCard';
import './CardGrid.css';

interface Card {
  color: string;
  title: string;
  content: string;
  titlePosition: 'left' | 'center' | 'right';
}

interface CardGridProps {
  cards: Card[];
}

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <MarkdownCard
          key={index}
          color={card.color}
          title={card.title}
          content={card.content}
          titlePosition={card.titlePosition}
        />
      ))}
    </div>
  );
};

export default CardGrid;
