import calculateCanvasSize from "./calculateCanvasSize";
import paintRequiredCalculator from "./paintRequiredCalculator";
import estimatePaintingTime from "./estimatePaintingTime"; // Optional
import paintRequiredForMultipleCoats from "./paintRequiredForMultipleCoats"; // Optional

function main() {
  // Example rectangle dimensions (in meters)
  const length = "10";  // Length of the rectangle
  const width = "20";   // Width of the rectangle
  
  try {
    // Convert the string inputs to the canvas area
    const area = calculateCanvasSize(length, width); // Total area of the canvas
    
    // Coverage per liter (example value)
    const coveragePerLiter = 11.4; // square meters per liter
    
    // Paint required for one coat (area / coverage per liter)
    const paintRequired = paintRequiredCalculator(area, coveragePerLiter);
    
    // Optionally, if the user requests multiple coats:
    const coats = 3;  // Example: 3 coats
    const paintRequiredForAllCoats = paintRequiredForMultipleCoats(area, coveragePerLiter, coats);
    
    // Estimate the time it would take to paint (area / painting speed)
    const paintingSpeed = 5; // Example: painting speed in square meters per hour
    const paintingTime = estimatePaintingTime(area, paintingSpeed);
    
    // Log the results
    console.log(`Canvas area: ${area} square meters`);
    console.log(`Paint required for one coat: ${paintRequired} liters`);
    console.log(`Paint required for ${coats} coats: ${paintRequiredForAllCoats} liters`);
    console.log(`Estimated painting time: ${paintingTime} hours`);
  } catch (error) {
    console.error("Error calculating canvas size:", error.message);
  }
}

main();
