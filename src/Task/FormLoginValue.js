import { useState } from "react";
import FormErrors from "./FormErrors";

function FormLoginValue (props) {
    const [inputs, setInputs] = useState({
        email: "",
        pass: ""
    })

    const [errors, setErrors] = useState({})



    const handleInput = (e) => {
        const nameInput = e.target.name;
        const value = e.target.value;

        setInputs(state => ({...state, [nameInput]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault();
        let errorsSubmit= {};
        let flag = true;

        if(inputs.email == "") {
            errorsSubmit.email = "Vui long long nhap mail"
            flag = false;
        }
        if(inputs.pass =="") {
            errorsSubmit.pass = "Vui long nhap password"
            flag = false;
        }

        if(!flag) {
            setErrors(errorsSubmit);
        }
    }

    // function renderError() {
    //     if(Object.keys(errors).length> 0 ) {
    //         return Object.keys(errors).map((key, index) => {
    //             return(
    //                 <li key={index}> {errors[key]} </li>
    //             )
    //         })
    //     }
    // }



    return (
        <div>
            <FormErrors errors= {errors} />
            <form onSubmit={handleSubmit} >
                <input type="email" placeholder="Email" name="email"  onChange={handleInput} />
                <input type="password" name="pass" onChange={handleInput} />
                <button type="submit" className="btn btn-default">Login</button>
            </form>
        </div>
    )
}

export default FormLoginValue;