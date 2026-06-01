import { type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline" | "ember";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  fullWidth?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-forest text-white hover:bg-forest-light shadow-md hover:shadow-lg",
  secondary:
    "bg-white text-forest border-2 border-forest hover:bg-cream-dark",
  outline:
    "bg-transparent text-forest border-2 border-forest-dark hover:bg-forest hover:text-white",
  ember:
    "bg-ember text-white hover:bg-ember-dark shadow-md hover:shadow-lg",
};

export function Button({
  variant = "primary",
  fullWidth,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={[
        "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 disabled:opacity-50",
        variants[variant],
        fullWidth ? "w-full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
