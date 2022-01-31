/* eslint-disable import/first */
import React, { useState, useEffect, Suspense } from "react";
import GlobalStyle from "./globalStyles";
// import AddCard from "./views/AddCard";
const AddCard = React.lazy(() => import("./views/AddCard"));
import Home from "./views/Home";
function App() {
  const [cards, setCards] = useState([]);
  const [route, setRoute] = useState("home");

  const handleCardAdded = (card) => {
    console.log("handle add card: ", card);
    saveToLocalStorage(card);
    setCards((oldArr) => [...oldArr, card]);
    setRoute("home");
  };

  const addCard = () => {
    setRoute("addcard");
  };
  const saveToLocalStorage = (card) => {
    localStorage.setItem("react-cards", JSON.stringify([...cards, card]));
  };

  // const persist = useMemo(() => {
  //   console.log("persist cardSet: ", cards);
  //   if (cards.length > 0)
  //     localStorage.setItem("react-cards", JSON.stringify(cards));
  // }, [cards]);

  useEffect(() => {
    let cards = localStorage.getItem("react-cards");
    if (cards) {
      setCards(JSON.parse(cards));
    } else {
      cards = cards = [
        {
          number: "2131532151321322",
          owner: "Khaled",
          cvc: "324",
          valid: "342",
          vendor: "Nordea",
        },
        {
          number: "4444444444444444",
          owner: "Khaled",
          cvc: "125",
          valid: "1225",
          vendor: "Swedbank",
        },
        {
          number: "1325123152152215",
          owner: "khaled",
          cvc: "1215",
          valid: "1223",
          vendor: "Handelsbanken",
        },
      ];
      setCards(cards);
    }
  }, []);
  return (
    <div>
      <GlobalStyle />
      <div style={{ textAlign: "center" }}>
        <button onClick={() => setRoute("home")}>Home</button>
        <button onClick={() => setRoute("addcard")}>Add Card</button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        {route === "home" ? (
          <Home cards={cards} addCard={addCard} />
        ) : (
          <AddCard handleCardAdded={handleCardAdded} />
        )}
      </Suspense>
    </div>
  );
}

export default App;
