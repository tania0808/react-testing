import { useState } from "react";
import "./App.css";
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
        style={{ backgroundColor: buttonColor }}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input type="checkbox" onClick={(e) => setDisabled(e.target.checked)} />
    </div>
  );
}

export default App;
