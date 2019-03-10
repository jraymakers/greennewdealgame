import { WorldState } from './WorldState';

export type WorldHistory = {
  readonly [turn: number]: WorldState;
};
