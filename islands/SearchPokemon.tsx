import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { Pokemon } from "../types.ts";

const SearchPokemon: FunctionComponent = () => {
    const [name, setName] = useState<string>("");
    const [pokemons, setPokemons] = useState<Pokemon[]>();
    const [error, setError] = useState<boolean>(false);

    const search = async (e: Event, name: string) => {
        e.preventDefault();
        const response = await fetch(`/api/getPokemon/${name}`);
        const data = await response.json();
        if(data.error){
            setError(true);
        }
        else{
            setPokemons(data);
        }
    }

    return (
        <div class = "searchPokemon">
            <form method="GET" onSubmit={(e) => search(e, name)} class = "search-form">
                <h1> Buscar pokemon</h1>
                <div>
                    <input type="text" id="name" name="name" value = {name} placeholder="Nombre"
                    onInput={(e) => {setName(e.currentTarget.value)}}
                    onFocus={() => {setError(false)}}
                    />
                </div>
                <button type="submit">Buscar</button>
            </form>
            {pokemons && 
                pokemons.map((pokemon) => (
                    <li key={pokemon._id}>
                        <a class="container-pokemon" href={`/pokemon/${pokemon.name}`}>
                            <img src={pokemon.image} alt={pokemon.name} />
                            <h2>{pokemon.name}</h2>
                        </a>
                    </li>
                ))
            }
            {error && <p>El pokemon no existe</p>}
        </div>
    );
}

export default SearchPokemon;