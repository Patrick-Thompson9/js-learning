import Alert from "./Components/Alert";
import Button from "./Components/Button";
import { useState } from 'react';

function App() {

  const [alertVisibility, setAlertVisibility] = useState(false);

  const handleAddAlert = () => {
    console.log('Button clicked!');
    setAlertVisibility(true);
  }

  return (
    <div>
      {alertVisibility && <Alert onClose={() => setAlertVisibility(false)}><strong>Alert!</strong> You clicked the button!</Alert>}
      <Button children="Click Me!" onClick={handleAddAlert} color="secondary"/>
    </div>
  );
}

export default App;
