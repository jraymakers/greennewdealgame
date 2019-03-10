import * as React from 'react';
import { cssClass } from '../../style';
import { emissionSourceEmissions, emissionSourcesEmissions } from '../functions/EmissionFunctions';
import { Game } from '../types/Game';
import { GameAction } from '../types/GameAction';

const classPrefix = 'GameView';

const sectionClass = cssClass(classPrefix, 'section', {
  padding: '6px',
});

export type GameViewProps = {
  readonly game: Game;
  readonly nextTurn: (actions: ReadonlyArray<GameAction>) => void;
  readonly endGame: () => void;
};

export class GameView extends React.Component<GameViewProps> {

  public render(): JSX.Element {
    return (
      <div>
        {this.renderTurn()}
        {this.renderTotalEmissions()}
        {this.renderEmissionsSources()}
        {this.renderFunds()}
        {this.renderActivePolicies()}
        {this.renderAvailablePolicies()}
        <button onClick={this.props.endGame}>End Game</button>
      </div>
    );
  }

  private renderTurn(): React.ReactNode {
    return (
      <div className={sectionClass}>
        <span>Turn: </span>
        <span>{this.props.game.worldState.turn}</span>
        <button onClick={this.onNextTurnClick}>Next Turn</button>
      </div>
    );
  }

  private renderTotalEmissions(): React.ReactNode {
    return (
      <div className={sectionClass}>
        <span>Total Emissions: </span>
        <span>
          {emissionSourcesEmissions(this.props.game.worldState.emissionSources).toFixed(0)}
        </span>
      </div>
    );
  }

  private renderEmissionsSources(): React.ReactNode {
    return (
      <div className={sectionClass}>
        <div>Emissions Sources:</div>
        <div>
          {this.props.game.worldState.emissionSources.map((source) => (
            <div key={source.name}>{`${source.name}: ${emissionSourceEmissions(source).toFixed(0)}`}</div>
          ))}
        </div>
      </div>
    );
  }

  private renderFunds(): React.ReactNode {
    return (
      <div className={sectionClass}>
        <span>Funds: </span>
        <span>{this.props.game.worldState.funds}</span>
      </div>
    );
  }

  private renderActivePolicies(): React.ReactNode {
    const activePolicies = this.props.game.worldState.activePolicies;
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
  }

  private renderAvailablePolicies(): React.ReactNode {
    const availablePolicies = this.props.game.worldState.availablePolicies;
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
  }

  private readonly onNextTurnClick = () => {
    this.props.nextTurn([]);
  }

}
