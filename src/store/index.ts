import {localstorageMiddleware} from '@/store/middlewares/localstorage-middleware';
import {configureStore, Middleware} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import counterReducer from './counter/counterSlice';
import pokemonsReducer from '@/store/pokemons/pokemons';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        pokemons: pokemonsReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localstorageMiddleware as Middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
