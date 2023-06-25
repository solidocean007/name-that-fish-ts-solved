import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { Fish } from "../../App";
import { useState } from "react";

export interface TCount {
  correctCount: number;
  wrongCount: number;
}

export function FunctionalApp({ initialFishes }: { initialFishes: Fish[] }) {
  const [count, setCount] = useState<TCount>({
    correctCount: 0,
    wrongCount: 0,
  });

  const updateCount = (isCorrect: boolean) => {
    setCount((prevCount) => ({
      correctCount: prevCount.correctCount + (isCorrect ? 1 : 0),
      wrongCount: prevCount.wrongCount + (isCorrect ? 0 : 1),
    }));
    console.log(updateCount);  // log the updated state
        return updateCount;
  };

  return (
    <>
      <FunctionalScoreBoard count={count} />
      <FunctionalGameBoard
        initialFishes={initialFishes}
        updateCount={updateCount}
      />
      {false && <FunctionalFinalScore />}
    </>
  );
}
