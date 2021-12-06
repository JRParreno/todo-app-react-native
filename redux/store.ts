import { combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { todoReducer } from './reducers/todoReducers';
import AsyncStorage from '@react-native-async-storage/async-storage';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const rootReducer = combineReducers({
    todo: todoReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)


export type AppStateStore = ReturnType<typeof rootReducer>


export default () => {
    let store = createStore(persistedReducer);
    let persistor = persistStore(store);
    return { store, persistor }
};
