import {PokemonGrid, PokemonResponse, SimplePokemon} from '@/pokemons/interfaces';

export const metadata = {
    title: 'Pokemons',
    description: 'PokeList'
};

const getPokemons = async (limit: number = 20, offset: number = 0): Promise<SimplePokemon[]> => {
    const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then((response: Response) => response.json());

    return data.results.map((pokemon) => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }));
};

const PokemonsPage = async () => {

    const pokemons: SimplePokemon[] = await getPokemons(151);

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Poke list <small className="text-blue-500">Static</small></span>
            <PokemonGrid pokemons={pokemons} />
        </div>
    );
};

export default PokemonsPage;
