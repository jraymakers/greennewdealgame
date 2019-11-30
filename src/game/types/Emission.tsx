import { GHGType } from './GHGType';

export type Emission = Readonly<{
  ghgType: GHGType;
  mmtCO2Eq: number;
}>;
