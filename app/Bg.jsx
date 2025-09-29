"use client";
import React, { useState } from "react";
import Ballpit from "./Ballpit";
import LiquidGlass from "liquid-glass-react";

export default function Bg() {
  const [showBalls, setShowBalls] = useState(false);

  return (
    <div>
      {" "}
      {showBalls && (
        <div
          style={{
            position: "fixed",
            overflow: "hidden",
            minHeight: "100vh",
            width: "100vw",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <Ballpit
            count={50}
            gravity={0.01}
            friction={0.9975}
            wallBounce={0.95}
            followCursor={false}
            colors={["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#843b62"]}
          />
        </div>
      )}
      <div className="fixed bottom-4 right-0">
        <LiquidGlass>
          <button
            className="text-black rounded"
            onClick={() => setShowBalls((prev) => !prev)}
          >
            {showBalls ? "get rid of them" : "show you my balls"}
          </button>
        </LiquidGlass>
      </div>
    </div>
  );
}
