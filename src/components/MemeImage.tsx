'use client'

import { useState } from 'react'
import Image from 'next/image'

interface MemeImageProps {
  src: string
  alt: string
  caption?: string
  style?: 'polaroid' | 'demotivator' | 'xp-window' | 'plain'
  subtitle?: string
  className?: string
  onClick?: () => void
  animated?: boolean
}

export function MemeImage({ 
  src, 
  alt, 
  caption, 
  subtitle,
  style = 'plain',
  className = '',
  onClick,
  animated = false
}: MemeImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  
  const baseAnimation = animated ? 'transition-all duration-300 hover:scale-105' : ''
  
  if (style === 'polaroid') {
    return (
      <div 
        className={`polaroid max-w-[200px] cursor-pointer ${baseAnimation} ${className}`}
        onClick={onClick}
      >
        <div className="relative">
          <img 
            src={src} 
            alt={alt}
            className="w-full h-auto filter sepia-[0.1] contrast-[1.05]"
            onLoad={() => setIsLoaded(true)}
          />
        </div>
        {caption && (
          <p className="text-center mt-2 font-['Caveat'] text-lg text-gray-700 absolute bottom-3 left-0 right-0">
            {caption}
          </p>
        )}
      </div>
    )
  }
  
  if (style === 'demotivator') {
    return (
      <div 
        className={`demotivator max-w-[220px] ${baseAnimation} ${className}`}
        onClick={onClick}
      >
        <div className="border border-gray-700">
          <img 
            src={src} 
            alt={alt}
            className="w-full h-auto"
          />
        </div>
        <div className="demotivator-text">
          {caption && (
            <h3 className="text-lg uppercase tracking-wider font-normal mb-1">
              {caption}
            </h3>
          )}
          {subtitle && (
            <p className="text-xs text-gray-400 italic">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    )
  }
  
  if (style === 'xp-window') {
    return (
      <div className={`xp-window max-w-[250px] ${baseAnimation} ${className}`}>
        <div className="xp-titlebar">
          <span>{caption || 'image.jpg'}</span>
          <div className="flex gap-1">
            <button className="w-5 h-5 bg-gradient-to-b from-blue-300 to-blue-500 rounded-sm text-xs border border-white/30">─</button>
            <button className="w-5 h-5 bg-gradient-to-b from-blue-300 to-blue-500 rounded-sm text-xs border border-white/30">□</button>
            <button className="w-5 h-5 bg-gradient-to-b from-red-400 to-red-600 rounded-sm text-xs border border-white/30">×</button>
          </div>
        </div>
        <div className="p-1 bg-white">
          <img 
            src={src} 
            alt={alt}
            className="w-full h-auto"
          />
        </div>
        {subtitle && (
          <div className="bg-[#ECE9D8] border-t border-gray-400 px-2 py-1 text-xs text-gray-600">
            {subtitle}
          </div>
        )}
      </div>
    )
  }
  
  // Plain style
  return (
    <div className={`relative ${baseAnimation} ${className}`} onClick={onClick}>
      <img 
        src={src} 
        alt={alt}
        className="w-full h-auto rounded-lg shadow-md"
      />
      {caption && (
        <p className="text-center mt-2 text-sm text-gray-600">{caption}</p>
      )}
    </div>
  )
}
