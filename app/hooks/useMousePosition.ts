import { useEffect, useState, type RefObject } from "react";

interface MousePosition {
  elX: number;
  elY: number;
  elW: number;
  elH: number;
}

export function useMousePosition(ref: RefObject<HTMLElement>): MousePosition {
  const [position, setPosition] = useState<MousePosition>({
    elX: 0,
    elY: 0,
    elW: 0,
    elH: 0,
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateMousePosition = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      setPosition({
        elX: e.clientX - rect.left,
        elY: e.clientY - rect.top,
        elW: rect.width,
        elH: rect.height,
      });
    };

    element.addEventListener("mousemove", updateMousePosition);

    return () => {
      element.removeEventListener("mousemove", updateMousePosition);
    };
  }, [ref]);

  return position;
}
