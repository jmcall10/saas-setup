import { useEffect, useRef, useState } from "react";
import * as fabric from "fabric";

export default function About() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const playerRefs = useRef<{ [key: string]: fabric.Object }>({});
  const footballRef = useRef<fabric.Circle | null>(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [startPositions, setStartPositions] = useState<{ [key: string]: { left: number; top: number } }>({});
  const [endPositions, setEndPositions] = useState<{ [key: string]: { left: number; top: number } }>({});
  const [startSaved, setStartSaved] = useState(false);
  const [endSaved, setEndSaved] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
  const [playerShapes, setPlayerShapes] = useState<{ [key: string]: string }>({});
  const [playerColors, setPlayerColors] = useState<{ [key: string]: string }>({});
  const [startButtonColor, setStartButtonColor] = useState("black");
  const [endButtonColor, setEndButtonColor] = useState("black");
  const [playButtonColor, setPlayButtonColor] = useState("gray");


  const shapeOptions = ["Circle", "Square", "Triangle"];
  const colorOptions = ["blue", "red", "lime", "yellow", "purple", "black"];

  useEffect(() => {
    if (!canvasRef.current) return;

    const newCanvas = new fabric.Canvas(canvasRef.current);
    setCanvas(newCanvas);

    const FIELD_WIDTH = 800;
    const FIELD_HEIGHT = 500;
    newCanvas.setWidth(FIELD_WIDTH);
    newCanvas.setHeight(FIELD_HEIGHT);
    newCanvas.backgroundColor = "green";
    newCanvas.renderAll();

    for (let i = 100; i <= FIELD_WIDTH - 100; i += 100) {
      const yardLine = new fabric.Line([i, 0, i, FIELD_HEIGHT], {
        stroke: "white",
        strokeWidth: 2,
      });
      newCanvas.add(yardLine);
    }

    const scrimmageLineX = FIELD_WIDTH / 2;
    const lineOfScrimmage = new fabric.Line([scrimmageLineX, 0, scrimmageLineX, FIELD_HEIGHT], {
      stroke: "yellow",
      strokeWidth: 4,
    });
    newCanvas.add(lineOfScrimmage);

    const offenseStartX = scrimmageLineX - 100;
    const defenseStartX = scrimmageLineX + 100;
    const playerSpacingY = FIELD_HEIGHT / 12;

    for (let i = 0; i < 11; i++) {
      createPlayer(newCanvas, `O-${i}`, offenseStartX, (i + 1) * playerSpacingY, "blue", "Circle");
    }
    for (let i = 0; i < 11; i++) {
      createPlayer(newCanvas, `D-${i}`, defenseStartX, (i + 1) * playerSpacingY, "red", "Circle");
    }

    const football = new fabric.Circle({
      left: offenseStartX - 20,
      top: playerRefs.current["O-0"]?.top || 100,
      radius: 6,
      fill: "brown",
    });
    footballRef.current = football;
    newCanvas.add(football);

    return () => {
      newCanvas.dispose();
    };
  }, []);

  const createPlayer = (canvas: fabric.Canvas, id: string, left: number, top: number, color: string, shape: string) => {
    let player: fabric.Object;
    if (shape === "Square") {
      player = new fabric.Rect({ left, top, width: 20, height: 20, fill: color });
    } else if (shape === "Triangle") {
      player = new fabric.Polygon(
        [
          { x: 10, y: 0 },
          { x: 20, y: 20 },
          { x: 0, y: 20 },
        ],
        { left, top, fill: color }
      );
    } else {
      player = new fabric.Circle({ left, top, radius: 12, fill: color });
    }

    player.set({ selectable: true });
    playerRefs.current[id] = player;
    canvas.add(player);

    player.on("selected", () => setSelectedPlayer(id));
    setPlayerShapes((prev) => ({ ...prev, [id]: shape }));
    setPlayerColors((prev) => ({ ...prev, [id]: color }));
  };

  // ✅ Change shape without spawning a new object
  const changePlayerShape = (newShape: string) => {
    if (!canvas || !selectedPlayer) return;

    const oldPlayer = playerRefs.current[selectedPlayer];
    if (!oldPlayer) return;

    const { left, top } = oldPlayer as any;
    const color = playerColors[selectedPlayer] || "blue";
    canvas.remove(oldPlayer);

    createPlayer(canvas, selectedPlayer, left, top, color, newShape);
    setPlayerShapes((prev) => ({ ...prev, [selectedPlayer]: newShape }));

    canvas.renderAll();
  };

  // ✅ Instantly updates color
  const changePlayerColor = (newColor: string) => {
    if (!canvas || !selectedPlayer) return;

    const player = playerRefs.current[selectedPlayer];
    if (player) {
      player.set({ fill: newColor });
      setPlayerColors((prev) => ({ ...prev, [selectedPlayer]: newColor }));
      canvas.renderAll();
    }
  };

  // ✅ Save start positions
  const setStart = () => {
    if (!canvas) return;
    const newPositions: { [key: string]: { left: number; top: number } } = {};
    Object.entries(playerRefs.current).forEach(([key, player]) => {
      newPositions[key] = { left: player.left!, top: player.top! };
    });
    setStartPositions(newPositions);
    setStartSaved(true);
    setStartButtonColor("green"); // ✅ Button turns green when clicked
  };
  

  // ✅ Save end positions
  const setEnd = () => {
    if (!canvas) return;
    const newPositions: { [key: string]: { left: number; top: number } } = {};
    Object.entries(playerRefs.current).forEach(([key, player]) => {
      newPositions[key] = { left: player.left!, top: player.top! };
    });
    setEndPositions(newPositions);
    setEndSaved(true);
    setEndButtonColor("green"); // ✅ Button turns green when clicked
  };
  

  // ✅ Animate players
  const playAnimation = () => {
    if (!canvas || !startSaved || !endSaved) return;
  
    setPlayButtonColor("blue"); // ✅ Play button turns blue when clicked
    setStartButtonColor("black"); // ✅ Reset start button color
    setEndButtonColor("black"); // ✅ Reset end button color
  
    Object.entries(startPositions).forEach(([key, position]) => {
      playerRefs.current[key]?.set({ left: position.left, top: position.top });
    });
    canvas.renderAll();
  
    Object.entries(endPositions).forEach(([key, position]) => {
      playerRefs.current[key]?.animate(
        { left: position.left, top: position.top },
        {
          duration: 2000,
          onChange: canvas.renderAll.bind(canvas),
          easing: fabric.util.ease.easeInOutQuad,
          onComplete: () => setPlayButtonColor("gray"), // ✅ Reset play button to gray when animation ends
        }
      );
    });
  };
  

  return (
    <div>
      <h1>About Us</h1>
      <canvas ref={canvasRef} width={800} height={500} style={{ border: "2px solid black" }} />
      <br />

      {selectedPlayer && (
        <div>
          <p><strong>Editing Player:</strong> {selectedPlayer}</p>
          <label>Shape: </label>
          <select onChange={(e) => changePlayerShape(e.target.value)} value={playerShapes[selectedPlayer] || "Circle"}>
            {shapeOptions.map((shape) => (
              <option key={shape} value={shape}>
                {shape}
              </option>
            ))}
          </select>

          <label> Color: </label>
          <select onChange={(e) => changePlayerColor(e.target.value)} value={playerColors[selectedPlayer] || "blue"}>
            {colorOptions.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
      )}

<button 
  onClick={setStart} 
  style={{ backgroundColor: startButtonColor, color: "white" }}
>
  Set Start Positions
</button>

<button 
  onClick={setEnd} 
  style={{ backgroundColor: endButtonColor, color: "white" }}
>
  Set End Positions
</button>

<button 
  onClick={playAnimation} 
  disabled={!startSaved || !endSaved} 
  style={{ backgroundColor: playButtonColor, color: "white" }}
>
  Play
</button>

    </div>
  );
}
