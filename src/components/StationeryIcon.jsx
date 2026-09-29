import React from "react";

const shared = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export default function StationeryIcon({ type, className = "", title }) {
  const paths = {
    calendar: (
      <>
        <rect x="4" y="5.5" width="16" height="15" rx="1.5" />
        <path d="M8 3.5v4M16 3.5v4M4 9.5h16M7.5 13h2m3 0h2m-7 3.5h2m3 0h2" />
        <path d="M2.5 8V5.5h2M21.5 8V5.5h-2M2.5 18v2.5h2M21.5 18v2.5h-2" />
      </>
    ),
    clock: (
      <>
        <path d="M10 3.5h4l1 2a8 8 0 1 1-6 0l1-2Z" />
        <path d="M10 3.5h4M12 2v1.5M12 8v4l2.8 1.8M18.5 18.5l2 2" />
        <path d="M12 7a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM12 18a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM5 12a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM18 12a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Z" />
      </>
    ),
    arch: (
      <>
        <path d="M3.5 20.5h17M5.5 20.5v-9a6.5 6.5 0 0 1 13 0v9M8.5 20.5v-9a3.5 3.5 0 0 1 7 0v9" />
        <path d="M4.5 9.5a7.5 7.5 0 0 1 15 0M2.5 11.5h3m13 0h3M7 7l-1.5-1.5M17 7l1.5-1.5M10 4l-.5-2M14 4l.5-2M7 18h1m8 0h1" />
      </>
    ),
    replay: (
      <>
        <path d="M5.2 8.2A8 8 0 1 1 4 13M5.2 4.5v3.8H1.5" />
        <path d="M12 7v5l3 1.8" />
      </>
    ),
    play: <path d="m9 6 9 6-9 6V6Z" />,
    pause: <path d="M9 6v12m6-12v12" />,
  };

  return (
    <svg
      aria-hidden={title ? undefined : "true"}
      aria-label={title}
      role={title ? "img" : undefined}
      viewBox="0 0 24 24"
      className={className}
      {...shared}
    >
      {paths[type] || paths.arch}
    </svg>
  );
}
