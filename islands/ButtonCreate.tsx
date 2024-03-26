

const ButtonCreate = () => {
    return (
        <button className="button-create font-pokemon" onClick={() => window.location.href = "/create"}>
            Crear Pokemon
        </button>
    );
}

export default ButtonCreate;