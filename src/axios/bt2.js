import axios from "axios";
import { useEffect, useState } from "react";
import ValueA from "./bienbt2";

function TaskSecond(props) {

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/users", data)
    //     .then(res => {
    //         setData(res.data[1])
    //     })
    //     .catch(error => console.log(error))
    // }, [])
    
    
    function renderData() {
        let {data} = props
        if(Object.keys(data).length> 0) {
            return (
                <li>
                    <p>-ID: {data.id}</p>
                    <p>-name: {data.name}</p>
                    <p>-username: {data.username}</p>
                    <p>-email: {data.email}</p>
                    <p>-address:</p>
                    <p>+street: {data.address.street}</p>
                    <p>+suite: {data.address.suite}</p>
                    <p>-phone: {data.phone}</p>
                    <p>-website: {data.website}</p>
                    <p>-company:</p>
                    <p>+name: {data.company.name}</p>
                    <p>+catchPhrase: {data.company.catchPhrase}</p>
                </li>
            )
        }
    }
    return (
        <div>
            <ul>
                {renderData()}
            </ul>
        </div>
    )
}

export default TaskSecond;