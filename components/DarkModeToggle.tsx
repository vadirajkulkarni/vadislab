import { useEffect, useRef, useState } from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      ref={buttonRef}
      onClick={() => setIsDark((prev) => !prev)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      aria-label="Toggle dark mode"
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  );
}
