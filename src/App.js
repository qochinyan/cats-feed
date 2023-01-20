import { useState } from "react";
import "./App.scss";
import Card from "./components/card/Card";

function App() {
  const [corms, setCorms] = useState([
    {
      id: 1,
      status: "default",
      weight: "0,5",
      description: "Печень утки разварная с артишоками.",
      with: "с фуа-гра",
      quantity:10,
      gift: 1
    },
    {
      id: 2,
      status: "selected",
      weight: "2",
      description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
      with: "с рыбой",
      quantity: 40,
      gift: 2,
    },
    {
      id: 3,
      status: "disable",
      weight: "5",
      description: "Филе из цыплят с трюфелями в бульоне.",
      with: "с курой",
      quantity: 100,
      gift: 5,
    },
  ]);
  return (
    <div className="App">
      <div className="container">
        <h2 className="main-heading">Ты сегодня покормил кота?</h2>
        <main className="content-first">
          {corms.map((el, i) => {
            return <Card setCorms={setCorms} corms={corms} data={el} />;
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
