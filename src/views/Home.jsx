import React, { useState, useMemo } from "react";
import Card from "../components/Card";
let count = 0;
const Home = ({ cards }) => {
  count++;
  console.log("count", count);
  console.log(cards);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const CardsMemo = useMemo(() => {
    return (
      <>
        {cards.map((card, index) => (
          <div onClick={() => setActiveCardIndex(index)}>
            <Card key={index} card={card} />
          </div>
        ))}
      </>
    );
  }, [cards]);
  return (
    <div>
      {cards.length > 1 && (
        <>
          <p>ACTIVE CARD</p>
          <Card card={cards[activeCardIndex]} />
        </>
      )}

      <p>ALL CARDS</p>

      {cards.map((card, index) => (
        <div onClick={() => setActiveCardIndex(index)}>
          <Card key={index} card={card} />
        </div>
      ))}
    </div>
  );
};

export default Home;
