import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { TFish, TCount } from "../../types";
import { useState } from "react";

export function FunctionalApp({ initialFishes }: { initialFishes: TFish[] }) {
  const [fish, setFish] = useState(initialFishes);
  const [score, setScore] = useState<TCount>({
    correctCount: 0,
    incorrectCount: 0,
  });

  // create function that removes the fish object.
  const removeFish = (usedName: string) => {
    const newFishList = fish.filter((fish) => fish.name !== usedName);
    setFish(newFishList);
  };

  const gameEnd = fish.length === 0;

  const handleScore = (userGuess: string, fishName: string) => {
    // This is called on the users input form on FunctionalGameBoard.
    const isCorrect =
      fishName.toLocaleLowerCase() === userGuess.toLocaleLowerCase();
    if (isCorrect) {
      setScore((prevScore) => ({
        ...prevScore,
        correctCount: prevScore.correctCount + 1,
      }));
    } else {
      setScore((prevScore) => ({
        ...prevScore,
        incorrectCount: prevScore.incorrectCount + 1,
      }));
    }
    removeFish(fishName);
  };

  return (
    <>
      {!gameEnd && <FunctionalScoreBoard fish={fish} score={score} />}
      {!gameEnd && (
        <FunctionalGameBoard fish={fish} handleScore={handleScore} />
      )}
      {gameEnd && <FunctionalFinalScore score={score} />}
    </>
  );
}
