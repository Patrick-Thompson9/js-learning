import ListGroup from "./Components/ListGroup";
import React from "react";

function App() {
  let items = ["New York", "San fran", "London", "Paris"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
      <h1>TEST</h1>
    </div>
  );
}

export default App;
