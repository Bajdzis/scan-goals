import React from 'react';
import './StickyItem.scss';

interface StickyItemProps {
    children: React.ReactNode;
    top?: number;
    bottom?: number;
}

export const StickyItem: React.FC<StickyItemProps> = ({children, top, bottom}: StickyItemProps) => {

    return (<div className="stickyItem" style={{top, bottom}}>
        {children}
    </div>);
};
