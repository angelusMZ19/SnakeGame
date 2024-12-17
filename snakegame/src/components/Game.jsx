import { useState, useEffect, useCallback } from 'react';
import { Gamepad2 } from 'lucide-react';
import GameBoard from './GameBoard';
import Controls from './Controls';
import { generateRandomFood, checkCollision } from '../utils';
import {
  INITIAL_SNAKE,
  INITIAL_FOOD,
  INITIAL_DIRECTION,
  GAME_SPEED,
} from '../constants';

export default function Game() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const moveSnake = useCallback(() => {
    if (!gameStarted || gameOver) return;

    setSnake((prevSnake) => {
      const head = {
        x: prevSnake[0].x + direction.x,
        y: prevSnake[0].y + direction.y,
      };

      if (checkCollision(head, prevSnake)) {
        setGameOver(true);
        return prevSnake;
      }

      const newSnake = [head, ...prevSnake];

      if (head.x === food.x && head.y === food.y) {
        setScore((prev) => prev + 1);
        setFood(generateRandomFood());
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameOver, gameStarted]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setGameOver(false);
    setScore(0);
    setFood(generateRandomFood());
    setGameStarted(false);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!gameStarted) {
        setGameStarted(true);
      }

      switch (e.key) {
        case 'ArrowUp':
          if (direction.y !== 1) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (direction.y !== -1) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (direction.x !== 1) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (direction.x !== -1) setDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, gameStarted]);

  useEffect(() => {
    const gameLoop = setInterval(moveSnake, GAME_SPEED);
    return () => clearInterval(gameLoop);
  }, [moveSnake]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="mb-4 flex items-center gap-2">
        <Gamepad2 className="w-6 h-6" />
        <h1 className="text-3xl font-bold">Snake Game</h1>
      </div>
      
      <div className="mb-4 text-xl">Score: {score}</div>
      
      <GameBoard snake={snake} food={food} />
      
      <Controls
        onRestart={resetGame}
        gameOver={gameOver}
        gameStarted={gameStarted}
      />
    </div>
  );
}