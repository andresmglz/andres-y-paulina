import { clsx } from 'clsx';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-[28px] border border-[rgba(45,38,34,0.08)] bg-[linear-gradient(180deg,rgba(251,247,241,0.96),rgba(245,237,228,0.92))] p-7 shadow-[0_14px_36px_rgba(35,25,20,0.05)] transition duration-300',
        className,
      )}
    >
      {children}
    </div>
  );
}
