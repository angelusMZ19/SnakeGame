import React from 'react';
import { Position } from '../types/game';
import { BOARD_SIZE, GRID_SIZE } from '../constants/gameConstants';
import Food from './Food';
import Snake from './Snake';

type GameBoardProps = {
  snake: Position[];
  food: Position;
};

export default function GameBoard({ snake, food }: GameBoardProps) {
  return (
    <div className="relative w-[400px] h-[400px] bg-gray-800 border-2 border-gray-700">
      <Food position={food} />
      <Snake segments={snake} />
    </div>
  );
}