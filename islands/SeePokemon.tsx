import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { PageProps } from "$fresh/server.ts";
import { Pokemon } from "../types.ts";

type SeePokemonProps = {
    pokemon: Pokemon;
}

const SeePokemon: FunctionComponent<SeePokemonProps> = (props) => {
    const { pokemon } = props;
    const [showModal, setModal] = useState(false);
    const [creator, setCreator] = useState("");
    const [error, setError] = useState(false);

    const handleDelete = async () => {
        try{
            if(!creator){
                setError(true);
                return;
            }

            const response = await fetch(`/api/deletePokemon/${pokemon.name}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: pokemon.name,
                    creator: creator
                })
            });

            if(response.status === 200){
                alert("Pokemon eliminado con éxito");
                window.location.href = "/";
            }else{
                setError(true);
            }
        }catch(e){
            alert("Error al borrar el pokemon");
        }
    }

    //comprobacion de pokemon porque al ser client side salta error cuando se rerenderiza cuando se elimina el pokemon
    return (
        {pokemon} && <div class = "pokemon-individual">
            <h1>{pokemon.name}</h1>
            <img src={pokemon.image} alt={pokemon.name} />
            <audio controls>
                <source src={pokemon.sound} type="audio/mpeg" class = "audio-player"/>
            </audio>
            <button onClick={() => setModal(true)}>Eliminar pokemon</button>

            {showModal && (
                <div class = "modal">
                    <div class = "modal-eliminar">
                        <h2>Eliminar pokemon</h2>
                        <p>Para eliminar el pokemon, introduce el nombre del creador</p>
                        <input type="text" value={creator} onInput={(e) => setCreator(e.currentTarget.value)} />
                        <button onClick={handleDelete}>Eliminar</button>
                        <button onClick={() => setModal(false)}>Cancelar</button>
                        {error && <p>Nombre del creador incorrecto</p>}
                    </div>
                </div>
            )}
        </div>
    );
}

export default SeePokemon;