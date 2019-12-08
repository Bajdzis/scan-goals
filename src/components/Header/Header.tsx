import React, { ReactNode } from 'react';

import './Header.scss';

interface HeaderProps {
    children: ReactNode;
    onClickBack(): void;
}


export const Header: React.FC<HeaderProps> = ({children, onClickBack}: HeaderProps) => {

    return (<div className="header">
        <div className="header__button" >
            <button className="circle two" onClick={onClickBack} title="Wróć">{'<'} </button>
        </div>
        <h1 className="header__title" >{children}</h1>
    </div>);
};




