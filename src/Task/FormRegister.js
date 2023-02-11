import { useState } from "react"
import FormRegisterError from "./FormRegisterError";

function FormRegister(props) {

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        select: ""
    })

    const [file, setFile] = useState("");
    // const [select, setSelect] = useState("");

    const [errors, setErrors] = useState({})

    const handleInput = (e) => {
        const nameInput = e.target.name;
        const value = e.target.value;

        setInputs(state => ({...state, [nameInput]: value}))
    }

    // const handleSelect = (e) => {
    //     setSelect(e.target.value)
    // }

    function handleFiles(e) { 

        const file =  e.target.files;
        setFile(state => ({...state, file }))

    }
    function handleSubmit(e) {
        // console.log(file.file[0]["name"])
        e.preventDefault();
        let errorsSubmit={};
        let flag  =true;
        if(inputs.email == "") {
            errorsSubmit.email = "Vui long nhap email"
            flag = false;
        }
        if(inputs.password == "") {
            errorsSubmit.password = "Vui long nhap password"
            flag = false;
        }
        if(file=="") {
            errorsSubmit.file = "Vui long chon tep!"
            flag = false;
        } else {
            
            let duoiFile = ["png", "jpg", "jfif", "jpeg", "gif", "tiff", "PNG", "JPG"]
            if(file.file[0]['size'] > 1024 * 1024 ) {
                errorsSubmit.file = "Vui long chon tep nho hon 1mb"
            } else if(!duoiFile.includes(file.file[0]['name'])) {
                errorsSubmit.file = "Vui long chon file dung dinh dang !"
            }
        }
        
        if(inputs.select=="") {
            errorsSubmit.select = "Vui long chon option !"
            flag = false;
        }


        if(!flag) {
            setErrors(errorsSubmit);
        }
        
       else {
            localStorage.setItem("data", JSON.stringify(inputs));
            alert("dang ky thanh cong")

        }
        

    }
    
    
    function renderData() {
        const arr = [
            {
                "id": "",
                "name": "vui lòng chon",
            },
            {
                "id": 1,
                "name": "Male",
            },
            {
                "id": 2,
                "name": "Female",
            }
        ]
        if(arr.length>0) {
            return arr.map((value, key) => {
                return(
                    <option value={value.id}>{value.name}</option>
                )
            })
        }
    }

    

    

    return (
        <div>
            <FormRegisterError errors = {errors} />
            <form  enctype="multipart/form-data" onSubmit={handleSubmit}  >
                <input type="email" placeholder="Email" name="email" onChange={handleInput}  />
                <input type="password" placeholder="password" name="password" onChange={handleInput}  />
                <input type="file" name="file" onChange={handleFiles} />
                <select name="select" onChange={handleInput} >
                    {renderData()}
                </select>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default FormRegister;