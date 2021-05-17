import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <main className="container mt-5">
      <section className="row-cols-1">
        <div className="col mb-2">
          <h1>Current count: {count}</h1>
        </div>
        <div className="col mb-2">
          <hr />
        </div>
        <div className="col mb-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={incrementCount}
          >
            Increment
          </button>
          <button
            type="button"
            className="btn btn-primary mr-3 ml-3"
            onClick={decrementCount}
          >
            Decrement
          </button>
          <button type="button" className="btn btn-ghost" onClick={resetCount}>
            Reset
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
