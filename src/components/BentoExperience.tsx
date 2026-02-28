import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from '../lib/framer-motion';

// Couleurs strictes selon le PRD
const COLORS = {
  surface: '#F8F9F5',
  primary: '#B2C2A2',
  secondary: '#849673',
  accent: '#E5A186',
  text: '#2D3427', // Pour contraste élevé sur #B2C2A2
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const tileVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  hover: {
    y: -4,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Filtre grain SVG - texture subtile
const GrainFilter = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }}>
    <filter id="grain" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.65"
        numOctaves="3"
        stitchTiles="stitch"
      />
      <feColorMatrix in="colorNoise" type="saturate" values="0" />
      <feComponentTransfer>
        <feFuncA type="discrete" tableValues="0 0.02 0 0.02" />
      </feComponentTransfer>
      <feComposite operator="over" in="SourceGraphic" />
    </filter>
  </svg>
);

// Tile 1: Code Editor
const CodeEditorTile = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [highlightedLine, setHighlightedLine] = useState<number | null>(null);

  const codeLines = [
    { id: 1, code: 'const createSuccess = (idea) =>', indent: 0 },
    { id: 2, code: '  transform(idea);', indent: 1 },
  ];

  return (
    <motion.div
      className="relative rounded-[32px] p-4 sm:p-6 border border-[#849673]/20 backdrop-blur-sm shadow-soft overflow-hidden group cursor-pointer"
      style={{
        backgroundColor: COLORS.surface,
        filter: 'url(#grain)',
      }}
      variants={tileVariants}
      whileHover="hover"
      onHoverStart={() => {
        setShowTooltip(true);
        setHighlightedLine(1);
      }}
      onHoverEnd={() => {
        setShowTooltip(false);
        setHighlightedLine(null);
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#849673]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* IDE Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <div className="w-3 h-3 rounded-full bg-[#28CA42]" />
      </div>

      {/* Code */}
      <div className="relative z-10 font-mono text-xs sm:text-sm" style={{ fontFamily: 'JetBrains Mono, monospace', color: COLORS.text }}>
        {codeLines.map((line) => (
          <div
            key={line.id}
            className={`transition-colors duration-200 ${
              highlightedLine === line.id ? 'bg-[#849673]/20' : ''
            }`}
            style={{ paddingLeft: `${line.indent * 1.5}rem` }}
          >
            <span className="text-[#849673]/60">{line.id}</span>
            {' '}
            <span className={highlightedLine === line.id ? 'text-[#849673] font-semibold' : ''}>
              {line.code}
            </span>
          </div>
        ))}
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute bottom-4 left-4 right-4 bg-[#849673] text-white text-xs px-3 py-2 rounded-lg z-20"
        >
          Optimized for Performance
        </motion.div>
      )}

      <h3 className="text-base sm:text-lg font-semibold mt-4" style={{ color: COLORS.text }}>
        Tech-First
      </h3>
    </motion.div>
  );
};

// Tile 2: Playground avec formes draggables
const PlaygroundTile = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shapesContainerRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0, top: 0, bottom: 0 });

  useEffect(() => {
    if (shapesContainerRef.current) {
      const rect = shapesContainerRef.current.getBoundingClientRect();
      const shapeSize = 40; // Taille max des formes
      setConstraints({
        left: -rect.width / 2 + shapeSize,
        right: rect.width / 2 - shapeSize,
        top: -rect.height / 2 + shapeSize,
        bottom: rect.height / 2 - shapeSize,
      });
    }
  }, []);

  const shapes = [
    { id: 1, color: COLORS.secondary, shape: 'circle' },
    { id: 2, color: COLORS.accent, shape: 'star' },
    { id: 3, color: COLORS.secondary, shape: 'rect' },
    { id: 4, color: COLORS.accent, shape: 'triangle' },
  ];

  return (
    <motion.div
      className="relative rounded-[32px] p-4 sm:p-6 border border-[#849673]/20 backdrop-blur-sm shadow-soft overflow-hidden group cursor-pointer"
      style={{
        backgroundColor: COLORS.surface,
        filter: 'url(#grain)',
      }}
      variants={tileVariants}
      whileHover="hover"
      ref={containerRef}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#849673]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1 relative" ref={shapesContainerRef}>
          {shapes.map((shape, index) => {
            const initialX = (index % 2) * 50 - 25;
            const initialY = Math.floor(index / 2) * 50 - 25;
            
            return (
              <motion.div
                key={shape.id}
                drag
                dragConstraints={constraints}
                dragElastic={0.1}
                initial={{ x: initialX, y: initialY }}
                whileDrag={{ scale: 1.1, zIndex: 50 }}
                className="absolute top-1/2 left-1/2 cursor-grab active:cursor-grabbing"
                style={{ x: initialX, y: initialY }}
              >
                {shape.shape === 'circle' && (
                  <div
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                    style={{ backgroundColor: shape.color }}
                  />
                )}
                {shape.shape === 'star' && (
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill={shape.color}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                )}
                {shape.shape === 'rect' && (
                  <div
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded"
                    style={{ backgroundColor: shape.color }}
                  />
                )}
                {shape.shape === 'triangle' && (
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill={shape.color}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  >
                    <path d="M12 2L2 22h20L12 2z" />
                  </svg>
                )}
              </motion.div>
            );
          })}
        </div>
        <h3 className="text-base sm:text-lg font-semibold mt-4" style={{ color: COLORS.text }}>
          Digital Natives & Passionate
        </h3>
      </div>
    </motion.div>
  );
};

// Tile 3: Brandbook avec HEX cliquables
const BrandbookTile = () => {
  const [tileColor, setTileColor] = useState<string | null>(null);
  const [splashActive, setSplashActive] = useState(false);

  const colorCodes = [
    { hex: COLORS.primary, name: 'Primary' },
    { hex: COLORS.secondary, name: 'Secondary' },
    { hex: COLORS.accent, name: 'Accent' },
  ];

  const handleColorClick = (hex: string) => {
    setTileColor(hex);
    setSplashActive(true);
    setTimeout(() => setSplashActive(false), 600);
  };

  return (
    <motion.div
      className="relative rounded-[32px] p-4 sm:p-6 border border-[#849673]/20 backdrop-blur-sm shadow-soft overflow-hidden group cursor-pointer row-span-2"
      style={{
        backgroundColor: tileColor ? tileColor : COLORS.surface,
        filter: 'url(#grain)',
        transition: 'background-color 0.5s ease',
      }}
      variants={tileVariants}
      whileHover="hover"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#849673]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Color Splash Effect */}
      {splashActive && tileColor && (
        <motion.div
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 2, opacity: 0 }}
          exit={{ scale: 2, opacity: 0 }}
          className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{ backgroundColor: tileColor }}
        />
      )}

      <div className="relative z-10 h-full flex flex-col justify-center items-center">
        <div className="mb-6">
          <div className="flex gap-3 justify-center mb-4">
            {colorCodes.map((color) => (
              <motion.button
                key={color.hex}
                onClick={(e) => {
                  e.stopPropagation();
                  handleColorClick(color.hex);
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#849673]/30 cursor-pointer transition-all hover:border-[#849673]"
                style={{ backgroundColor: color.hex }}
                title={color.hex}
              />
            ))}
          </div>
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-center" style={{ color: COLORS.text }}>
          Esthétique & Précision
        </h3>
      </div>
    </motion.div>
  );
};

// Tile 4: Badge magnétique
const MagneticBadgeTile = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);
  
  const rotateX = useTransform(ySpring, [-50, 50], [10, -10]);
  const rotateY = useTransform(xSpring, [-50, 50], [-10, 10]);
  const rotate = useTransform(xSpring, [-50, 50], [0, 180]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !badgeRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const badgeRect = badgeRef.current.getBoundingClientRect();
    
    // Centre du badge dans le container
    const centerX = badgeRect.left + badgeRect.width / 2;
    const centerY = badgeRect.top + badgeRect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    
    if (distance < 50) {
      const strength = (50 - distance) / 50;
      x.set(distanceX * strength * 0.5);
      y.set(distanceY * strength * 0.5);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative rounded-[32px] p-4 sm:p-6 border border-[#849673]/20 backdrop-blur-sm shadow-soft overflow-hidden group cursor-pointer"
      style={{
        backgroundColor: COLORS.surface,
        filter: 'url(#grain)',
      }}
      variants={tileVariants}
      whileHover="hover"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#849673]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10 h-full flex flex-col justify-center items-center">
        <motion.div
          ref={badgeRef}
          style={{
            x: xSpring,
            y: ySpring,
            rotateX,
            rotateY,
            rotate,
            borderWidth: '1px',
            borderColor: COLORS.secondary,
          }}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border flex items-center justify-center mb-4"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: COLORS.surface }}>
            <span className="text-xs sm:text-sm font-bold" style={{ color: COLORS.text }}>
              100%
            </span>
          </div>
        </motion.div>
        <h3 className="text-base sm:text-lg font-semibold text-center" style={{ color: COLORS.text }}>
          100% Sur-mesure
        </h3>
      </div>
    </motion.div>
  );
};

export default function BentoExperience() {
  return (
    <>
      <GrainFilter />
      <motion.div
        className="aspect-square grid grid-cols-2 gap-3 sm:gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <CodeEditorTile />
        <PlaygroundTile />
        <BrandbookTile />
        <MagneticBadgeTile />
      </motion.div>
    </>
  );
}
