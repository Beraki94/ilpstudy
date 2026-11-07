"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface PhotoSpaceProps {
  title: string;
  subtitle?: string;
  badge?: string;
  aspectRatio?: string; // e.g. "aspect-[16/10]", "aspect-[4/3]", "aspect-[3/4]", "aspect-[1/1]"
  fallbackSrc?: string;
  className?: string;
  priority?: boolean;
  captionClassName?: string;
  hideTopBadge?: boolean;
}

export default function PhotoSpace({
  title,
  aspectRatio = "aspect-[16/10]",
  fallbackSrc,
  className = "",
  priority = false,
}: PhotoSpaceProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-slate-100 shadow-card transition-all duration-500 hover:shadow-card-hover ${aspectRatio} ${className}`}
    >
      {fallbackSrc && !hasError ? (
        <Image
          src={fallbackSrc}
          alt={title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-slate-900 p-6 text-center text-white">
          <p className="text-sm font-bold text-slate-300">{title}</p>
        </div>
      )}
    </div>
  );
}
