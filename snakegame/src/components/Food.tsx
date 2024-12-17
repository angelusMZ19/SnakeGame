import React from 'react';
import { Position } from '../types/game';
import { CELL_SIZE, GRID_SIZE } from '../constants/gameConstants';

type FoodProps = {
  position: Position;
};

export default function Food({ position }: FoodProps) {
  return (
    <div
      className="absolute w-[20px] h-[20px] bg-red-500 rounded-full"
      style={{
        left: `${position.x * CELL_SIZE}px`,
        top: `${position.y * CELL_SIZE}px`,
      }}
    />
  );
}