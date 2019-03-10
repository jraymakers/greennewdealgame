import { World } from './World';

export type WorldHistory = {
  readonly [turn: number]: World;
};
