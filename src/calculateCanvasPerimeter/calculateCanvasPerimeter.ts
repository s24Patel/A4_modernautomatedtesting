export default function calculateCanvasPerimeter(length: string, width: string): number {
  const lengthNum = parseInt(length);
  const widthNum = parseInt(width);

  if (isNaN(lengthNum) || isNaN(widthNum)) {
    throw new Error("Invalid dimensions provided.");
  }

  return 2 * (lengthNum + widthNum);
}