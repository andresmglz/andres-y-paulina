import Link from 'next/link';
import { clsx } from 'clsx';

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
};

export function Button({ href, children, variant = 'primary' }: ButtonProps) {
  return (
    <Link
      className={clsx(
        'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200',
        variant === 'primary'
          ? 'bg-[var(--color-ink)] text-white hover:bg-[var(--color-moss)]'
          : 'border border-[var(--color-line)] bg-white/70 text-[var(--color-ink)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]',
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
