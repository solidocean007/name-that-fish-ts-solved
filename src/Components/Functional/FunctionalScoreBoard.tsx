import "./styles/score-board.css";
import { TCount, TFish } from "../../types";

export function FunctionalScoreBoard({
  fish,
  score,
}: {
  fish: TFish[];
  score: TCount;
}) {
  const { incorrectCount, correctCount } = score;
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {fish.map((fish) => (
          <div key={fish.name} className="choice">
            {fish.name}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
