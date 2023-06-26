import { Component } from "react";
import "./styles/score-board.css";
import { TCount, TFish } from "../../types";

type ClassScoreBoardProps = {
  score: TCount;
  fish: TFish[];
};

export class ClassScoreBoard extends Component<ClassScoreBoardProps> {
  render() {
    const { incorrectCount, correctCount } = this.props.score;
    const fish = this.props.fish;
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
}
