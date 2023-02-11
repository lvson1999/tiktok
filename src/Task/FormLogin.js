import { useState } from "react";

function FormLogin(props) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");


    const [errEmail, setErrEmail] = useState("");
    const [errPass, setErrPass] = useState("");

    const handleEmail =  (e) => {
        setEmail(e.target.value);
    }

    const handlePass =  (e) => {
        setPass(e.target.value);
    }

    function handleSubmit (e) {
        e.preventDefault();

        if(email== "") {
            setErrEmail("Vui long nhap email")
        }
        if(pass=="") {
            setErrPass("Vui long nhap pass")
        } if(email!="" && pass!="") {
            alert("ok")
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type= "email" value={email} onChange={handleEmail} />
            <p>{errEmail}</p>
            <input type="password" value={pass} onChange={handlePass} />
            <p>{errPass}</p>
            <button type="submit">submit</button>
        </form>
    )
}
export default FormLogin;