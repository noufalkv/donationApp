import {configureStore, combineReducers} from '@reduxjs/toolkit';
import User from './reducers/User';
import {logger} from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};
const rootReducer = combineReducers({
  user: User,
});
const persistedReducer = persistReducer(configuration, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({serializableCheck: false});
  },
});
export default store;
export const persistor = persistStore(store);
