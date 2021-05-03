import React from "react";

import Main from "./components/Main";

function App() {
  const count = 1;

  return (
    <Main>
      <section className="row">
        <div className="col col-12">
          <h1>The current count is: {count}</h1>
        </div>
      </section>
    </Main>
  );
}

export default App;
