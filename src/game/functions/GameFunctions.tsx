import { Game } from '../types/Game';

export function createNewGame(): Game {
  return {
    worldState: {
      activePolicies: [],
      availablePolicies: [
        { name: 'Cap and Trade' },
        { name: 'Carbon Tax' },
      ],
      emissionSources: [
        {
          name: 'Electric Power Sector Fossil Fuel Combustion',
          emissions: [ { ghgType: 'CO2', mmtCO2Eq: 1809.3 } ],
        },
        {
          name: 'Transportation Fossil Fuel Combustion',
          emissions: [ { ghgType: 'CO2', mmtCO2Eq: 1782.6 } ],
        },
        {
          name: 'Industrial Fossil Fuel Combustion',
          emissions: [ { ghgType: 'CO2', mmtCO2Eq: 809.1 } ],
        },
        {
          name: 'Residential Fossil Fuel Combustion',
          emissions: [ { ghgType: 'CO2', mmtCO2Eq: 292.5 } ],
        },
        {
          name: 'Commercial Fossil Fuel Combustion',
          emissions: [ { ghgType: 'CO2', mmtCO2Eq: 231.3 } ],
        },
        {
          name: 'U.S. Territories Fossil Fuel Combustion',
          emissions: [ { ghgType: 'CO2', mmtCO2Eq: 41.4 } ],
        },
      ],
      funds: 1000,
      turn: 1,
    },
    worldHistory: {},
  };
}
