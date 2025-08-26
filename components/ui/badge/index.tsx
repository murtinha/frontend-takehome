interface BadgeProps {
  children: React.ReactNode;
  variant?: "green" | "blue" | "orange" | "pink" | "teal" | "red" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function Badge({
  children,
  variant = "outline",
  size = "md",
}: BadgeProps) {
  const baseClasses =
    "font-medium inline-flex items-center justify-center whitespace-nowrap";

  const variantClasses = {
    green:
      "bg-badge-green text-badge-green-foreground border border-badge-green-secondary",
    blue: "bg-badge-blue text-badge-blue-foreground border border-badge-blue-secondary",
    orange:
      "bg-badge-orange text-badge-orange-foreground border border-badge-orange-secondary",
    pink: "bg-badge-pink text-badge-pink-foreground border border-badge-pink-secondary",
    teal: "bg-badge-teal text-badge-teal-foreground border border-badge-teal-secondary",
    red: "bg-badge-red text-badge-red-foreground border border-badge-red-secondary",
    outline: "bg-transparent text-foreground border border-border",
  };

  const sizeClasses = {
    sm: "px-1.5 py-0.5 text-xs",
    md: "px-2 py-1 text-sm",
    lg: "px-3 py-1.5 text-base",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;

  return <span className={classes}>{children}</span>;
}
