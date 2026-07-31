import type { ReactNode, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'green';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
  disabled?: boolean;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  type?: undefined;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-neutral-900 text-white hover:bg-[#016734] active:bg-[#015a2d] shadow-sm',
  secondary: 'bg-white text-neutral-900 border border-neutral-200 hover:bg-[#016734] hover:text-white hover:border-[#016734] shadow-sm',
  outline: 'bg-transparent text-neutral-900 border border-neutral-300 hover:bg-[#016734] hover:text-white hover:border-[#016734]',
  ghost: 'bg-transparent text-neutral-700 hover:bg-[#016734] hover:text-white',
  green: 'bg-green-700 text-white hover:bg-[#016734] active:bg-[#015a2d] shadow-sm',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-3.5 py-2 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-6 py-3 text-base gap-2',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  disabled,
  href,
  onClick,
  type = 'button',
}: ButtonProps) {
  const base = cn(
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2',
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 pointer-events-none',
    className
  );

  if (href !== undefined) {
    return (
      <Link to={href} className={base} onClick={onClick as MouseEventHandler<HTMLAnchorElement>}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={base} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
