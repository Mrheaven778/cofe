import clsx from "clsx";
import { useRef, useMemo, type ReactNode, type ElementType } from "react";
import { useMousePosition } from "../../hooks/useMousePosition";

interface SpotlightCardProps {
  as?: ElementType;
  from?: string;
  via?: string | null;
  to?: string;
  size?: number;
  mode?: "before" | "after";
  hsl?: boolean;
  hslMin?: number;
  hslMax?: number;
  children: ReactNode;
  className?: string;
  [key: string]: any;
}

export function SpotlightCard({
  as: Component = "div",
  from = "rgba(217,119,6,0.3)",
  via = null,
  to = "transparent",
  size = 350,
  mode = "after",
  hsl = false,
  hslMin = 0,
  hslMax = 360,
  children,
  className,
  ...props
}: SpotlightCardProps) {
  const container = useRef<any>(null);

  const { elX, elY, elW, elH } = useMousePosition(container);

  const spotlightColorStops = useMemo(() => {
    if (hsl) {
      const margin = hslMax - hslMin;
      const rate = (elY + elX) / (elH + elW);
      const hue = Math.round(margin * rate + hslMin);

      return `hsl(${hue} 80% 70%),transparent`;
    }

    return [from, via, to].filter((value) => !!value).join(",");
  }, [hsl, hslMax, hslMin, from, via, to, elY, elX, elH, elW]);

  const classes =
    mode === "before"
      ? `before:absolute before:inset-0 before:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))]`
      : `after:absolute after:inset-0 after:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))]`;

  return (
    <Component
      ref={container}
      className={clsx(
        "relative transform-gpu overflow-hidden",
        classes,
        className,
      )}
      {...props}
      style={
        {
          "--x": `${elX}px`,
          "--y": `${elY}px`,
          "--spotlight-color-stops": spotlightColorStops,
          "--spotlight-size": `${size}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </Component>
  );
}
