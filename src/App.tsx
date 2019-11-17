import React from 'react';
import { HomePage } from './layouts/HomePage/HomePage';
import { LearnPage } from './layouts/LearnPage/LearnPage';
// import PermissionPage from './layouts/PermissionPage/PermissionPage';
// const PermissionPage = React.lazy(() => import('./layouts/PermissionPage/PermissionPage'));

const App: React.FC = () => {
    // if(Notification.permission !== 'granted'){
    //     return <PermissionPage />;
    // }

    return (
        <>
            <HomePage />
            <LearnPage />
        </>
    );
};

export default App;
