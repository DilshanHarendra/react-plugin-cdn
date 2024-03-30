import React, { FC } from 'react';
import { Spin } from 'antd';
import { persistor, store } from '../store/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { MessageDrawerWrapper } from './MessageDrawerWrapper';

const MessageDrawer: FC = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={<Spin />} persistor={persistor}>
                <MessageDrawerWrapper />
            </PersistGate>
        </Provider>
    );
};
export default MessageDrawer;
