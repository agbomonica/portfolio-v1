import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

const HeadingH1 = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-8xl',
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

const HeadingH2 = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1
      className={cn(
        'scroll-m-20 pb-2 text-5xl font-semibold tracking-tight first:mt-0 lg:text-6xl',
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

const HeadingH3 = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-semibold tracking-tight first:mt-0 lg:text-5xl',
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

const HeadingP = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className={cn('leading-7', className)} {...props}>
      {children}
    </p>
  );
};
const HeadingSmall = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLElement>) => {
  return (
    <small
      className={cn('text-sm font-medium leading-none', className)}
      {...props}
    >
      {children}
    </small>
  );
};

export { HeadingH1, HeadingH2, HeadingH3, HeadingP, HeadingSmall };
