import React, { Component } from 'react';
import Axios from 'axios';
import config from '../common';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class AddCertificate extends Component {
    state = {
        data:[]
    }
    componentDidMount(){
        var uid = this.props.history.location.state.uid;
        Axios.get(config.local+'/certificate/list?uid='+uid).then((data)=>{
            console.log(data.data);
            this.setState({
                data: data.data
            })
            // alert('success');
        }).catch((err)=>{
            console.log(err);

      })
    }
    addc(){
        var uid = this.props.history.location.state.uid;
        console.log(this.state)
        var formData = new FormData();
        var imagefile = document.querySelector('#file');
        formData.append("uid", uid);
        formData.append("name", this.state.name);
        formData.append("file", imagefile.files[0]);
        console.log(formData)
        console.log(imagefile)
        console.log(imagefile.files)
        Axios.post(config.local+"/certificate/create",formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        }).then((data)=>{
            // this.props.history.push('/universitydashboard')
            console.log(data)
        }).catch((err)=>{
        console.log(err)

        })
    }
  render() {
    return (
      <div className="App">
        <h2 className="headh2">Certificates</h2>
        <br/>
        <br/>
      <div className="list">
        {this.state.data.map((dt,index)=>{
            return(
                <div key={index} className="listinner">
                    <span>{dt.name} </span>
                    <span><a target="_blank" href={config.serverurl+"/ipfs/get?id="+dt.ipfsid}>{dt.ipfsid}</a></span>
                </div>
            )
        })}
        </div>
        <br/>
        <br/>
        <h2>Add Certificate</h2>

        <input type="text" placeholder="name" onChange={(e)=>this.setState({name:e.target.value})}/>
        <input type="file" placeholder="course" id="file" onChange={(e)=>this.setState({file:e.target.value})}/>
        <a onClick={this.addc.bind(this)} className="button">Add</a>
      </div>
    );
  }
}

export default AddCertificate;
