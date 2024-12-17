import React from 'react';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

type GameControlsProps = {
  onRestart: () => void;
  gameOver: boolean;
  gameStarted: boolean;
};

export default function GameControls({ onRestart, gameOver, gameStarted }: GameControlsProps) {
  return (
    <>
      {!gameStarted && (
        <div className="mt-4 text-center">
          <p className="mb-2">Press any arrow key to start</p>
          <div className="flex gap-2 justify-center mt-2">
            <ArrowUp className="w-6 h-6" />
            <ArrowDown className="w-6 h-6" />
            <ArrowLeft className="w-6 h-6" />
            <ArrowRight className="w-6 h-6" />
          </div>
        </div>
      )}

      {gameOver && (
        <div className="mt-4 text-center">
          <p className="text-xl text-red-500 mb-2">Game Over!</p>
          <button
            onClick={onRestart}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded"
          >
            Play Again
          </button>
        </div>
      )}
    </>
  );
}