/**
 * @format
 */
import 'react-native-gesture-handler';

import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';

import database from './src/services/watermelondb'
import store from './src/store/index'

const Redux = () => {
    return (
        <DatabaseProvider database={database}>
            <Provider store={store}>
                <App />
            </Provider>
        </DatabaseProvider>

    )
}

AppRegistry.registerComponent(appName, () => Redux);
