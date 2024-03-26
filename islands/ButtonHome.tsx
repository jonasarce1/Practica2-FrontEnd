

const ButtonHome = () => {
    return (
        <button onClick={() => window.location.href = "/"} className="button-home font-pokemon">
            Home
        </button>
    );
}

export default ButtonHome;