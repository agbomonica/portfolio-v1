'use client';

import { createContext, useContext, useState } from 'react';
import type { ButtonHTMLAttributes, HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: 'horizontal' | 'vertical';
}
interface TabsTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}
interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

const TabsContext = createContext({
  activeTab: '',
  setActiveTab: (tab: string) => {},
  orientation: 'vertical',
});

const Tabs = ({
  value,
  defaultValue = '',
  onValueChange,
  children,
  className,
  orientation = 'vertical',
  ...props
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(value ?? defaultValue);

  const handleTabChange = (tab: string) => {
    if (onValueChange) {
      onValueChange(tab);
    } else {
      setActiveTab(tab);
    }
  };

  const contextValue = {
    orientation,
    activeTab: value ?? activeTab,
    setActiveTab: handleTabChange,
  };

  return (
    <TabsContext value={contextValue}>
      <div
        {...props}
        className={cn(
          'flex',
          {
            'flex-col gap-4 md:flex-row': orientation === 'vertical',
            'flex-col': orientation === 'horizontal',
          },
          className
        )}
      >
        {children}
      </div>
    </TabsContext>
  );
};
Tabs.displayName = 'Tabs';

const TabsList = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const { orientation } = useContext(TabsContext);

  return (
    <div
      role="tablist"
      aria-label="tabs"
      className={cn(
        'flex',
        {
          'flex-row overflow-x-auto md:basis-52 md:flex-col md:items-start md:overflow-hidden':
            orientation === 'vertical',
          'flex-row': orientation === 'horizontal',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
TabsList.displayName = 'TabsList';

const TabsTrigger = ({
  value,
  children,
  className,
  ...props
}: TabsTriggerProps) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);

  return (
    <button
      role="tab"
      id={`tab-${value}`}
      aria-selected={activeTab === value}
      aria-controls={`tab-content-${value}`}
      className={cn(
        'relative whitespace-nowrap border-b-2 border-b-primary-2 px-4 py-3 text-sm font-medium transition-all hover:bg-primary-1 hover:text-secondary md:border-b-0 md:border-l-2 md:border-l-primary-2',
        {
          'text-secondary after:absolute after:bottom-0 after:right-0 after:inline-block after:h-0.5 after:w-full after:translate-y-[2px] after:rounded after:bg-secondary md:after:left-0 md:after:top-0 md:after:h-full md:after:w-0.5 md:after:translate-x-[-2px]':
            activeTab === value,
        },
        className
      )}
      onClick={() => setActiveTab(value)}
      {...props}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ value, children, ...props }: TabsContentProps) => {
  const { activeTab } = useContext(TabsContext);

  return activeTab === value ? (
    <div
      role="tabpanel"
      id={`tab-content-${value}`}
      className="flex-1 px-4 py-2"
      {...props}
    >
      {children}
    </div>
  ) : null;
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
