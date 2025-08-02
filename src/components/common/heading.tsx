import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

const HeadingH1 = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-balance text-4xl font-extrabold tracking-tight md:text-6xl lg:text-8xl',
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
    <h2
      className={cn(
        'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 md:text-5xl lg:text-6xl',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

const HeadingH3 = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
};

const HeadingH4 = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h4
      className={cn(
        'scroll-m-20 text-base font-semibold tracking-tight',
        className
      )}
      {...props}
    >
      {children}
    </h4>
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

export { HeadingH1, HeadingH2, HeadingH3, HeadingH4, HeadingP, HeadingSmall };
