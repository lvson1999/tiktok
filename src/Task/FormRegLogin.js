import { useState } from "react"
import FormRegisterError from "./FormRegisterError"

function FormRegLogin(props) {
    let account = localStorage.getItem("data")
    if(account) {
        account = JSON.parse(account)
        // console.log(account.password)
    }

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})

    const handleInput = (e) => {
        const nameInput = e.target.name;
        const value = e.target.value;

        setInputs(state => ({...state, [nameInput]:value}))
    }

    function handleSubmit(e) {
        e.preventDefault();
        let errorsSubmit= {};
        let flag = true;
        if(inputs.email=="") {
            errorsSubmit.email = "Vui long nhap email";
            flag = false;
        }
        if(inputs.password=="") {
            errorsSubmit.password = "Vui long nhap password!";
            flag = false;
        }
        if(!flag) {
            setErrors(errorsSubmit);
        }else{
            if(inputs.email==account.email && inputs.password==account.password){
                alert("dang nhap thanh cong")
            }
        }

        

        // if(flag) {
        //     alert("dang nhap thanh cong")
        // }
    }

    return(
        <div>
            <FormRegisterError  errors={errors}/>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="email" onChange={handleInput} />
                <input type="password" name="password" placeholder="password" onChange={handleInput} />
                <button type="submit" >Login</button>
            </form>
        </div>
    )
}
export default FormRegLogin;