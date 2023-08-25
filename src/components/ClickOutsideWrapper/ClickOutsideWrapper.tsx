import React, { useRef, useEffect } from 'react';

interface ClickOutsideWrapperProps {
  onClickOutside: () => void;
  children: React.ReactNode;
}

export const ClickOutsideWrapper = ({ onClickOutside, children }: ClickOutsideWrapperProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClickOutside]);

  return <div ref={wrapperRef}>{children}</div>;
};
