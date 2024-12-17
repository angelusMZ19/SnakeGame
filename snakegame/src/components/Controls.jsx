import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

export default function Controls({ onRestart, gameOver, gameStarted }) {
  return (
    <div className="mt-4 text-center">
      {!gameStarted && (
        <>
          <p className="mb-2">Press any arrow key to start</p>
          <div className="flex gap-2 justify-center mt-2">
            <ArrowUp className="w-6 h-6" />
            <ArrowDown className="w-6 h-6" />
            <ArrowLeft className="w-6 h-6" />
            <ArrowRight className="w-6 h-6" />
          </div>
        </>
      )}
      
      {gameOver && (
        <>
          <p className="text-xl text-red-500 mb-2">Game Over!</p>
          <button
            onClick={onRestart}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded"
          >
            Play Again
          </button>
        </>
      )}
    </div>
  );
}