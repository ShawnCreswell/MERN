import React from "react";
import "./lux.css";
import Counter from "./components/Counter";

// SecondCounter.js

export default () => (
  <Counter
    initialValue={10}
    render={({ count, increment, decrement }) => (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header bg-dark text-center">
                  <h1 className="text-success">Counter</h1>
                </div>
                <div className="card-body text-center">
                  <h2 className="text-primary">Current Count: {count}</h2>
                  <button className="btn btn-primary me-1" onClick={increment}>Increment</button>
                  <button className="btn btn-primary" onClick={decrement}>Decrement</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )}
  />
);
