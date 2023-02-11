import { useState } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function LoginClick() {
    const [isToogle, setIsToogle] = useState(false)

    function hanldeLoginClick() {
        setIsToogle(!isToogle)
    }

    const hanldeLogoutClick = () => {
        setIsToogle(!isToogle)
    }

    function renderButton() {
        let button;
        if(isToogle) {
            button = <LogoutButton onClick={hanldeLogoutClick}/>
        } else{
            button = <LoginButton onClick={hanldeLoginClick}  />
        }
        return button
    }

    return(
        <div>
            {renderButton()}
        </div>
    )

  }

  export default LoginClick;