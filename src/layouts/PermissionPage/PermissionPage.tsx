import React from 'react';
import './PermissionPage.scss';
import { requestPermission } from '../../firebase/messaging/firebaseMessaging';

export const PermissionPage: React.FC = () => {
    return (
        <div>
            <button type="button" onClick={requestPermission}>Uruchom powiadomienia</button>
        </div>
    );
};


export default PermissionPage;
