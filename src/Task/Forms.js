import { useState } from "react";

function Forms(props) {

    const [getInput, setInput] = useState("");
    const [errE, setErrE] = useState("");


    function handleInput(e) {
        // e.target.value : lay value nhap vao
        // e.target.ID => lay Id

        setInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();

        if(getInput == "") {
            setErrE("nhap Input")
        }
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={getInput} onChange={handleInput} />
                <p>{errE}</p>
                <button type="submit" >click</button>
                
            </form>
        </div>
    )
}

export default Forms;