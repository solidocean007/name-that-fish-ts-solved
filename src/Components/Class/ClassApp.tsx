import { Component } from "react";
import { Fish, FishProps } from "../../App";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

interface State {
  incorrectCount: number;
  correctCount: number;
}

export class ClassApp extends Component<{ initialFishes: Fish[] }> {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };

  render() {
    const { initialFishes } = this.props;
    return (
      <>
        <>
          <ClassScoreBoard />
          <ClassGameBoard initialFishes={initialFishes}/>
        </>
        {false && <ClassFinalScore />}
      </>
    );
  }
}
