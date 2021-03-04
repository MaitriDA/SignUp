import React from 'react';
import fire from './config/fire';

class Home extends React.Component{
    logout(){
        fire.auth().signOut();
    }
    render(){
        return(
           <div>
           <h1>Home Page</h1>
           <h2>You are logged in </h2>
           <button onClick={this.logout}>Log Out</button>
           </div> 
        )
    }
}

export default Home;