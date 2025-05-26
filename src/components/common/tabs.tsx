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
          'flex overflow-hidden',
          {
            'flex-row': orientation === 'vertical',
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
          'flex-col items-start': orientation === 'vertical',
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
        'border-l-primary-2 hover:bg-primary-1 relative whitespace-nowrap border-l-2 px-4 py-3 text-sm font-medium transition-all hover:text-secondary',
        {
          'text-secondary after:absolute after:left-0 after:top-0 after:h-full after:w-0.5 after:translate-x-[-2px] after:rounded after:bg-secondary':
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
      className="px-4 py-2"
      {...props}
    >
      {children}
    </div>
  ) : null;
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
