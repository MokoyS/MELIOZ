import { useEffect, useState } from 'react';
import { motion } from '../lib/framer-motion';
import { Code2, PenTool, TrendingUp, MapPin, Users, Sparkles } from 'lucide-react';

// Couleurs de la palette
const COLORS = {
  surface: '#F8F9F5',
  primary: '#B2C2A2',      // Light Sage Green
  secondary: '#849673',    // Dark Charcoal Green
  accent: '#E5A186',       // Soft Peach/Salmon
  offWhite: '#F8F9F5',     // Off-White/Cream
  text: '#2D3427',         // Text color
};

interface Block {
  id: number;
  width: number;
  height: number;
  color: string;
  x: number;
  y: number;
  content?: {
    type: 'icon' | 'text' | 'number' | 'icon-text';
    icon?: React.ComponentType<{ className?: string }>;
    text?: string;
    number?: string;
    subtext?: string;
  };
}

export default function FloatingBlocks() {
  const containerWidth = 600;
  const containerHeight = 600;
  const gridSize = 8;
  const spacing = 10; // 10px de bordure entre les blocs
  const cellWidth = (containerWidth - spacing) / gridSize;
  const cellHeight = (containerHeight - spacing) / gridSize;
  
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [blockPositions, setBlockPositions] = useState<Map<number, { x: number; y: number }>>(new Map());

  // Générer des blocs avec disposition fixe et élégante
  useEffect(() => {
    // Disposition fixe et élégante sur la grille 8x8
    // Layout asymétrique mais équilibré
    const newBlocks: Block[] = [
      // Bloc 1: Grand carré en haut à gauche (3x3)
      { 
        id: 0,
        width: cellWidth * 3 - spacing, 
        height: cellHeight * 3 - spacing, 
        color: COLORS.primary,
        x: 0 * cellWidth + spacing,
        y: 0 * cellHeight + spacing,
        content: { type: 'icon-text' as const, icon: Code2, text: 'Développement', subtext: 'Web sur-mesure' }
      },
      // Bloc 2: Grand carré en haut à droite (3x3)
      { 
        id: 1,
        width: cellWidth * 3 - spacing, 
        height: cellHeight * 3 - spacing, 
        color: COLORS.secondary,
        x: 5 * cellWidth + spacing,
        y: 0 * cellHeight + spacing,
        content: { type: 'icon-text' as const, icon: PenTool, text: 'Design', subtext: 'UX/UI moderne' }
      },
      // Bloc 3: Horizontal en bas à gauche (4x2)
      { 
        id: 2,
        width: cellWidth * 4 - spacing, 
        height: cellHeight * 2 - spacing, 
        color: COLORS.accent,
        x: 0 * cellWidth + spacing,
        y: 5 * cellHeight + spacing,
        content: { type: 'text' as const, text: '100% Sur-mesure', subtext: 'Approche personnalisée' }
      },
      // Bloc 4: Vertical au milieu droit (2x3)
      { 
        id: 3,
        width: cellWidth * 2 - spacing, 
        height: cellHeight * 3 - spacing, 
        color: COLORS.secondary,
        x: 5 * cellWidth + spacing,
        y: 3 * cellHeight + spacing,
        content: { type: 'icon-text' as const, icon: Users, text: 'TPE, PME', subtext: '& Startups' }
      },
      // Bloc 5: Horizontal au milieu (3x2)
      { 
        id: 4,
        width: cellWidth * 3 - spacing, 
        height: cellHeight * 2 - spacing, 
        color: COLORS.primary,
        x: 0 * cellWidth + spacing,
        y: 3 * cellHeight + spacing,
        content: { type: 'icon-text' as const, icon: MapPin, text: '100% Digital', subtext: 'Basés à Paris' }
      },
      // Bloc 6: Horizontal en bas à droite (3x2)
      { 
        id: 5,
        width: cellWidth * 3 - spacing, 
        height: cellHeight * 2 - spacing, 
        color: COLORS.accent,
        x: 4 * cellWidth + spacing,
        y: 6 * cellHeight + spacing,
        content: { type: 'icon-text' as const, icon: TrendingUp, text: 'Stratégie', subtext: 'Digitale' }
      },
    ];

    setBlocks(newBlocks);
    
    // Initialiser les positions
    const initialPositions = new Map<number, { x: number; y: number }>();
    newBlocks.forEach(block => {
      initialPositions.set(block.id, { x: block.x, y: block.y });
    });
    setBlockPositions(initialPositions);
  }, [cellWidth, cellHeight, spacing]);

  // Système de mouvement simple
  useEffect(() => {
    if (blocks.length === 0) return;

    const moveBlocks = () => {
      setBlockPositions(prev => {
        const newPositions = new Map(prev);
        const grid: boolean[][] = Array(gridSize).fill(null).map(() => Array(gridSize).fill(false));
        
        // Choisir un bloc aléatoire à déplacer
        const randomBlock = blocks[Math.floor(Math.random() * blocks.length)];
        
        // Marquer les positions actuelles (sauf le bloc qui va bouger)
        blocks.forEach(block => {
          if (block.id === randomBlock.id) return; // Exclure le bloc qui va bouger
          
          const currentPos = prev.get(block.id) || { x: block.x, y: block.y };
          const cols = Math.ceil(block.width / cellWidth);
          const rows = Math.ceil(block.height / cellHeight);
          const startCol = Math.floor((currentPos.x - spacing) / cellWidth);
          const startRow = Math.floor((currentPos.y - spacing) / cellHeight);
          
          if (startCol >= 0 && startRow >= 0 && startCol + cols <= gridSize && startRow + rows <= gridSize) {
            for (let row = startRow; row < startRow + rows && row < gridSize; row++) {
              for (let col = startCol; col < startCol + cols && col < gridSize; col++) {
                if (row >= 0 && col >= 0) {
                  grid[row][col] = true;
                }
              }
            }
          }
        });

        // Fonction pour vérifier si une zone est libre
        const isAreaFree = (startCol: number, startRow: number, cols: number, rows: number): boolean => {
          if (startCol + cols > gridSize || startRow + rows > gridSize || startCol < 0 || startRow < 0) return false;
          
          for (let row = startRow; row < startRow + rows; row++) {
            for (let col = startCol; col < startCol + cols; col++) {
              if (grid[row][col]) return false;
            }
          }
          return true;
        };

        // Déplacer le bloc aléatoirement
        const cols = Math.ceil(randomBlock.width / cellWidth);
        const rows = Math.ceil(randomBlock.height / cellHeight);
        
        let placed = false;
        let attempts = 0;
        const maxAttempts = 100;

        while (!placed && attempts < maxAttempts) {
          const startCol = Math.floor(Math.random() * (gridSize - cols + 1));
          const startRow = Math.floor(Math.random() * (gridSize - rows + 1));

          if (isAreaFree(startCol, startRow, cols, rows)) {
            const x = startCol * cellWidth + spacing;
            const y = startRow * cellHeight + spacing;
            newPositions.set(randomBlock.id, { x, y });
            placed = true;
          }
          attempts++;
        }

        return newPositions;
      });
    };

    // Déplacer un bloc toutes les 0.8-1.5 secondes (plus rapide)
    const interval = setInterval(() => {
      moveBlocks();
    }, 800 + Math.random() * 700);

    return () => clearInterval(interval);
  }, [blocks, cellWidth, cellHeight, gridSize, spacing]);

  return (
    <div 
      className="relative w-full h-full mx-auto"
      style={{ 
        width: containerWidth, 
        height: containerHeight,
        maxWidth: '100%',
        maxHeight: '100%',
      }}
    >
      {blocks.map((block) => {
        const position = blockPositions.get(block.id) || { x: block.x, y: block.y };
        const { content } = block;
        
        return (
          <motion.div
            key={block.id}
            className="absolute rounded-3xl flex items-center justify-center group cursor-pointer"
            style={{
              width: block.width,
              height: block.height,
              backgroundColor: block.color,
              border: block.color === COLORS.offWhite ? `1px solid ${COLORS.secondary}20` : 'none',
              boxShadow: '0 10px 30px rgba(47, 54, 44, 0.15), 0 4px 8px rgba(47, 54, 44, 0.1)',
            }}
            whileHover={{
              boxShadow: '0 20px 40px rgba(255, 255, 255, 0.5), 0 8px 16px rgba(255, 255, 255, 0.4)',
              scale: 1.02,
              y: -4,
            }}
            initial={{
              x: block.x,
              y: block.y,
            }}
            animate={{
              x: position.x,
              y: position.y,
            }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {content && (
              <div className="text-center p-4 sm:p-6" style={{ color: COLORS.text }}>
                {content.type === 'icon' && content.icon && (
                  <div className="flex flex-col items-center justify-center h-full gap-2">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <content.icon className="w-10 h-10 sm:w-12 sm:h-12" />
                    </motion.div>
                    {content.text && (
                      <span className="text-sm font-semibold tracking-tight">{content.text}</span>
                    )}
                  </div>
                )}
                
                {content.type === 'icon-text' && content.icon && (
                  <div className="flex flex-col items-center justify-center h-full gap-3">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <content.icon className="w-12 h-12 sm:w-16 sm:h-16" />
                    </motion.div>
                    <span className="text-lg sm:text-xl font-bold tracking-tight leading-tight">{content.text}</span>
                    {content.subtext && (
                      <span className="text-xs sm:text-sm opacity-70 font-medium tracking-wide">{content.subtext}</span>
                    )}
                  </div>
                )}
                
                {content.type === 'number' && (
                  <div className="flex flex-col items-center justify-center h-full gap-2">
                    <span className="text-2xl sm:text-3xl font-bold tracking-tight">{content.number}</span>
                    {content.text && (
                      <span className="text-xs sm:text-sm opacity-70 font-medium">{content.text}</span>
                    )}
                  </div>
                )}
                
                {content.type === 'text' && (
                  <div className="flex flex-col items-center justify-center h-full gap-2">
                    <span className="text-lg sm:text-xl font-bold tracking-tight leading-tight">{content.text}</span>
                    {content.subtext && (
                      <span className="text-xs sm:text-sm opacity-70 font-medium tracking-wide mt-1">{content.subtext}</span>
                    )}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
