import { useState, useEffect } from "preact/hooks";
import { Pokemon } from "../types.ts";
import { FunctionComponent } from "preact";

const PokemonList: FunctionComponent = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

    useEffect(() => {
        const fetchPokemonList = async () => {
            const response = await fetch("/api/getAllPokemon");
            const pokemonList = await response.json();
            setPokemonList(pokemonList);
        };

        fetchPokemonList();
    }, []);

    return (
        <div class="lista-pokemon">
            <ul style={{ listStyleType: 'none' }}>
                {pokemonList.map((pokemon: Pokemon) => (
                    <li key={pokemon._id}>
                        <a class="container-pokemon" href={`/pokemon/${pokemon.name}`}>
                            <img src={pokemon.image} alt={pokemon.name} />
                            <h2>{pokemon.name}</h2>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PokemonList;
