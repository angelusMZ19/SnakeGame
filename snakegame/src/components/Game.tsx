import React from 'react';
import { Gamepad2 } from 'lucide-react';
import GameBoard from './GameBoard';
import GameControls from './GameControls';
import { useGameLogic } from '../hooks/useGameLogic';

export default function Game() {
  const { snake, food, gameOver, score, gameStarted, resetGame } = useGameLogic();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="mb-4 flex items-center gap-2">
        <Gamepad2 className="w-6 h-6" />
        <h1 className="text-3xl font-bold">Snake Game</h1>
      </div>
      
      <div className="mb-4 text-xl">Score: {score}</div>
      
      <GameBoard snake={snake} food={food} />
      
      <GameControls
        onRestart={resetGame}
        gameOver={gameOver}
        gameStarted={gameStarted}
      />
    </div>
  );
}