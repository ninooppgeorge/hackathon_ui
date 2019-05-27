import React, { Component } from 'react';
import Axios from 'axios';
import config from './../common';


class UniversityLogin extends Component {
    componentDidMount(){
    }
    login(){
        console.log(this.state)
        Axios.post(config.local+"/university/login",{
            // Axios.post(config.serverurl+"/student/login",{
            username: this.state.username,
            password: this.state.password
        }).then((data)=>{
            this.props.history.push('/universitydashboard')
            console.log(data)
        }).catch((err)=>{
        console.log(err)

        })
    }
  render() {
    return (
      <div className="App">
        <h2 className="headh2">University Login</h2>
        <input type="text" placeholder="username" onChange={(e)=>this.setState({username:e.target.value})}/>
        <input type="password" placeholder="password" onChange={(e)=>this.setState({password:e.target.value})}/>
        <a onClick={this.login.bind(this)} className="button">Login</a>
      </div>
    );
  }
}

export default UniversityLogin;
