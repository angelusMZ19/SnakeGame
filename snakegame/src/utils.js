export const generateRandomFood = () => ({
  x: Math.floor(Math.random() * 20),
  y: Math.floor(Math.random() * 20),
});

export const checkCollision = (head, snake) => {
  // Wall collision
  if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20) {
    return true;
  }
  // Self collision
  return snake.some((segment) => segment.x === head.x && segment.y === head.y);
};