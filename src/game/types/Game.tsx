import { World } from './World';
import { WorldHistory } from './WorldHistory';

export type Game = {
  readonly world: World;
  readonly history: WorldHistory;
};
