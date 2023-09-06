import { useEffect, useRef } from 'react';
import useMousePosition from '../../hooks/useMousePosition';

import styles from './CustomCursor.module.css';

type CustomCursorProps = {
  text: string;
};

const CustomCursor = ({ text = '' }: CustomCursorProps) => {
  const [...cursorTextChars] = text;
  const mousePosition = useMousePosition();
  const cursorRef = useRef<HTMLDivElement>(null);
  const rAFRef = useRef<number | null>(null);

  const updateCursorFrame = () => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${mousePosition.pageX}px, ${mousePosition.pageY}px,0)`;
    }
    rAFRef.current = requestAnimationFrame(updateCursorFrame);
  };

  useEffect(() => {
    if (cursorRef.current) {
      rAFRef.current = requestAnimationFrame(updateCursorFrame);
    }

    return () => {
      if (rAFRef.current) {
        cancelAnimationFrame(rAFRef.current);
      }
    };
  }, [mousePosition, cursorRef.current]);

  return (
    <div ref={cursorRef} className={styles.cursor}>
      {cursorTextChars.map((char, index) => (
        <span key={index} className={styles.character}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default CustomCursor;