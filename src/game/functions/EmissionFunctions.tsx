import { EmissionSource } from '../types/EmissionSource';

function sum(a: number, b: number) {
  return a + b;
}

export function emissionSourcesEmissions(emissionSources: ReadonlyArray<EmissionSource>): number {
  return emissionSources.map(
    emissionSourceEmissions,
  ).reduce(sum);
}

export function emissionSourceEmissions(emissionSource: EmissionSource): number {
  return emissionSource.emissions.map(
    (emission) => emission.mmtCO2Eq,
  ).reduce(sum);
}
