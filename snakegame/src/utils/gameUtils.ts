import { Position } from '../types/game';
import { GRID_SIZE } from '../constants/gameConstants';

export const generateRandomFood = (): Position => ({
  x: Math.floor(Math.random() * GRID_SIZE),
  y: Math.floor(Math.random() * GRID_SIZE),
});

export const checkCollision = (head: Position, snake: Position[], gridSize: number): boolean => {
  // Wall collision
  if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
    return true;
  }

  // Self collision
  return snake.some((segment) => segment.x === head.x && segment.y === head.y);
};