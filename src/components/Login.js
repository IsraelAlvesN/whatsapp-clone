import React from "react";
import './Login.css'

export default () => {
    const handleFacebookLogin = async ({onReceive}) => {
        let result = await Api.fbPopup()
        if(result){
            onReceive(result.user)
        }else{
            alert('Erro')
        }
    }

    return(
        <div className="login">
            <button onClick={handleFacebookLogin}>Logar com Facebook</button>
        </div>
    )
}