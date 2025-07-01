import { useState } from "react";
import DieIcon from "./components/icons";
import "./styles/index.css";

type Die = {
  value: number;
  kept: boolean;
  selected: boolean;
};
type Dice = Die[];
type TargetScore = number;
type TotalScore = {
  player: number;
  opponent: number;
};
type RoundScore = {
  player: number;
  opponent: number;
};
type SelectedScore = {
  player: number;
  opponent: number;
};

function App() {
  function initializeDice() {
    return [
      {
        value: Math.floor(Math.random() * 6) + 1,
        kept: false,
        selected: false,
      },
      {
        value: Math.floor(Math.random() * 6) + 1,
        kept: false,
        selected: false,
      },
      {
        value: Math.floor(Math.random() * 6) + 1,
        kept: false,
        selected: false,
      },
      {
        value: Math.floor(Math.random() * 6) + 1,
        kept: false,
        selected: false,
      },
      {
        value: Math.floor(Math.random() * 6) + 1,
        kept: false,
        selected: false,
      },
      {
        value: Math.floor(Math.random() * 6) + 1,
        kept: false,
        selected: false,
      },
    ];
  }

  const [dice, setDice] = useState<Dice>(initializeDice);
  const [targetScore, setTargetScore] = useState<TargetScore>(1500);
  const [totalScore, setTotalScore] = useState<TotalScore>({
    player: 0,
    opponent: 0,
  });
  const [roundScore, setRoundScore] = useState<RoundScore>({
    player: 0,
    opponent: 0,
  });
  const [selectedScore, setSelectedScore] = useState<SelectedScore>({
    player: 0,
    opponent: 0,
  });

  function selectDie(dieIndex: number) {
    setDice((prevDice) =>
      prevDice?.map((die, i) =>
        dieIndex === i
          ? { ...die, kept: !die.kept, selected: !die.selected }
          : die
      )
    );
  }

  function rollDice() {
    setDice((prevDice) =>
      prevDice.map((die) =>
        !die.selected
          ? { ...die, value: Math.floor(Math.random() * 6) + 1 }
          : die
      )
    );
  }

  /* TODO
  function keepAndRoll() {}
  function keepAndPass() {}
  function passRound() {}
  */

  return (
    <div className="wrapper">
      <header>
        <h1>Farkle</h1>
      </header>

      <main className="content">
        <section className="scoreboard">
          <section className="player">
            <h2>Player</h2>
            <p>{totalScore.player}</p>
            <p>{roundScore.player}</p>
            <p>{selectedScore.player}</p>
          </section>

          <section className="score">
            <h2>Goal</h2>
            <p>{targetScore}</p>
            <p>Round</p>
            <p>Selected</p>
          </section>

          <section className="opponent">
            <h2>Opponent</h2>
            <p>{totalScore.opponent}</p>
            <p>{roundScore.opponent}</p>
            <p>{selectedScore.opponent}</p>
          </section>
        </section>

        <section className="table">
          <ul className="dice">
            {dice.map((die, index) => (
              <li
                key={index}
                onClick={() => selectDie(index)}
                className={`die ${die.selected ? "selected" : ""}`}
              >
                <DieIcon value={die.value} />
              </li>
            ))}
          </ul>
        </section>

        <section className="actions">
          <button type="button">Keep & roll</button>
          <button type="button">Keep & pass</button>
          <button type="button">Pass</button>
          <button type="button" onClick={rollDice}>
            Roll (test)
          </button>
        </section>
      </main>

      <footer>
        <span>2025</span>
        <span>•</span>
        <span>
          By{" "}
          <a
            href="https://github.com/iqbalev/farkle"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            Iqbalev
          </a>
        </span>
        <span>•</span>
        <span>Still WIP</span>
      </footer>
    </div>
  );
}

export default App;
