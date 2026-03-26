import { clsx } from 'clsx';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)] backdrop-blur',
        className,
      )}
    >
      {children}
    </div>
  );
}
