import React from "react";
import { cn } from "@/lib/utils";

export const Button = React.forwardRef(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
    
    const variants = {
      primary: "bg-green-500 text-black hover:bg-green-400 font-bold shadow-[0_0_15px_rgba(34,197,94,0.25)] hover:shadow-[0_0_25px_rgba(34,197,94,0.45)]",
      secondary: "border border-green-700/40 bg-green-950/20 text-green-400 hover:bg-green-950/40",
      outline: "border border-zinc-700 text-white hover:bg-white hover:text-black",
      ghost: "text-zinc-300 hover:text-green-400 hover:bg-zinc-900/50",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm gap-1.5",
      md: "px-5 py-2.5 text-base gap-2",
      lg: "px-8 py-4 text-lg gap-2.5 rounded-2xl",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
