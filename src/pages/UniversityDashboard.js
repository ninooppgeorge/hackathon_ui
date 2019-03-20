import React, { Component } from 'react';
import Axios from 'axios';
import config from '../common';

class UniversityDashboard extends Component {
    state={
        data:[]
    }
  componentDidMount(){
        Axios.get(config.local+'/student/all').then((data)=>{
            console.log(data.data);
            this.setState({
                data:data.data
            })
        }).catch((err)=>{
            console.log(err);
        })
  }
  gotoaddc(uid){
    console.log(uid)
    this.props.history.push({
        pathname: '/addcertificate',
        state: { uid: uid }
      })
  }
  render() {
    return (
      <div className="App">
        <h2>University Dashboard</h2>
        <div className="list">
          {
              this.state.data.map((dt,index)=>{
                  return (
                      <div key={index} onClick={this.gotoaddc.bind(this,dt.uid)}>
                          <span>{dt.name}</span>
                          <span>{dt.uid}</span>
                          <span>{dt.course}</span>
                      </div>
                  )
              })
          }
        </div>
      </div>
    );
  }
}

export default UniversityDashboard;
