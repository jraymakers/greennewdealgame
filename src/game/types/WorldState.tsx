import { ActivePolicy } from './ActivePolicy';
import { AvailablePolicy } from './AvailablePolicy';
import { EmissionSource } from './EmissionSource';

export type WorldState = {
  readonly activePolicies: ReadonlyArray<ActivePolicy>;
  readonly availablePolicies: ReadonlyArray<AvailablePolicy>;
  readonly emissionSources: ReadonlyArray<EmissionSource>;
  readonly funds: number;
  readonly turn: number;
};
