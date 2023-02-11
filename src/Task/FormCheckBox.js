import { useState } from "react";

function FormCheckBox(props) {
    const [isGoing, setIsGoing] = useState("");
    const [guest, setGuest] = useState("");

    function renderList(e)  {
        const target = e.target

        if(target.type=="checkbox") {
            setIsGoing(target.checkbox)
        } else {
            setGuest(target.value)
        }
    }

    return (
        <div>
            <form>
                <label>is going
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={isGoing}
                        onChange={renderList}
                    />
                </label>
                <p></p>
                <label>is guest
                    <input
                        name="guest"
                        type="number"
                        value={guest}
                        onChange={renderList}
                    />
                </label>
                <button type="submit" >button</button>
            </form>
        </div>
    )
}

export default FormCheckBox;