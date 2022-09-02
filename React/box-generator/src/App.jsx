
import './lux.css';
import React, { useState } from 'react';

import MessageForm from './components/NewBoxForm';
import Color from './components/BoxDisplay';
import styles from './components/box.css'



function App() {
  const [newColor, setNewColor] = useState("");
  const [newSize, setNewSize] = useState(100);
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
    setNewSize(100)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className='card'>
            <div className="card-header">
              <h1>Create Box</h1>
            </div>
            <div className="card-body">
              <form onSubmit={(event) => { handleNewBox(event); }}>
                <div>
                  <label>Color: </label>
                  <input
                  className='form-control'
                    onChange={(event) => { setNewColor(event.target.value) }}
                    type="text"
                    value={newColor}
                  />
                </div>
                <div>
                  <label>Size in Pixels: </label>
                  <input
                  className='form-control'
                    onChange={(event) => { setNewSize(event.target.value) }}
                    type="number"
                    min="100"
                    value={newSize}
                  />
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                  <button className='btn btn-primary mt-4'>Add</button>
                </div>
              </form>
            </div>

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

        </div>
      </div>
    </div>


  );
}

export default App;
