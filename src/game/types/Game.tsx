import { World } from './World';
import { WorldHistory } from './WorldHistory';

export type Game = Readonly<{
  world: World;
  history: WorldHistory;
}>;
