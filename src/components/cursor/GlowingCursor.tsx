"use client";

import React, { useEffect, useRef } from "react";

// --- INTERMEDIATE CONFIGURATION ---
const CONFIG = {
  // VISUALS
  TRAIL_LENGTH: 20, // Number of dots (Length of the tail)
  HEAD_SIZE: 12, // Size of the lead bulb (px)
  TAIL_SIZE: 8, // Size of the trail dots (px)
  GLOW_INTENSITY: 180, // Blur amount (px)

  // PHYSICS (The "Feel")
  // 1.0 = Instant tracking (no lag), 0.1 = Very slow/heavy lag
  LERP_FACTOR: 0.25, // How fast the trail catches up to the mouse

  // DYNAMICS (The "Life")
  PULSE_SPEED: 0.05, // How fast the bulb breathes (Higher = faster)
  PULSE_RANGE: 0.2, // How much it grows/shrinks (0.1 = subtle, 0.5 = heavy breathing)

  // COLORS (Your Theme)
  COLORS: {
    HEAD: "#cabaa2", // Ternary (Hot filament)
    TAIL: "#ab9d88", // Primary (Light trail)
    GLOW: "#756d5f", // Secondary (Outer shadow)
  },

  // LAYOUT
  Z_INDEX: 9999,
};

const GlowingCursor = () => {
  const trailRef = useRef<HTMLDivElement[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  // We track "current" positions separately for the physics engine
  const pointsRef = useRef(
    Array.from({ length: CONFIG.TRAIL_LENGTH }, () => ({ x: 0, y: 0 })),
  );

  // Timer for the pulse effect
  const frameRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateTrail = () => {
      const { x, y } = mouseRef.current;

      // Increment frame for pulse math
      frameRef.current += CONFIG.PULSE_SPEED;

      // --- PHYSICS STEP ---

      // 1. Move the Head (Index 0)
      // We use LERP here too so the head has a tiny bit of smooth delay (optional)
      // Or set it directly to x/y for instant response.
      const head = pointsRef.current[0];
      head.x += (x - head.x) * CONFIG.LERP_FACTOR;
      head.y += (y - head.y) * CONFIG.LERP_FACTOR;

      // 2. Move the Tail
      for (let i = 1; i < CONFIG.TRAIL_LENGTH; i++) {
        const prev = pointsRef.current[i - 1];
        const curr = pointsRef.current[i];

        // LERP: Move current point towards previous point
        curr.x += (prev.x - curr.x) * CONFIG.LERP_FACTOR;
        curr.y += (prev.y - curr.y) * CONFIG.LERP_FACTOR;
      }

      // --- RENDER STEP ---
      trailRef.current.forEach((dot, index) => {
        if (!dot) return;

        const point = pointsRef.current[index];

        // Base scale calculation (gets smaller towards the end)
        let scale = 1 - index / CONFIG.TRAIL_LENGTH;

        // Add PULSE effect only to the head (index 0)
        if (index === 0) {
          const pulse = 1 + Math.sin(frameRef.current) * CONFIG.PULSE_RANGE;
          scale *= pulse;
        }

        // Apply transformations
        dot.style.transform = `translate(${point.x}px, ${point.y}px) scale(${scale})`;

        // Opacity fade
        dot.style.opacity = (1 - index / CONFIG.TRAIL_LENGTH).toString();
      });

      requestAnimationFrame(animateTrail);
    };

    const animationId = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 h-full w-full overflow-hidden mix-blend-screen"
      style={{ zIndex: CONFIG.Z_INDEX }}
    >
      {Array.from({ length: CONFIG.TRAIL_LENGTH }).map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) trailRef.current[index] = el;
          }}
          className="absolute top-[-10px] left-[-10px] rounded-full"
          style={{
            width:
              index === 0 ? `${CONFIG.HEAD_SIZE}px` : `${CONFIG.TAIL_SIZE}px`,
            height:
              index === 0 ? `${CONFIG.HEAD_SIZE}px` : `${CONFIG.TAIL_SIZE}px`,

            backgroundColor:
              index === 0 ? CONFIG.COLORS.HEAD : CONFIG.COLORS.TAIL,

            boxShadow:
              index === 0
                ? `0 0 ${CONFIG.GLOW_INTENSITY}px 24px ${CONFIG.COLORS.HEAD}, 0 0 30px 5px ${CONFIG.COLORS.TAIL}`
                : `0 0 10px 1px ${CONFIG.COLORS.GLOW}`,

            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
};

export default GlowingCursor;
