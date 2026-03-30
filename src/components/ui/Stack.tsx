import { clsx } from 'clsx';

type StackProps = {
  children: React.ReactNode;
  gap?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
};

const gapMap = {
  xs: 'gap-2',
  sm: 'gap-3',
  md: 'gap-5',
  lg: 'gap-8',
};

export function Stack({ children, gap = 'md', className }: StackProps) {
  return <div className={clsx('flex flex-col', gapMap[gap], className)}>{children}</div>;
}
