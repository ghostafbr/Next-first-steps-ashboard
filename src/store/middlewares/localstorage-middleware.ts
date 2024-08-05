import {RootState} from '@/store';
import {Action, Dispatch, MiddlewareAPI} from 'redux';


export const localstorageMiddleware = ( state: MiddlewareAPI ) => {
    return (next: Dispatch) => (action: Action) => {
        next(action);

        if (action.type === 'pokemons/toggleFavorite') {
            const { pokemons } = state.getState() as RootState;
            localStorage.setItem('favorite-pokemons', JSON.stringify( pokemons ) );
        }
    }
}
//
