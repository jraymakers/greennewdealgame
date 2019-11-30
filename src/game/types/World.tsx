import { ActivePolicy } from './ActivePolicy';
import { AvailablePolicy } from './AvailablePolicy';
import { EmissionSource } from './EmissionSource';

export type World = Readonly<{
 activePolicies: readonly ActivePolicy[];
 availablePolicies: readonly AvailablePolicy[];
 emissionSources: readonly EmissionSource[];
 funds: number;
 turn: number;
}>;
