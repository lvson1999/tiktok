import axios from "axios";
import { useEffect, useState } from "react";

function Task(props) {
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/users", data)
    //     .then(res => {
    //         setData(res.data)
    //     })
    //     .catch(error => console.log(error))
    // }, [])


    function renderData() {
        let {data} = props
        if(data.length > 0) {
            return data.map((value, key) => {
                return (
                    <li key={key}>
                        <p>- ID: {value.id}</p>
                        <p>- name: {value.name}</p>
                        <p>- address:</p>
                        <p>+ street: {value.address.street}</p>
                        <p>- phone: {value.phone}</p>
                        <p>- company: </p>
                        <p>+ name: {value.company.name}</p>
                    </li>
                )
            })
        }
    }

    return (
        <ul>
            {renderData()}
        </ul>
    )
}

export default Task;