import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { TFish } from "../../types";

type ClassAppProps = {
  initialFishes: TFish[];
}

type ClassAppState = {
  score: {
    incorrectCount: number,
    correctCount: number,
  },
  fish: TFish[],
}

export class ClassApp extends Component<ClassAppProps, ClassAppState> {
  state = {
    score: {
      incorrectCount: 0,
      correctCount: 0,
    },
    fish: this.props.initialFishes,
  };

  removeFish = (usedName: string) => {
    this.setState((prevState) => ({
      fish: prevState.fish.filter((fish) => fish.name !== usedName),
    }));
  };

  handleScore = (userGuess: string, fishName: string) => {
    const isCorrect =
      fishName.toLocaleLowerCase() === userGuess.toLocaleLowerCase();
    if (isCorrect) {
      this.setState((prevState) => ({
        score: {
          ...prevState.score,
          correctCount: prevState.score.correctCount + 1,
        },
      }));
    } else {
      this.setState((prevState) => ({
        score: {
          ...prevState.score,
          incorrectCount: prevState.score.incorrectCount + 1,
        },
      }));
    }
    this.removeFish(fishName);
  };

  render() {
    const { score, fish } = this.state;
    const gameEnd = fish.length === 0;
    return (
      <>
        <>
          {!gameEnd && <ClassScoreBoard score={score} fish={fish} />}
          {!gameEnd && (
            <ClassGameBoard fish={fish} handleScore={this.handleScore} />
          )}
        </>
        {gameEnd && <ClassFinalScore score={score} />}
      </>
    );
  }
}