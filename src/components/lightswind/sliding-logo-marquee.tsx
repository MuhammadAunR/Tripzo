import React, { useState } from "react";

export function TextMarquee({
  items = [],
  speed = 40,
  pauseOnHover = true,
  height = "80px",
  width = "100%",
  gap = "2rem",
  backgroundColor = "transparent",
  className = "",
}) {
  const [isPlaying, setIsPlaying] = useState(true);

  // Duplicate items to create seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <>
      <style>{`
        .text-marquee-wrapper {
          overflow: hidden;
          width: ${width};
          height: ${height};
          background: ${backgroundColor};
          position: relative;
        }

        .text-marquee-inner {
          height: 100%;
          display: flex;
          align-items: center;
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .text-marquee-content {
          display: flex;
          gap: ${gap};
          white-space: nowrap;
          animation: scroll ${speed}s linear infinite;
          animation-play-state: ${isPlaying ? "running" : "paused"};
        }

        .text-marquee-item {
          font-size: clamp(1rem, 2vw, 2rem);
          font-weight: 200;
          flex-shrink: 0;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .text-marquee-content {
            animation: none;
          }
        }
      `}</style>

      <div
        className={`text-marquee-wrapper ${className}`}
        onMouseEnter={() => pauseOnHover && setIsPlaying(false)}
        onMouseLeave={() => pauseOnHover && setIsPlaying(true)}
      >
        <div className="text-marquee-inner">
          <div className="text-marquee-content">
            {duplicatedItems.map((item, index) => (
              <div key={index} className="text-marquee-item">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TextMarquee;