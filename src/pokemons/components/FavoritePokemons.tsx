'use client'

import {PokemonGrid} from '@/pokemons/components/PokemonGrid';
import {useAppSelector} from '@/store';
import {useEffect, useState} from 'react';
import {IoHeartOutline} from 'react-icons/io5';

export const FavoritePokemons = () => {

    const favoritePokemons = useAppSelector( state => Object.values(state.pokemons.favorites) );
    // const [ pokemons, setPokemons ] = useState( favoritePokemons );

    /*useEffect(() => {
        setPokemons( favoritePokemons );
    }, []);*/

    return (
        <>
            {/* <PokemonGrid pokemons={pokemons} /> */}
            {
                !favoritePokemons.length
                    ? (<NoFavorites/>)
                    : (<PokemonGrid pokemons={favoritePokemons}/>)
            }
        </>
    );
};

export const NoFavorites = () => {
    return (
        <div className="flex flex-col h-[50vh] items-center justify-center">
            <IoHeartOutline size={100} className="text-red-500"/>
            <span>There is not favorites</span>
        </div>
    );
}
