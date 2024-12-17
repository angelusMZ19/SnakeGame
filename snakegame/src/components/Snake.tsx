import React from 'react';
import { Position } from '../types/game';
import { CELL_SIZE } from '../constants/gameConstants';

type SnakeProps = {
  segments: Position[];
};

export default function Snake({ segments }: SnakeProps) {
  return (
    <>
      {segments.map((segment, index) => (
        <div
          key={index}
          className="absolute w-[20px] h-[20px] bg-green-500"
          style={{
            left: `${segment.x * CELL_SIZE}px`,
            top: `${segment.y * CELL_SIZE}px`,
          }}
        />
      ))}
    </>
  );
}