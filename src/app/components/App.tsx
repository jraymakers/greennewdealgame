import * as React from 'react';
import { GameView } from '../../game/components/GameView';
import { createNewGame } from '../../game/functions/GameFunctions';
import { Game } from '../../game/types/Game';
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
        <GameView game={this.state.game} />
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

}
