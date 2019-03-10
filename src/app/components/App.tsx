import * as React from 'react';
import { GameView } from '../../game/components/GameView';
import { createNewGame, doGameTurn } from '../../game/functions/GameFunctions';
import { Game } from '../../game/types/Game';
import { GameAction } from '../../game/types/GameAction';
import { cssClass } from '../../style';

const classPrefix = 'App';

const titleClass = cssClass(classPrefix, 'title', {
  fontSize: '24px',
  padding: '6px',
});

export type AppState = {
  readonly game: Game | null;
};

export class App extends React.Component<{}, AppState> {

  public constructor(props: {}) {
    super(props);
    this.state = {
      game: null,
    };
  }

  public render(): JSX.Element {
    return (
      <div>
        <div className={titleClass}>Green New Deal Game</div>
        {this.renderGameOrNewGame()}
      </div>
    );
  }

  private renderGameOrNewGame(): React.ReactNode {
    if (this.state.game) {
      return (
        <GameView game={this.state.game} nextTurn={this.nextTurn} endGame={this.endGame} />
      );
    } else {
      return (
        <button onClick={this.onNewGameButtonClick}>New Game</button>
      );
    }
  }

  private readonly onNewGameButtonClick = () => {
    this.setState({
      game: createNewGame(),
    });
  }

  private readonly nextTurn = (actions: ReadonlyArray<GameAction>) => {
    if (this.state.game) {
      this.setState({
        game: doGameTurn(this.state.game, actions),
      });
    } else {
      console.warn(`nextTurn called but this.state.game is null`);
    }
  }

  private readonly endGame = () => {
    this.setState({
      game: null,
    });
  }

}
