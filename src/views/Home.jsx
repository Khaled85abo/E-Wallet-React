import React, { useState, useMemo } from "react";
import Card from "../components/Card";
import { HomeWrapper, Cards, AddCardBtn } from "./Home.elements";
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
    <HomeWrapper>
      {cards.length > 1 && (
        <>
          <p>ACTIVE CARD</p>
          <Card card={cards[activeCardIndex]} />
        </>
      )}

      <p>ALL CARDS</p>
      <Cards>
        {cards.map((card, index) => (
          <div onClick={() => setActiveCardIndex(index)}>
            <Card key={index} card={card} />
          </div>
        ))}
      </Cards>
      <AddCardBtn>Add New Card</AddCardBtn>
    </HomeWrapper>
  );
};

export default Home;
