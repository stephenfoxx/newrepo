import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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

      <div className="div2">
        <div>
          <h1>Questions</h1>
        </div>
        <div>
          <p className='t2'>1. lorem and fhjskh dhjejjfb dhnbfjd?</p>
        </div>
        <div className="check1">
          <input type="checkbox" />
          lorem
        </div>
        <div className="check2">
          <div>
            <input type="checkbox" />
          </div>
          <div> lorem</div>
        </div>
      </div>

      <div className="div2">
        <div>
         
        </div>
        <div>
          <p className='t2'>2. lorem and fhjskh dhjejjfb dhnbfjd?</p>
        </div>
        <div className="check1">
          <input type="radio" />
          lorem
        </div>
        <div className="check2">
          <div>
            <input type="radio" />
          </div>
          
          <div> lorem</div>
          
          
          
        </div>
        <div className='check1'>
          <input type="radio" />
          <div>lorem</div>
        </div>
        <div className='check3'>
          <p className='t2'>3. lorem abdghfsj dsbjhjdsj?</p>
          <div>
            <input type="textbox" className='box'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
