// components/HexagonGrid.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HexagonGrid = ({ words }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    resizeCanvas();

    const hexRadius = 40; // Adjust as needed
    const hexWidth = Math.sqrt(3) * hexRadius;
    const hexHeight = 2 * hexRadius;

    const hexagons = [];
    const offsetX = hexWidth / 2; // Offset for staggered rows

    // Calculate total rows and columns based on the canvas size
    const cols = Math.ceil(canvas.width / hexWidth) + 1;
    const rows = Math.ceil(canvas.height / (hexHeight * 0.75)) + 1;

    // Adjusted positions for the words
    const wordPositions = {
      center: [Math.floor(rows / 2), Math.floor(cols / 2) - Math.floor(words[0].length / 2)], // "ESSENDENCY" in center
      topRight: [Math.floor(rows / 2) - 3, Math.floor(cols / 2) + 2], // "FLAVORS" closer to center, top-right
      bottomLeft: [Math.floor(rows / 2) + 3, Math.floor(cols / 2) - words[2].length - 2] // "SCIENCE" closer to center, bottom-left
    };

    // Populate hexagons across the entire canvas
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
      for (let colIndex = 0; colIndex < cols; colIndex++) {
        const x = colIndex * hexWidth + (rowIndex % 2 ? offsetX : 0);
        const y = rowIndex * (hexHeight * 0.75);

        // Determine if a letter should be placed here based on the word positions
        let letter = '';
        if (
          words[0] && // Check if "ESSENDENCY" exists
          rowIndex === wordPositions.center[0] &&
          colIndex >= wordPositions.center[1] &&
          colIndex < wordPositions.center[1] + words[0].length
        ) {
          letter = words[0][colIndex - wordPositions.center[1]];
        } else if (
          words[1] && // Check if "FLAVORS" exists
          rowIndex === wordPositions.topRight[0] &&
          colIndex >= wordPositions.topRight[1] &&
          colIndex < wordPositions.topRight[1] + words[1].length
        ) {
          letter = words[1][colIndex - wordPositions.topRight[1]];
        } else if (
          words[2] && // Check if "SCIENCE" exists
          rowIndex === wordPositions.bottomLeft[0] &&
          colIndex >= wordPositions.bottomLeft[1] &&
          colIndex < wordPositions.bottomLeft[1] + words[2].length
        ) {
          letter = words[2][colIndex - wordPositions.bottomLeft[1]];
        }

        hexagons.push({ x, y, letter });
        drawHexagon(ctx, x, y, hexRadius, letter, 1); // Initial scale of 1
      }
    }

    // Animate the hexagons with GSAP
    gsap.to({}, {
      repeat: -1,
      yoyo: true,
      duration: 0.05,
      onUpdate: () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        hexagons.forEach(hex => {
          drawHexagon(ctx, hex.x, hex.y, hexRadius, hex.letter, 1);
        });
      }
    });

    // Adjust canvas on resize
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [words]);

  const drawHexagon = (ctx, x, y, radius, letter, scale = 1) => {
    const hexPath = new Path2D();
    const gradient = ctx.createLinearGradient(x - radius, y - radius, x + radius, y + radius);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0.4)');

    const hexAngle = (Math.PI * 2) / 6;
    ctx.save(); // Save the current state
    ctx.translate(x, y);
    ctx.rotate(Math.PI / 2); // Rotate hexagon by 90 degrees
    ctx.scale(scale, scale); // Apply scale for potential animations
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const dx = radius * Math.cos(hexAngle * i);
      const dy = radius * Math.sin(hexAngle * i);
      if (i === 0) hexPath.moveTo(dx, dy);
      else hexPath.lineTo(dx, dy);
    }
    hexPath.closePath();

    // Glassmorphic style
    ctx.fillStyle = `rgba(255, 255, 255, 0.1)`;
    ctx.fill(hexPath);
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;
    ctx.stroke(hexPath);

    // Draw letter if available (counter-rotate to keep text upright)
    if (letter) {
      ctx.rotate(-Math.PI / 2); // Rotate text back to upright position
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.font = `${radius * 0.8}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(letter, 0, 0);
    }

    ctx.restore(); // Restore to the original state after transformations
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  return (
    <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100vh' }} />
  );
};

export default HexagonGrid;
