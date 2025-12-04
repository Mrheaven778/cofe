import { type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "bordered";
}

export function Card({ className = "", variant = "default", children, ...props }: CardProps) {
  const variants = {
    default: "bg-white rounded-lg p-6",
    elevated: "bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300",
    bordered: "bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-amber-600 transition-colors duration-300",
  };

  return (
    <div className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`mb-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ className = "", children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={`text-2xl font-bold text-gray-900 ${className}`} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({ className = "", children, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`text-gray-600 ${className}`} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ className = "", children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
