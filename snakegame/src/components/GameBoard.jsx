import Food from './Food';
import Snake from './Snake';

export default function GameBoard({ snake, food }) {
  return (
    <div className="relative w-[400px] h-[400px] bg-gray-800 border-2 border-gray-700">
      <Food position={food} />
      <Snake segments={snake} />
    </div>
  );
}