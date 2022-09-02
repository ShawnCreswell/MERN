
import './lux.css';
import React, { useState } from 'react';

import MessageForm from './components/NewBoxForm';
import Color from './components/BoxDisplay';
import styles from './components/box.css'



function App() {
  const [newColor, setNewColor] = useState("");
  const [newSize, setNewSize] = useState(1);
  const [boxes, setBoxes] = useState([]);

  const handleNewBox = (event) => {
    event.preventDefault();

    if (newColor.length === 0) {
      return;
    }

    const boxItem = {
      color: newColor,
      size: newSize
    }

    setBoxes([...boxes, boxItem])
    setNewColor("")
    setNewSize(1)
  }

  return (
    <div>
      <form onSubmit={(event) => { handleNewBox(event); }}>

        <div>
          <label>Color: </label>
          <input
            onChange={(event) => { setNewColor(event.target.value) }}
            type="text"
            value={newColor}
          />
        </div>
        <div>
          <label>Size in Pixels: </label>
          <input
            onChange={(event) => { setNewSize(event.target.value) }}
            type="number"
            min="1"
            value={newSize}
          />
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>

      <div className={styles.container}>
        {
          boxes.map((box, index) => {

            return (
              <Color
                key={index}
                box={box}
              />
            )
          }
          )
        }
      </div>
    </div>
  );
}

export default App;
