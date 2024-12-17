export default function Food({ position }) {
  return (
    <div
      className="absolute w-[20px] h-[20px] bg-red-500 rounded-full"
      style={{
        left: `${position.x * 20}px`,
        top: `${position.y * 20}px`,
      }}
    />
  );
}