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

export const App: React.FC = () => {
  const [game, setGame] = React.useState<Game | null>(null);

  const newGame = React.useCallback(() => {
    setGame(createNewGame());
  }, [setGame]);

  const nextTurn = React.useCallback((actions: readonly GameAction[]) => {
    if (game) {
      setGame(doGameTurn(game, actions));
    } else {
      console.warn(`nextTurn called but game is null`);
    }
  }, [game, setGame]);

  const endGame = React.useCallback(() => {
    setGame(null);
  }, [setGame]);

  return (
    <div>
      <div className={titleClass}>Green New Deal Game</div>
      {game
        ? <GameView game={game} nextTurn={nextTurn} endGame={endGame} />
        : <button onClick={newGame}>New Game</button>
      }
    </div>
  );
};
