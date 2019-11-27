import React from 'react';
import { HomePage } from './layouts/HomePage/HomePage';
import { LearnPage } from './layouts/LearnPage/LearnPage';
import { WelcomePage } from './layouts/WelcomePage/WelcomePage';
import { useSelector } from 'react-redux';
import { RootState } from './store/root';
import { GoalPage } from './layouts/GoalPage/GoalPage';
import { AssignTipPage, AssignTipPageProps } from './layouts/AssignTipPage/AssignTipPage';
// import PermissionPage from './layouts/PermissionPage/PermissionPage';
// const PermissionPage = React.lazy(() => import('./layouts/PermissionPage/PermissionPage'));

export const PAGE_NAME_TO_COMPONENT = {
    home: HomePage,
    learn: LearnPage,
    welcome: WelcomePage,
    goal: GoalPage,
    assignTip: AssignTipPage
};

export const App: React.FC = () => {
    // if(Notification.permission !== 'granted'){
    //     return <PermissionPage />;
    // }
    const pageName = useSelector((state:RootState) => state.page.name);
    const pageProps = useSelector((state:RootState) => state.page.props) as AssignTipPageProps;
    const Component = PAGE_NAME_TO_COMPONENT[pageName];
    return (
        <Component {...pageProps}/>
    );
};

