interface TagProps {
  children: React.ReactNode;
  variant?: "success" | "warning" | "error" | "info" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function Tag({
  children,
  variant = "outline",
  size = "md",
}: TagProps) {
  const baseClasses = "font-medium inline-flex items-center justify-center";

  const variantClasses = {
    success:
      "bg-success-tertiary text-success-foreground border border-success-secondary",
    warning:
      "bg-warning-tertiary text-warning-foreground border border-warning-secondary",
    error:
      "bg-failed-tertiary text-failed-foreground border border-failed-secondary",
    info: "bg-info-tertiary text-info-foreground border border-info-secondary",
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
