import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";


const AddForm: FunctionComponent = () => {
    const [name, setName] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [sound, setSound] = useState<string>("");
    const [creator, setCreator] = useState<string>("");

    const [error, setError] = useState<boolean>(false);

    let errorAux = false;

    const isComplete = () => {
        if(name === "" || image === "" || sound === "" || creator === ""){
            setError(true);
            errorAux = true;
        }
    }

    const addPokemon = async (e: Event, name: string, image: string, sound: string, creator: string) => {
        e.preventDefault();
        isComplete();
        if(!errorAux){
            const response = await fetch("/api/addPokemon", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name, image, sound, creator})
            });
            const data = await response.json();
            if(data.error){ 
                setError(true);
            }
            else{ //si no hay error mostrar mensaje de exito e ir a la lista de pokemones
                alert("Pokemon añadido con éxito");
                window.location.href = "/";
            }
        }
    }

    return (
        <div class = "addform">
            <form method="POST" onSubmit={(e) => addPokemon(e, name, image, sound, creator)}>
                <h1> Nuevo pokemon</h1>
                <div>
                    <input type="text" id="name" name="name" value = {name} placeholder="Nombre"
                    onInput={(e) => {setName(e.currentTarget.value)}}
                    onFocus={() => {setError(false)}}
                    />
                </div>

                <div>
                    <input type="text" id="image" name="image" value = {image} placeholder="Imagen"
                    onInput={(e) => {setImage(e.currentTarget.value)}}
                    onFocus={() => {setError(false)}}
                    />
                </div>

                <div>
                    <input type="text" id="sound" name="sound" value = {sound} placeholder="Sonido"
                    onInput={(e) => {setSound(e.currentTarget.value)}}
                    onFocus={() => {setError(false)}}
                    />
                </div>

                <div>
                    <input type="text" id="creator" name="creator" value = {creator} placeholder="Creador"
                    onInput={(e) => {setCreator(e.currentTarget.value)}}
                    onFocus={() => {setError(false)}}
                    />
                </div>

                <div>
                    <button type="submit" class = "button">Crear Pokemon</button>
                </div>
            
                {error && <span class = "error">Error al añadir el pokemon</span>}
            </form>
        </div>
    );
}

export default AddForm;