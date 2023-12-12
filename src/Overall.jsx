import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
      
          <div>
      <nav className="navbar"></nav>
      <div className="box1">
        <div>
          <h1>
            <img src="" alt="" className="image" />
          </h1>
        </div>
        <div className="h2">
          <div className="a1">
            <h1 className="t1">lorem ipsum</h1>
            <p className="">Expiry Date: DD-MM-YYY</p>
            <p>
              wejfkouewijoewubfuijefoiefuuewfhbbfewiubifeejbkwb
              ewkhfefbkefefkbejbefjnjbkefewf.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
