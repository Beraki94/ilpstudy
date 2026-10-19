"use client";

import React from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';

interface PhotoSpaceProps {
  title: string;
  subtitle?: string;
  badge?: string;
  aspectRatio?: string; // e.g. "aspect-[16/10]", "aspect-[4/3]", "aspect-[1/1]"
  fallbackSrc?: string;
  className?: string;
  priority?: boolean;
}

export default function PhotoSpace({
  title,
  subtitle,
  badge = "Photo Space",
  aspectRatio = "aspect-[16/10]",
  fallbackSrc,
  className = "",
}: PhotoSpaceProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-slate-100 shadow-soft transition-all duration-500 hover:shadow-xl ${aspectRatio} ${className}`}
    >
      {fallbackSrc ? (
        <img
          src={fallbackSrc}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 p-6 text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-soft text-brand-pink">
            <Camera size={26} />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-pink">
            {badge}
          </span>
          <p className="mt-2 text-base font-bold text-brand-dark">{title}</p>
          {subtitle && (
            <p className="mt-1 text-xs text-slate-500 max-w-xs">{subtitle}</p>
          )}
        </div>
      )}

      {/* Visual Badge Overlay */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs font-bold text-brand-dark shadow-sm border border-white/60">
        <Camera size={12} className="text-brand-pink sm:w-[13px] sm:h-[13px]" />
        <span>{badge}</span>
      </div>

      {/* Elegant Bottom Label / Caption */}
      <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 sm:p-6 pt-8 sm:pt-12 text-white">
        <p className="text-sm sm:text-base font-bold leading-tight drop-shadow-sm">{title}</p>
        {subtitle && (
          <p className="text-[11px] sm:text-xs text-slate-200 font-medium mt-1 line-clamp-2 drop-shadow-sm leading-snug">
            {subtitle}
          </p>
        )}
      </div>

      {/* Hover prompt for user upload */}
      <div className="absolute inset-0 z-30 flex items-center justify-center bg-brand-dark/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-brand-dark shadow-lg">
          <ImageIcon size={14} className="text-brand-green" />
          <span>Image Slot: {title}</span>
        </div>
      </div>
    </div>
  );
}
