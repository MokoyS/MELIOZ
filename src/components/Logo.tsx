interface LogoProps {
  className?: string;
  inverted?: boolean;
}

export default function Logo({ className = "h-8", inverted = false }: LogoProps) {
  const textColor = inverted ? "#FFFFFF" : "#2F362C";
  
  return (
    <svg 
      width="400" 
      height="120" 
      viewBox="0 0 400 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g transform="translate(10, 15) scale(0.8)">
        <path 
          d="M20 85V45C20 31.1929 31.1929 20 45 20C58.8071 20 70 31.1929 70 45V85" 
          stroke="#B2C2A2" 
          strokeWidth="14" 
          strokeLinecap="round"
        />
        <path 
          d="M70 85V45C70 31.1929 81.1929 20 95 20C108.807 20 120 31.1929 120 45V85" 
          stroke="#B2C2A2" 
          strokeWidth="14" 
          strokeLinecap="round"
        />
      </g>
      
      <text 
        x="135" 
        y="75" 
        fill={textColor}
        style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 800,
          fontSize: '48px',
          letterSpacing: '2px'
        }}
      >
        MELIOZ
      </text>
    </svg>
  );
}
