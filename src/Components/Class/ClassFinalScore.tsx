import { Component } from "react";
import { TCount } from "../../types";

type ClassFinalScoreProps = {
  score: TCount;
};

export class ClassFinalScore extends Component<ClassFinalScoreProps> {
  render() {
    const { correctCount, incorrectCount } = this.props.score;
    const totalCount = correctCount + incorrectCount;
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correctCount}</p>
          <hr />
          <p>{totalCount}</p>
        </div>
      </div>
    );
  }
}
