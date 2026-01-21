"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface Props {
  children: React.ReactNode;
}

interface Position {
  x: number;
  y: number;
}

export function DraggableXPWindow({ children }: Props) {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [ghostWindows, setGhostWindows] = useState<Position[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [sectionBounds, setSectionBounds] = useState({ minX: -500, maxX: 500, minY: -500, maxY: 500 });
  
  const containerRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const lastGhostPosition = useRef<Position>({ x: 0, y: 0 });
  const dragStart = useRef<Position>({ x: 0, y: 0 });
  const initialWindowPos = useRef<{ top: number; left: number } | null>(null);

  // Check if desktop and calculate section bounds
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    
    // Calculate bounds after mount
    const calculateBounds = () => {
      const section = containerRef.current?.closest('section');
      const windowEl = windowRef.current;
      
      if (section && windowEl) {
        const sectionRect = section.getBoundingClientRect();
        const windowRect = windowEl.getBoundingClientRect();
        
        // Store initial window position relative to section
        if (!initialWindowPos.current) {
          initialWindowPos.current = {
            top: windowRect.top - sectionRect.top,
            left: windowRect.left - sectionRect.left,
          };
        }
        
        const initPos = initialWindowPos.current;
        
        // Calculate how far window can move in each direction
        setSectionBounds({
          minX: -initPos.left,
          maxX: sectionRect.width - initPos.left - windowRect.width,
          minY: -initPos.top,
          maxY: sectionRect.height - initPos.top - windowRect.height,
        });
      }
    };
    
    setTimeout(calculateBounds, 100);
  }, []);

  // Auto-animation on mount (desktop only)
  useEffect(() => {
    if (isMobile) return;

    const timer = setTimeout(() => {
      // Step 1: t=600ms (100ms after start) - ghost at (0,0), window to (15,15)
      setTimeout(() => {
        setGhostWindows(prev => [...prev, { x: 0, y: 0 }]);
        setPosition({ x: 15, y: 15 });
        lastGhostPosition.current = { x: 15, y: 15 };
      }, 100);

      // Step 2: t=800ms (300ms after start) - ghost at (15,15), window to (30,30)
      setTimeout(() => {
        setGhostWindows(prev => [...prev, { x: 15, y: 15 }]);
        setPosition({ x: 30, y: 30 });
        lastGhostPosition.current = { x: 30, y: 30 };
      }, 300);

      // Step 2: t=1000ms (500ms after start) - ghost at (30,30), window to (45,45)
      setTimeout(() => {
        setGhostWindows(prev => [...prev, { x: 30, y: 30 }]);
        setPosition({ x: 45, y: 45 });
        lastGhostPosition.current = { x: 45, y: 45 };
      }, 500);
    }, 500);

    return () => clearTimeout(timer);
  }, [isMobile]);

  // Calculate distance between two points
  const getDistance = (p1: Position, p2: Position) => {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  };

  // Handle mouse down on titlebar
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (isMobile) return;
    
    e.preventDefault();
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  }, [isMobile, position]);

  // Handle mouse move
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX - dragStart.current.x;
      const newY = e.clientY - dragStart.current.y;

      // Apply section bounds
      const boundedX = Math.max(sectionBounds.minX, Math.min(newX, sectionBounds.maxX));
      const boundedY = Math.max(sectionBounds.minY, Math.min(newY, sectionBounds.maxY));

      // Check if we need to create a ghost
      if (getDistance(lastGhostPosition.current, { x: boundedX, y: boundedY }) >= 15) {
        setGhostWindows(prev => [...prev, { ...lastGhostPosition.current }]);
        lastGhostPosition.current = { x: boundedX, y: boundedY };
      }

      setPosition({ x: boundedX, y: boundedY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, sectionBounds]);

  // On mobile, just render children normally
  if (isMobile) {
    return <div className="xp-window max-w-lg mx-auto">{children}</div>;
  }

  return (
    <div ref={containerRef} className="relative" onMouseDown={handleMouseDown}>
      {/* Ghost windows - same size as main window */}
      {ghostWindows.map((pos, i) => (
        <div
          key={i}
          className="absolute pointer-events-none w-full"
          style={{ 
            left: 0,
            top: 0,
            transform: `translate(${pos.x}px, ${pos.y}px)`,
          }}
        >
          <div className="xp-window max-w-lg mx-auto">
            {children}
          </div>
        </div>
      ))}

      {/* Main draggable window */}
      <div
        ref={windowRef}
        className="xp-window max-w-lg mx-auto relative z-10"
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px)`,
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
      >
        {/* Invisible drag handle over titlebar */}
        <div
          className="absolute top-0 left-0 right-0 h-8 z-20"
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        />
        {children}
      </div>
    </div>
  );
}
