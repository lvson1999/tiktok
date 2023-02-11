import { useState } from "react";

function Toogle() {
    const [isToogle, setIsToogle] = useState(true);

    function handleClick() {
        setIsToogle(!isToogle)
    }
    return (
        <div>
            <button onClick={handleClick}> 
                {isToogle ? "ON" : "OFF"}
            </button>
        </div>
    )
}

export default Toogle;