import React from 'react';
import './Card.css'; // Add your CSS styles here

interface CardProps {
  bigText: string;
  backgroundColor: string;
  paragraphText: string;
  imageSrc: string;
  smallText: string;
}

const Card: React.FC<CardProps> = ({ 
  bigText, 
  backgroundColor, 
  paragraphText, 
  imageSrc, 
  smallText 
}) => {
  return (
    <div className="card-container" style={{ backgroundColor }}>
      <h2>{bigText}</h2>
      <p>{paragraphText}</p>
      <hr className="card-divider" />
      <img src={imageSrc} alt="Card image" className="card-image" />
      <p className="small-text">{smallText}</p>
    </div>
  );
};

export default Card;
