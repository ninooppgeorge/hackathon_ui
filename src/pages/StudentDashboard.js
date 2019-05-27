import React, { Component } from 'react';
import Axios from 'axios';
import config from '../common';

class StudentDashboard extends Component {
    state={
        uid: '',
        name: '',
        course: '',
        datad: []
    }
  componentDidMount(){
    let iid = this.props.location.search;
    iid = iid.replace("?uid=","");
    console.log(iid)
      Axios.get(config.local+'/student/list?uid='+iid).then((data)=>{
            console.log(data.data);
            Axios.get(config.local+'/certificate/list?uid='+iid).then((datad)=>{
              this.setState({
                uid:data.data.uid,
                name:data.data.name,
                course:data.data.course,
                datad: datad.data
              })
              }).catch((err)=>{
                  console.log(err);
            })
            
        }).catch((err)=>{
            console.log(err);

      })
  }
  render() {
    return (
      <div className="App">
        <h2 className="headh2">Student dashboard</h2>
        <br/>

        <p>
          {this.state.uid} &nbsp;&nbsp;&nbsp;<strong>Name:</strong> {this.state.name} &nbsp;&nbsp;&nbsp;<strong>course:</strong> {this.state.course}
        </p>
        <br/>
        <div className="list">
          {this.state.datad.map((dt,index)=>{
              return(
                  <div key={index} className="listinner">
                      <span>{dt.name} </span>
                      <span><a target="_blank" href={config.serverurl+"/ipfs/get?id="+dt.ipfsid}>{dt.ipfsid}</a></span>
                  </div>
              )
          })}
        </div>
      </div>
    );
  }
}

export default StudentDashboard;
