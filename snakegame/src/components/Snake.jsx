export default function Snake({ segments }) {
  return segments.map((segment, index) => (
    <div
      key={index}
      className="absolute w-[20px] h-[20px] bg-green-500"
      style={{
        left: `${segment.x * 20}px`,
        top: `${segment.y * 20}px`,
      }}
    />
  ));
}