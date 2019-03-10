import { GHGType } from './GHGType';

export type Emission = {
  readonly ghgType: GHGType;
  readonly mmtCO2Eq: number;
};
