import axios from "axios";
import { useEffect, useState } from "react";
import Task from "./bt1";

function ValueTask1(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=> {
            setData(res.data)
        })
        .catch(error => console.log(error))
    }, [])

    return (
        <>
        <Task data = {data} />
        </>
    )
}

export default ValueTask1;