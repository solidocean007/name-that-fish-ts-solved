import "./styles/score-board.css";
//  Where the score is presented

const answersLeft = ["trout", "salmon", "tuna", "shark"];

export function FunctionalScoreBoard({ count }) {
  const{ correctCount, wrongCount } = count
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {wrongCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
