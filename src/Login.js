import React from 'react';
import fire from './config/fire';

class Login extends React.Component{
    login(){
        const email=document.querySelector("#email").value;
        const password=document.querySelector("#password").value;
        fire.auth().signInWithEmailAndPassword(email,password)
        .then((u)=>{
            console.log("Successfully Logged In");
        })
        .catch((err)=>{
            console.lof("Error:"+err.toString());
        })
    }
    signup(){
        const email=document.querySelector("#email").value;
        const password=document.querySelector("#password").value;
        fire.auth().createUserWithEmailAndPassword(email,password)
        .then((u)=>{
            console.log("Successfully Signed Up");
        })
        .catch((err)=>{
            console.lof("Error:"+err.toString());
        })
    }
    render(){
        return(
            <div>
                <h1>LOGIN PAGE</h1>
                <div>
                    <div>Email</div>
                    <input 
                    id="email" 
                    placeholder="Enter your Email"
                    type="text"
                    />
                </div>
                <div>
                    <div>Password</div>
                    <input 
                    id="password" 
                    placeholder="Enter your Password"
                    type="text"
                    />
                </div>
                <button onClick={this.login}>Login</button>
                <button onClick={this.signup}>Sign Up</button>
            </div>
        )
    }
}

export default Login;