import Link from 'next/link';
import { clsx } from 'clsx';

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?:
    | 'primary'
    | 'secondary'
    | 'heroPrimary'
    | 'heroSecondary'
    | 'heroEditorial'
    | 'heroLight'
    | 'heroStrokeLight'
    | 'floating';
};

export function Button({ href, children, variant = 'primary' }: ButtonProps) {
  const isExternal = href.startsWith('http');

  return (
    <Link
      className={clsx(
        'inline-flex items-center justify-center rounded-full text-sm font-semibold transition duration-200',
        variant === 'primary'
          ? 'bg-[var(--dusty-blue)] px-6 py-3 text-white shadow-[0_10px_30px_rgba(114,142,165,0.28)] hover:-translate-y-0.5 hover:bg-[var(--dusty-blue-soft)]'
          : '',
        variant === 'secondary'
          ? 'border border-[rgba(255,247,240,0.32)] bg-[rgba(251,247,241,0.14)] px-6 py-3 text-[var(--surface-paper)] backdrop-blur-[8px] hover:border-[rgba(255,247,240,0.52)] hover:bg-[rgba(251,247,241,0.2)]'
          : '',
        variant === 'heroPrimary'
          ? 'bg-[var(--dusty-blue)] px-10 py-4 text-[11px] uppercase tracking-[0.22em] text-[var(--surface-paper)] shadow-[0_16px_36px_rgba(114,142,165,0.28),0_0_20px_rgba(166,187,200,0.18)] hover:-translate-y-0.5 hover:bg-[var(--dusty-blue-soft)]'
          : '',
        variant === 'heroSecondary'
          ? 'border border-[rgba(226,232,240,0.42)] bg-[linear-gradient(180deg,rgba(111,143,166,0.08),rgba(255,255,255,0.04))] px-9 py-4 text-[11px] uppercase tracking-[0.22em] text-[rgba(251,247,241,0.92)] backdrop-blur-[8px] hover:border-[rgba(226,232,240,0.6)] hover:bg-[linear-gradient(180deg,rgba(111,143,166,0.14),rgba(255,255,255,0.09))]'
          : '',
        variant === 'heroEditorial'
          ? 'border border-[rgba(114,142,165,0.28)] bg-[rgba(248,238,224,0.82)] px-6 py-2.5 text-[var(--dusty-blue)] hover:bg-[var(--dusty-blue)] hover:text-white'
          : '',
        variant === 'heroLight'
          ? 'bg-[rgba(255,255,255,0.94)] px-8 py-3 uppercase tracking-[0.2em] text-[11px] text-[var(--text-primary)] shadow-[0_16px_40px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 hover:bg-white'
          : '',
        variant === 'heroStrokeLight'
          ? 'border border-white/60 bg-transparent px-8 py-3 uppercase tracking-[0.2em] text-[11px] text-white hover:bg-white/10'
          : '',
        variant === 'floating'
          ? 'bg-[var(--dusty-blue)] px-[22px] py-4 text-white shadow-[0_18px_45px_rgba(114,142,165,0.34)] hover:scale-[1.04] hover:bg-[var(--dusty-blue-soft)]'
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
