import "./App.css";
import { useState } from "react";

function App() {
  let [player, setPlayer] = useState("X");
  let [didWin, setDidWin] = useState("");
  let [count, setCount] = useState(0);
  let [xScore, setXScore] = useState(0);
  let [oScore, setOScore] = useState(0);
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let changeIt = (e) => {
    if (!e.target.innerHTML && !didWin) {
      e.target.innerHTML = player;

      for (let con of winConditions) {
        let ticblock1 = document.getElementById(con[0].toString());
        let ticblock2 = document.getElementById(con[1].toString());
        let ticblock3 = document.getElementById(con[2].toString());
        if (
          ticblock1.innerHTML === player &&
          ticblock2.innerHTML === player &&
          ticblock3.innerHTML === player
        ) {
          ticblock1.style.backgroundColor = "#57cc99";
          ticblock2.style.backgroundColor = "#57cc99";
          ticblock3.style.backgroundColor = "#57cc99";
          setDidWin(player + " won!");
          if (player === "X") {
            setXScore((xScore += 1));
          } else {
            setOScore((oScore += 1));
          }
          break;
        } else {
          if (count === 8) {
            setDidWin("Draw!");
          }
        }
      }
      setCount((count += 1));
      setPlayer(player === "X" ? "O" : "X");
    }
  };
  let restart = () => {
    let blocks = document.querySelectorAll(".block");
    for (let block of blocks) {
      block.innerHTML = "";
      block.style.backgroundColor = "";
    }
    setDidWin("");
    setCount(0);
    setPlayer("X");
  };
  return (
    <div>
      <br />
      <h2>SCORES</h2>
      <h3>Player1 (X): {xScore}</h3>
      <h3>Player2 (O): {oScore}</h3>
      <br />
      <h1>{didWin}</h1>
      <div className="container">
        <div className="block tlblock" id="0" onClick={changeIt}></div>
        <div className="block" id="1" onClick={changeIt}></div>
        <div className="block trblock" id="2" onClick={changeIt}></div>
        <div className="block" id="3" onClick={changeIt}></div>
        <div className="block" id="4" onClick={changeIt}></div>
        <div className="block" id="5" onClick={changeIt}></div>
        <div className="block blblock" id="6" onClick={changeIt}></div>
        <div className="block" id="7" onClick={changeIt}></div>
        <div className="block brblock" id="8" onClick={changeIt}></div>
      </div>
      <button className="btn" onClick={restart}>
        Restart!
      </button>
    </div>
  );
}

export default App;
