import React from "react";
import List from "./components/List";

export const Title = () => <h1>Testing con JEST y ENZYME</h1>;

function App() {
  return (
    <section id="main">
      <Title />
      <div className="container">
        <span num={3} active={false}>
          Primero
        </span>
        <span num="3" active="false">
          Segundo
        </span>
      </div>
      <input type="text" />
      <p>Fuera</p>
      <div>
        <p>Dentro1</p>
        {/* <p>Dentro2</p> */}
      </div>
      <p>Hermano</p>
    </section>
  );
}

export default App;
