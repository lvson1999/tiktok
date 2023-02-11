import { useState } from "react";

function FormTetxArea(props) {
    const [getInput, setInput] = useState("");
    const [errE, setErrE] = useState("");

    function handleInput(e) {
        setInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();


        if(getInput=="") {
            setErrE("Vui long nhap")
        }
    }






    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea onChange={handleInput}>{getInput}</textarea>
                <p>{errE}</p>
                <button type="submit">click</button>
            </form>

        </div>
    )
}

export default FormTetxArea;