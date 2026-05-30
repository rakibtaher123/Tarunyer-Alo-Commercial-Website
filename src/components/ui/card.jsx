import React from "react";
import { cn } from "@/lib/utils";

export const Card = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "bg-neutral-900/60 backdrop-blur-md border border-zinc-850 hover:border-green-500/40 rounded-3xl overflow-hidden transition-all duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_30px_rgba(34,197,94,0.1)] group",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
Card.displayName = "Card";

export const CardContent = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("p-6 sm:p-8", className)} {...props}>
      {children}
    </div>
  );
});
CardContent.displayName = "CardContent";
