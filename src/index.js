

import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/index';
import {persistor} from './store/index';
import {PersistGate} from 'redux-persist/lib/integration/react';


import './index5.scss';
import Routers from './router';
import * as serviceWorker from './serviceWorker';
import {getCodeByb4,getJsonByb4} from './util/base64';

import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import echarts from 'echarts'
React.$getCodeByb4 = getCodeByb4
React.$getJsonByb4 = getJsonByb4
React.$echarts = echarts

ReactDOM.render( <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
         <Routers /> 
     </PersistGate>      
     </Provider> 
     </ConfigProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
