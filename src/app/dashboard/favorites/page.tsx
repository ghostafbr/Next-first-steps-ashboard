import {FavoritePokemons} from '@/pokemons';

export const metadata = {
    title: 'Favorites',
    description: 'Favorite Pokemons'
};

const FavoritePokemonsPage = () => {
    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Fav Poke list <small className="text-blue-500">Global State</small></span>
            <FavoritePokemons/>
        </div>
    );
};

export default FavoritePokemonsPage;
