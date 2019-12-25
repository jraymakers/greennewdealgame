import { EmissionSource } from '../types/EmissionSource';

function sum(a: number, b: number): number {
  return a + b;
}

export function emissionSourceEmissions(emissionSource: EmissionSource): number {
  return emissionSource.emissions.map(
    (emission) => emission.mmtCO2Eq,
  ).reduce(sum);
}

export function emissionSourcesEmissions(emissionSources: readonly EmissionSource[]): number {
  return emissionSources.map(
    emissionSourceEmissions,
  ).reduce(sum);
}
