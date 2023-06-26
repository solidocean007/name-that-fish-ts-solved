export type TFish = {
  name: string;
  url: string;
};

export type TCount = {
  correctCount: number;
  incorrectCount: number;
};

export type FishProps = {
  initialFishes: TFish[];
};
