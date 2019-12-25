import * as React from 'react';
import { cssClass } from '../../style';
import { emissionSourceEmissions, emissionSourcesEmissions } from '../functions/EmissionFunctions';
import { Game } from '../types/Game';
import { GameAction } from '../types/GameAction';

const classPrefix = 'GameView';

const sectionClass = cssClass(classPrefix, 'section', {
  padding: '6px',
});

export const GameView: React.FC<Readonly<{
  game: Game;
  nextTurn: (actions: readonly GameAction[]) => void;
  endGame: () => void;
}>> = ({ game, nextTurn, endGame }) => {
  return (
    <div>
      <GameTurnView game={game} nextTurn={nextTurn} />
      <TotalEmissionsView game={game} />
      <EmissionsSourcesView game={game} />
      <FundsView game={game} />
      <ActivePoliciesView game={game} />
      <AvailablePoliciesView game={game} />
      <button onClick={endGame}>End Game</button>
    </div>
  );
};

export const GameTurnView: React.FC<Readonly<{
  game: Game;
  nextTurn: (actions: readonly GameAction[]) => void;
}>> = ({ game, nextTurn }) => {
  const nextTurnButtonClicked = React.useCallback(() => {
    nextTurn([]);
  }, [nextTurn]);
  return (
    <div className={sectionClass}>
      <span>Turn: </span>
      <span>{game.world.turn}</span>
      <button onClick={nextTurnButtonClicked}>Next Turn</button>
    </div>
  );
};

export const TotalEmissionsView: React.FC<Readonly<{
  game: Game;
}>> = ({ game }) => {
  return (
    <div className={sectionClass}>
      <span>Total Emissions: </span>
      <span>
        {emissionSourcesEmissions(game.world.emissionSources).toFixed(0)}
      </span>
    </div>
  );
};

export const EmissionsSourcesView: React.FC<Readonly<{
  game: Game;
}>> = ({ game }) => {
  return (
    <div className={sectionClass}>
      <div>Emissions Sources:</div>
      <div>
        {game.world.emissionSources.map((source) => (
          <div key={source.name}>{`${source.name}: ${emissionSourceEmissions(source).toFixed(0)}`}</div>
        ))}
      </div>
    </div>
  );
};

export const FundsView: React.FC<Readonly<{
  game: Game;
}>> = ({ game }) => {
  return (
    <div className={sectionClass}>
      <span>Funds: </span>
      <span>{game.world.funds}</span>
    </div>
  );
};

export const ActivePoliciesView: React.FC<Readonly<{
  game: Game;
}>> = ({ game }) => {
  const activePolicies = game.world.activePolicies;
  return (
    <div className={sectionClass}>
      <div>Active Policies:</div>
      {activePolicies.length > 0
        ? <div>
            {activePolicies.map((policy) => (
              <div key={policy.name}>{`${policy.name}`}</div>
            ))}
          </div>
        : 'none'}
    </div>
  );
};

export const AvailablePoliciesView: React.FC<Readonly<{
  game: Game;
}>> = ({ game }) => {
  const availablePolicies = game.world.availablePolicies;
  return (
    <div className={sectionClass}>
      <div>Available Policies:</div>
      {availablePolicies.length > 0
        ? <div>
            {availablePolicies.map((policy) => (
              <div key={policy.name}>
                <span>{`${policy.name}`}</span>
                <button>Activate</button>
              </div>
            ))}
          </div>
        : 'none'}
    </div>
  );
};
