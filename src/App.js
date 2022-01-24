import { useState } from "react";
import AddCard from "./views/AddCard";
function App() {
  const [cards, setCards] = useState([]);
  return (
    <div>
      <AddCard setCards={setCards} />
    </div>
  );
}

export default App;
