import React from "react";
import Box from './Box.tsx'; // Import the Box component
const cardData = [
    {
      bigText: "Welcome to My Site",
      paragraphText: "This is a reusable card component in React.",
      imageSrc: "https://via.placeholder.com/100", // Sample image URL
      smallText: "Small text under the image"
    },
    {
      bigText: "Another Card",
      paragraphText: "You can customize the content of each card.",
      imageSrc: "https://via.placeholder.com/100", // Sample image URL
      smallText: "Another small text"
    },
    {
      bigText: "Card Three",
      paragraphText: "This is the third card in the set.",
      imageSrc: "https://via.placeholder.com/100", // Sample image URL
      smallText: "More info here"
    }
  ];

function About() {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>Learn more about us here.</p>
      <Box cardsData={cardData} backgroundColor="#f0f0f0" />
    </div>
  );
}

export default About;
