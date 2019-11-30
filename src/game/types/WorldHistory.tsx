import { World } from './World';

export type WorldHistory = Readonly<{
 [turn: number]: World;
}>;
