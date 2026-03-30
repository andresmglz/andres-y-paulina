import Link from 'next/link';
import { clsx } from 'clsx';

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'heroPrimary' | 'heroSecondary' | 'heroEditorial' | 'floating';
};

export function Button({ href, children, variant = 'primary' }: ButtonProps) {
  const isExternal = href.startsWith('http');

  return (
    <Link
      className={clsx(
        'inline-flex items-center justify-center rounded-full text-sm font-semibold transition duration-200',
        variant === 'primary'
          ? 'bg-[var(--terracotta)] px-6 py-3 text-white shadow-[0_10px_30px_rgba(159,77,46,0.26)] hover:-translate-y-0.5 hover:bg-[var(--terracotta-dark)]'
          : '',
        variant === 'secondary'
          ? 'border border-[rgba(255,247,240,0.32)] bg-[rgba(251,247,241,0.14)] px-6 py-3 text-[var(--surface-paper)] backdrop-blur-[8px] hover:border-[rgba(255,247,240,0.52)] hover:bg-[rgba(251,247,241,0.2)]'
          : '',
        variant === 'heroPrimary'
          ? 'bg-[var(--terracotta)] px-7 py-3 text-white shadow-[0_14px_35px_rgba(159,77,46,0.28)] hover:-translate-y-0.5 hover:bg-[var(--terracotta-dark)]'
          : '',
        variant === 'heroSecondary'
          ? 'border border-white/48 px-7 py-3 text-white/92 backdrop-blur-[6px] hover:bg-white/10'
          : '',
        variant === 'heroEditorial'
          ? 'border border-[rgba(200,101,67,0.36)] bg-[rgba(251,247,241,0.78)] px-6 py-2.5 text-[var(--terracotta-dark)] hover:bg-[var(--terracotta)] hover:text-white'
          : '',
        variant === 'floating'
          ? 'bg-[var(--terracotta)] px-[22px] py-4 text-white shadow-[0_18px_45px_rgba(159,77,46,0.34)] hover:scale-[1.04] hover:bg-[var(--terracotta-dark)]'
          : '',
      )}
      href={href}
      rel={isExternal ? 'noreferrer noopener' : undefined}
      target={isExternal ? '_blank' : undefined}
    >
      {children}
    </Link>
  );
}
