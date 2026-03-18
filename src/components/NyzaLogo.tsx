export default function NyzaLogo({ className = "", width = 120, dark = false }: { className?: string; width?: number; dark?: boolean }) {
  const stroke = dark ? "#fff" : "#000";
  const fill = dark ? "#fff" : "#000";
  const height = width * 0.4;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 580 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* N - geometric outline style */}
      <path
        d="M5 195 L5 15 L45 15 L135 155 L135 15 L175 15 L175 195 L135 195 L45 55 L45 195 Z"
        stroke={stroke}
        strokeWidth="7"
        fill="none"
        strokeLinejoin="miter"
      />
      {/* Y */}
      <path
        d="M185 15 L225 15 L275 95 L325 15 L365 15 L295 125 L295 195 L255 195 L255 125 Z"
        stroke={stroke}
        strokeWidth="7"
        fill="none"
        strokeLinejoin="miter"
      />
      {/* Z - with angular cuts like the logo */}
      <path
        d="M375 15 L545 15 L545 50 L425 160 L545 160 L545 195 L375 195 L375 160 L495 50 L375 50 Z"
        stroke={stroke}
        strokeWidth="7"
        fill="none"
        strokeLinejoin="miter"
      />
      {/* A - with triangular cutout */}
      <path
        d="M470 195 L530 15 L570 15 L630 195 L590 195 L575 150 L525 150 L510 195 Z M535 120 L565 120 L550 60 Z"
        stroke={stroke}
        strokeWidth="7"
        fill="none"
        strokeLinejoin="miter"
        transform="translate(-80, 0)"
      />
      {/* STUDIO text */}
      <text
        x="400"
        y="212"
        fontFamily="Inter, Arial, sans-serif"
        fontWeight="900"
        fontSize="40"
        fill={fill}
        letterSpacing="3"
      >
        STUDIO
      </text>
    </svg>
  );
}
