import React from "react";
import data from "./data";
import List from "./List";

function App() {
  return (
    <main>
      <section className="container">
        <h3>0 Birthdays Today</h3>
        <List />
        <button type="button" onClick={() => console.log("I was clicked")}>
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
