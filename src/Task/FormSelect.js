import { useState } from "react";

function FormSelect(props) {
    const [getInput, setInput] = useState("")
    const [errE, setErrE] = useState("")


    function handleInput(e) {
        setInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();


        if(getInput=="") {
            setErrE("nhap input")
        } else {
            setErrE("")
        }
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select value={getInput} onChange={handleInput}>
                    <option value="" >vui long chon</option>
                    <option value="1" >man</option>
                    <option value="2">woman</option>
                    <option value="3" >lgbt</option>
                </select>
                <p>{errE}</p>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default FormSelect;