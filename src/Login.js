import React, { Component } from 'react';


function Login(props) {
        return ( 
            <div className="Card">
                <h1>Login</h1>
                <form autoComplete="off" onSubmit={props.onSubmit}>
                  <input type="text" name="username" onChange={props.onChange} value={props.username} placeholder="Username"/>
                  <input type="password" name="password" onChange={props.onChange} placeholder="Password" value={props.password}/>
                  <button className="Button" type="submit">Login</button>
                </form>
                <button className="Link" href="google.com" onClick={props.toggle}>New here? Consider creating an account!</button>
            </div>
         );
}

export default Login;


