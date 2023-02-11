import axios from "axios";
import { useEffect, useState } from "react";
import TaskSecond from "./bt2";

function ValueA(props) {

    

    const [data, setData] = useState("")

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=> {
            setData(res.data[3])
        })
        .catch(error => console.log(error))
    }, [])
    
    return (
        <>
        <TaskSecond data = {data} />
        <h4>
            {/* <TaskSecond data = {data}/> */}
            DUOI DAY LA BT 1
        </h4>
        </>
    )
}

export default ValueA;