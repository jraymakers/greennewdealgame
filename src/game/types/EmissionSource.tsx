import { Emission } from './Emission';

export type EmissionSource = Readonly<{
  name: string;
  emissions: readonly Emission[];
}>;
