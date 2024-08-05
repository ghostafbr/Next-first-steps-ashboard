'use client';

import {setFavoritePokemons} from '@/store/pokemons/pokemons';
import {useEffect} from 'react';
import {store} from './';
import {Provider} from 'react-redux';

interface Props {
    children: React.ReactNode;
}

export const Providers = ({children}: Props) => {

    useEffect(() => {
        const favs =  JSON.parse( localStorage.getItem('favorite-pokemons') ?? '{}' );
        store.dispatch( setFavoritePokemons( favs ) );
    }, []);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
