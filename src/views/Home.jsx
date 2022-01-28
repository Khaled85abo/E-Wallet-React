import React, { useState, useMemo } from "react";
import Card from "../components/Card";
import SnackBar from "../components/SnackBar";
import { HomeWrapper, Cards, AddCardBtn } from "./Home.elements";
let count = 0;
const Home = ({ cards, addCard }) => {
  count++;
  console.log("count", count);
  console.log(cards);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  const deleteCard = () => {
    console.log(activeCardIndex);
  };
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

  const isEmpty = useMemo(() => (cards.length > 1 ? "full" : "empty"), [cards]);

  return (
    <HomeWrapper>
      {cards.length > 0 && (
        <>
          <p>ACTIVE CARD</p>
          <div onClick={() => setShow(true)}>
            <Card card={cards[activeCardIndex]} />
          </div>
        </>
      )}
      {show && (
        <SnackBar
          type="error"
          message="Do you want to delete this card?"
          toggleShow={toggleShow}
          deleteCard={deleteCard}
        />
      )}
      {cards.length > 1 && (
        <>
          <p>ALL CARDS</p>
          <Cards>
            {cards.map((card, index) => (
              <div onClick={() => setActiveCardIndex(index)}>
                <Card key={index} card={card} />
              </div>
            ))}
          </Cards>
        </>
      )}

      <AddCardBtn onClick={addCard} $state={isEmpty}>
        Add New Card
      </AddCardBtn>
    </HomeWrapper>
  );
};

export default Home;
