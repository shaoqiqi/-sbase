import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'
import saga from './saga';

//console.log(persistStore)
const storageConfig = {
    key: 'root', // 必须有的
    storage:storageSession, // 缓存机制
   // blacklist: [] // reducer 里不持久化的数据,除此外均为持久化数据
    whitelist: []
}

const myPersistReducer = persistReducer(storageConfig, reducer)//持久化相关
// const store = createStore(myPersistReducer)
// export const persistor = persistStore(store)




const sagaMiddleware = createSagaMiddleware();//sage
const store = createStore(myPersistReducer,applyMiddleware(sagaMiddleware))//持久化和sage
sagaMiddleware.run(saga)//sage

export const persistor = persistStore(store)//缓存

export default store
