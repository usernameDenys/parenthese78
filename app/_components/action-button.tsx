import Link from "next/link";
import { ReactNode } from "react";

type ActionButtonProps = {
  href: string;
  ariaLabel: string;
  children: ReactNode;
  variant?: "primary" | "outline";
};

export default function ActionButton({
  href,
  ariaLabel,
  children,
  variant = "primary",
}: ActionButtonProps) {
  const styles =
    variant === "outline"
      ? "bg-transparent text-primary border border-primary hover:bg-primary hover:text-secondary"
      : "bg-primary text-secondary hover:opacity-90";

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`
        w-full sm:w-auto sm:px-8
        h-12 max-h-14
        flex items-center justify-center
        rounded-full
        shadow-m
        font-medium
        transition-colors duration-200
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary
        focus-visible:ring-offset-2
        focus-visible:ring-offset-background
        ${styles}
      `}>
      {children}
    </Link>
  );
}
