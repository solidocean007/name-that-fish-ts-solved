import "./styles/game-board.css";
import { useState } from "react";
import { Fish } from "../../App";

interface FunctionalGameBoardProps {
  initialFishes: Fish[];
  updateCount: (isCorrect: boolean) => void;
}

export function FunctionalGameBoard({ initialFishes, updateCount }: FunctionalGameBoardProps) {
  const [userGuessInput, setUserGuessInput] = useState("");
  const [fishIndex, setFishIndex] = useState(0);
  const nextFishToName = initialFishes[fishIndex];

  function handleAnswer(index: number, userInput: string) {
    if (index < 3) {
      const isCorrect = nextFishToName.name === userInput; 
      updateCount(isCorrect);
      if(isCorrect){
        setFishIndex(index + 1);
      }
    } else {
      // handle end of game scenario
    }
  }

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          // handle the user input: if its correct do this if not do that.
          handleAnswer(fishIndex, userGuessInput);
          setUserGuessInput("");
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={userGuessInput}
          onChange={(e) => {
            setUserGuessInput(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
