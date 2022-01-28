import { useState, useEffect, useMemo } from "react";
import GlobalStyle from "./globalStyles";
import AddCard from "./views/AddCard";
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
    const cards = localStorage.getItem("react-cards");
    if (cards) {
      setCards(JSON.parse(cards));
    }
  }, []);
  return (
    <div>
      <GlobalStyle />
      <div style={{ textAlign: "center" }}>
        <button onClick={() => setRoute("home")}>Home</button>
        <button onClick={() => setRoute("addcard")}>Add Card</button>
      </div>
      {route === "addcard" ? (
        <AddCard handleCardAdded={handleCardAdded} />
      ) : (
        <Home cards={cards} addCard={addCard} />
      )}
    </div>
  );
}

export default App;
