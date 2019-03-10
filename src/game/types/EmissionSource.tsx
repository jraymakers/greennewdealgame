import { Emission } from './Emission';

export type EmissionSource = {
  readonly name: string;
  readonly emissions: ReadonlyArray<Emission>;
};
