import React from "react";
import StarWarsCharacterList from "./StarWarsCharacterList";
import Header from "./Header";
import "./App.css";

function App() {
  return (
    <div className="star-wars">
      <Header />
      <StarWarsCharacterList />
    </div>
  );
}

export default App;
