import ListGroup from "./Components/ListGroup";
import React from "react";

function App() {
  let items = ["New York", "San fran", "London", "Paris"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
