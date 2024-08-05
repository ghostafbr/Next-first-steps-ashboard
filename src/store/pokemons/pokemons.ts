import {SimplePokemon} from '@/pokemons/interfaces';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {type} from 'node:os';

interface PokemonState {
    favorites: { [key: string]: SimplePokemon } ;
}

const getInitialState = () => {
    // if ( typeof localStorage === 'undefined' ) return {};
    return JSON.parse( localStorage.getItem('favorite-pokemons') ?? '{}' );
}

const initialState: PokemonState = {
    favorites: {},
    // ...getInitialState(),
    /*favorites: {
        /!*'1': {
            id: '1',
            name: 'bulbasaur'
        },
        '4': {
            id: '4',
            name: 'charmander'
        },
        '7': {
            id: '7',
            name: 'squirtle'
        }*!/
    }*/
};

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setFavoritePokemons( state, action: PayloadAction<{ [key: string]: SimplePokemon }> ) {
            state.favorites = action.payload;
        },

        toggleFavorite( state, action: PayloadAction<SimplePokemon> ) {

            const pokemon = action.payload;
            const { id } = pokemon;

            if ( !!state.favorites[id] ) {
                delete state.favorites[id];
                // return;
            } else {
                state.favorites[id] = pokemon;
            }

            //TODO: No se debe de hacer en Redux
            localStorage.setItem('favorite-pokemons', JSON.stringify( state.favorites ) );

        }

    },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
