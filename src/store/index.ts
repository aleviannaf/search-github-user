import { configureStore,   } from '@reduxjs/toolkit'
import searchSlice from './modules/search/searchSlice'
import historySlice, { loadFromLocalStorage } from './modules/history/historySlice'
import localStorageMiddleware from './middlewares/localStorageMiddleware'
//import localStorageMiddleware from './middlewares/localStorageMiddleware'

export const store = configureStore({
    reducer: {
        search: searchSlice,
        history: historySlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware)
})

store.dispatch(loadFromLocalStorage());

export type StoreDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>