import { WorldHistory } from './WorldHistory';
import { WorldState } from './WorldState';

export type Game = {
  readonly worldState: WorldState;
  readonly worldHistory: WorldHistory;
};
