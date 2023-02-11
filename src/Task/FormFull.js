import { useState } from "react";

function FormFull (props) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [textarea, setTextArea] = useState("");
    const [checkbox, setCheckBox] = useState("");


    const [errEmail, setErrEmail] = useState("");
    const [errPass, setErrPass] = useState("");
    const [errTextArea, setErrTextArea] = useState("");
    const [errCheckBox, setErrCheckBox] = useState("");


    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePass = (e) => {
        setPass(e.target.value);
    }
    const handleTextArea = (e) => {
        setTextArea(e.target.value);
    }
    const handleCheckBox = (e) => {
        setCheckBox(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(email=="") {
            setErrEmail("Vui long nhap email!")
        } 
        if(pass=="") {
            setErrPass("Vui long nhap pass!")
        }
        if(textarea=="") {
            setErrTextArea("Vui long nhap noi dung!")
        }
        if(checkbox=="") {
            setErrCheckBox("Vui long checked!")
        }
        if(email!="" && pass!="" && textarea!="" && checkbox!="") {
            alert("Ban da dang nhap thanh cong")
        }
    }



    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={handleEmail} />
            <p>{errEmail}</p>
            <input type="password" value={pass} onChange={handlePass} />
            <p>{errPass}</p>
            <textarea onChange={handleTextArea}>{textarea}</textarea>
            <p>{errTextArea}</p>
            <select value={checkbox} onChange={handleCheckBox} >
                <option value="" >Vui long chon</option>
                <option value="1" >man</option>
                <option value="2" >woman</option>
                <option value="3" >lgbt</option>
            </select>
            <p>{errCheckBox}</p>
            <button type="submit">Login</button>
        </form>
    )
}

export default FormFull;