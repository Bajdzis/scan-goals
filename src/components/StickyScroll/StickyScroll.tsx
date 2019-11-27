import React from 'react';
import './StickyScroll.scss';

interface StickyScrollProps {
    children: React.ReactNode;
}

export const StickyScroll: React.FC<StickyScrollProps> = ({children}: StickyScrollProps) => {
  

    return (<div className="stickyScroll">
        {children}
    </div>);
};
