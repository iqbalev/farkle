import { useState } from "react";
import DieIcon from "./components/icons";
import "./styles/index.css";

type Die = {
  value: number;
  kept: boolean;
  selected: boolean;
};
type Dice = Die[];
type GoalScore = number;
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

function getRandomDieNumber() {
  return Math.floor(Math.random() * 6) + 1;
}
function getStarterDice() {
  return Array.from({ length: 6 }, () => ({
    value: getRandomDieNumber(),
    kept: false,
    selected: false,
  }));
}
function calculateScore(dice: Die[]) {
  function countSelectedDiceByValue(dice: Die[], val: number) {
    return dice.filter((die) => die.selected && die.value === val).length;
  }

  const numSelectedOnes = countSelectedDiceByValue(dice, 1);
  const numSelectedTwos = countSelectedDiceByValue(dice, 2);
  const numSelectedThrees = countSelectedDiceByValue(dice, 3);
  const numSelectedFours = countSelectedDiceByValue(dice, 4);
  const numSelectedFives = countSelectedDiceByValue(dice, 5);
  const numSelectedSixes = countSelectedDiceByValue(dice, 6);

  let score: number = 0;
  if (numSelectedOnes === 1) {
    score += 100;
  } else if (numSelectedOnes === 2) {
    score += 200;
  } else if (numSelectedOnes === 3) {
    score += 1000;
  } else if (numSelectedOnes === 4) {
    score += 1000 * 2;
  } else if (numSelectedOnes === 5) {
    score += 2000 * 2;
  } else if (numSelectedOnes === 6) {
    score += 4000 * 2;
  }
  if (numSelectedTwos === 3) {
    score += 200;
  } else if (numSelectedTwos === 4) {
    score += 200 * 2;
  } else if (numSelectedTwos === 5) {
    score += 400 * 2;
  } else if (numSelectedTwos === 6) {
    score += 800 * 2;
  }
  if (numSelectedThrees === 3) {
    score += 300;
  } else if (numSelectedThrees === 4) {
    score += 300 * 2;
  } else if (numSelectedThrees === 5) {
    score += 600 * 2;
  } else if (numSelectedThrees === 6) {
    score += 1200 * 2;
  }
  if (numSelectedFours === 3) {
    score += 400;
  } else if (numSelectedFours === 4) {
    score += 400 * 2;
  } else if (numSelectedFours === 5) {
    score += 800 * 2;
  } else if (numSelectedFours === 6) {
    score += 1600 * 2;
  }
  if (numSelectedFives === 1) {
    score += 50;
  } else if (numSelectedFives === 2) {
    score += 100;
  } else if (numSelectedFives === 3) {
    score += 500;
  } else if (numSelectedFives === 4) {
    score += 500 * 2;
  } else if (numSelectedFives === 5) {
    score += 1000 * 2;
  } else if (numSelectedFives === 6) {
    score += 2000 * 2;
  }
  if (numSelectedSixes === 3) {
    score += 600;
  } else if (numSelectedSixes === 4) {
    score += 600 * 2;
  } else if (numSelectedSixes === 5) {
    score += 1200 * 2;
  } else if (numSelectedSixes === 6) {
    score += 2400 * 2;
  }
  return score;
}

function App() {
  const [dice, setDice] = useState<Dice>(getStarterDice);
  const [goalScore, setGoalScore] = useState<GoalScore>(1500);
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

  function handleDieClick(dieIdx: number) {
    setDice((prevDice) => {
      const newDice = prevDice.map((die, i) =>
        dieIdx === i ? { ...die, selected: !die.selected } : die
      );

      const score = calculateScore(newDice);
      setSelectedScore((prevSelectedScore) => {
        return {
          ...prevSelectedScore,
          player: score,
        };
      });

      return newDice;
    });
  }
  function rollDice() {
    setDice((prevDice) =>
      prevDice.map((die) =>
        !die.selected ? { ...die, value: getRandomDieNumber() } : die
      )
    );
  }
  function scoreAndContinue() {
    setRoundScore((prevRoundScore) => ({
      ...prevRoundScore,
      player: prevRoundScore.player + selectedScore.player,
    }));

    setDice((prevDice) => {
      const isAllDieScored = prevDice.every((die) => die.kept || die.selected);
      if (isAllDieScored) return getStarterDice();
      return prevDice.map((die) => {
        if (die.selected) {
          return { ...die, kept: true, selected: false };
        } else if (!die.kept && !die.selected) {
          return { ...die, value: getRandomDieNumber() };
        } else {
          return die;
        }
      });
    });

    setSelectedScore((prevSelectedScore) => ({
      ...prevSelectedScore,
      player: 0,
    }));
  }
  function scoreAndPass() {
    const totalScore = roundScore.player + selectedScore.player;
    setTotalScore((prevTotalScore) => ({
      ...prevTotalScore,
      player: prevTotalScore.player + totalScore,
    }));

    setRoundScore((prevRoundScore) => ({
      ...prevRoundScore,
      player: 0,
    }));

    setSelectedScore((prevSelectedScore) => ({
      ...prevSelectedScore,
      player: 0,
    }));

    setDice(getStarterDice());
  }

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
            <p>{goalScore}</p>
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
          <ul className="main-deck">
            {dice.map((die, idx) => (
              <li
                key={idx}
                onClick={() => handleDieClick(idx)}
                className={`die ${die.selected ? "selected" : ""} ${
                  die.kept ? "kept" : ""
                }`}
              >
                <DieIcon value={die.value} />
              </li>
            ))}
          </ul>
        </section>

        <section className="actions">
          <button type="button" onClick={scoreAndContinue}>
            Score and continue
          </button>
          <button type="button" onClick={scoreAndPass}>
            Score and pass
          </button>
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
