import { clsx } from 'clsx';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-[28px] border border-[rgba(114,142,165,0.12)] bg-[linear-gradient(180deg,rgba(248,238,224,0.98),rgba(241,231,216,0.94))] p-7 shadow-[0_14px_36px_rgba(35,25,20,0.05)] transition duration-300',
        className,
      )}
    >
      {children}
    </div>
  );
}
