import { useState } from "react";
import "./App.css";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])/g, ' $1')
}

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  const [disabled, setDisabled] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setButtonColor(newButtonColor);
        }}
        style={{ backgroundColor: `${ disabled ? 'gray' : buttonColor}`}}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input id="disable-button-checkbox" type="checkbox" onClick={(e) => setDisabled(e.target.checked)} />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
