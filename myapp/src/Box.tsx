import React from 'react';
import Card from './Card.tsx'; // Import the Card component
import './Box.css'; // Add your CSS styles here

interface CardData {
  bigText: string;
  paragraphText: string;
  imageSrc: string;
  smallText: string;
}

interface BoxProps {
  cardsData: CardData[];
  backgroundColor: string;
}

const Box: React.FC<BoxProps> = ({ cardsData, backgroundColor }) => {
  return (
    <div className="box-container" style={{ backgroundColor }}>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          bigText={card.bigText}
          backgroundColor={backgroundColor}
          paragraphText={card.paragraphText}
          imageSrc={card.imageSrc}
          smallText={card.smallText}
        />
      ))}
    </div>
  );
};

export default Box;
