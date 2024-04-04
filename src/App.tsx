import Alert from "./Components/Alert";
import Button from "./Components/Button";
import React from "react";

function App() {
  const handleEvent = (num: number) => {
    console.log(`CLICKED YO! ${num}`)
  }

  return (
    <div>
      <Alert>
        Hello from the <strong>alert!</strong>
      </Alert>
      <Button children="Click Me!" onClick={handleEvent} color="secondary"/>
    </div>
  );
}

export default App;
