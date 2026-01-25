import Link from "next/link";
import { ReactNode } from "react";

type ActionButtonProps = {
  href: string;
  ariaLabel: string;
  children: ReactNode;
};

export default function ActionButton({
  href,
  ariaLabel,
  children,
}: ActionButtonProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className="
        w-full sm:flex-1
        h-12 max-h-14
        flex items-center justify-center
        rounded-full
        shadow-m
        bg-accent text-primary
        font-medium
        transition-colors duration-200
        hover:bg-primary hover:text-secondary
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary
        focus-visible:ring-offset-2
        focus-visible:ring-offset-background
      ">
      {children}
    </Link>
  );
}
