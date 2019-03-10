import { WorldState } from './WorldState';

export type WorldHistory = {
  readonly [moment: string]: WorldState;
};
