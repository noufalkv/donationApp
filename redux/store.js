import {configureStore, combineReducers} from '@reduxjs/toolkit';
import User from './reducers/User';
import Categories from './reducers/Categories';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import Donations from './reducers/Donations';
const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};
const rootReducer = combineReducers({
  user: User,
  categories: Categories,
  donations: Donations,
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
