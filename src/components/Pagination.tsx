"use client";

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
  itemName?: string;
  className?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
  itemName = "items",
  className = "",
}: PaginationProps) {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (totalItems === 0 || totalPages <= 1) {
    return null;
  }

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // Generate page numbers with ellipsis windowing (adaptive to mobile)
  const getPageNumbers = (): (number | string)[] => {
    if (isMobile) {
      if (totalPages <= 4) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }
      if (currentPage <= 2) {
        return [1, 2, 3, '...', totalPages];
      }
      if (currentPage >= totalPages - 1) {
        return [1, '...', totalPages - 2, totalPages - 1, totalPages];
      }
      return [1, '...', currentPage, '...', totalPages];
    }

    // Desktop/Tablet: Up to 7 slots
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, '...', totalPages];
    }

    if (currentPage >= totalPages - 3) {
      return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  const pages = getPageNumbers();

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div className={`mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 select-none ${className}`}>
      {/* Items count summary */}
      <div className="text-xs sm:text-sm text-slate-500 font-medium order-2 sm:order-1 text-center sm:text-left">
        Showing <strong className="text-brand-dark font-black">{startItem}–{endItem}</strong> of{" "}
        <strong className="text-brand-dark font-black">{totalItems}</strong> {itemName}{" "}
        <span className="text-slate-400 hidden md:inline">· Page {currentPage} of {totalPages}</span>
      </div>

      {/* Pagination control buttons */}
      <nav aria-label="Pagination Navigation" className="flex items-center gap-1 sm:gap-1.5 order-1 sm:order-2">
        {/* Previous Button */}
        <button
          type="button"
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous Page"
          className="inline-flex items-center justify-center gap-1 px-3 sm:px-3.5 h-9 sm:h-10 rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white text-xs sm:text-sm font-bold text-slate-700 shadow-xs hover:bg-slate-50 hover:text-brand-dark hover:border-brand-pink/50 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-slate-700 disabled:hover:border-slate-200/90 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft size={16} />
          <span className="hidden sm:inline">Prev</span>
        </button>

        {/* Numbered Page Buttons & Ellipsis */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {pages.map((p, idx) => {
            if (p === '...') {
              return (
                <span
                  key={`ellipsis-${idx}`}
                  className="w-7 sm:w-9 h-9 sm:h-10 flex items-center justify-center text-xs sm:text-sm font-bold text-slate-400 select-none"
                >
                  …
                </span>
              );
            }

            const pageNum = Number(p);
            const isActive = pageNum === currentPage;

            return (
              <button
                key={`page-${pageNum}`}
                type="button"
                onClick={() => handlePageClick(pageNum)}
                aria-label={`Go to page ${pageNum}`}
                aria-current={isActive ? 'page' : undefined}
                className={`w-9 sm:w-10 h-9 sm:h-10 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-200 flex items-center justify-center shadow-xs ${
                  isActive
                    ? 'bg-brand-pink text-white shadow-glow-pink scale-105 border border-brand-pink'
                    : 'bg-white text-slate-700 border border-slate-200/90 hover:bg-slate-50 hover:text-brand-dark hover:border-brand-pink/50'
                }`}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next Page"
          className="inline-flex items-center justify-center gap-1 px-3 sm:px-3.5 h-9 sm:h-10 rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white text-xs sm:text-sm font-bold text-slate-700 shadow-xs hover:bg-slate-50 hover:text-brand-dark hover:border-brand-pink/50 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-slate-700 disabled:hover:border-slate-200/90 disabled:cursor-not-allowed transition-all"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight size={16} />
        </button>
      </nav>
    </div>
  );
}
