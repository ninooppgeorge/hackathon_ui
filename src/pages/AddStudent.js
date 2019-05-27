import React, { Component } from 'react';
import Axios from 'axios';
import config from '../common';

class AddStudent extends Component {
    addstudent(){
        Axios.post(config.local+"/student/create",{
            uid: this.state.uid,
            name: this.state.name,
            course: this.state.course,
            higherEducationBoard: this.state.higherEducationBoard
        }).then((data)=>{
            // this.props.history.push('/universitydashboard')
            alert('success');
            console.log(data)
        }).catch((err)=>{
        console.log(err)

        })
    }
  render() {
    return (
      <div className="App">
        <h2 className="headh2">Add Student</h2>

        <input type="text" placeholder="uid" onChange={(e)=>this.setState({uid:e.target.value})}/>
        <input type="text" placeholder="name" onChange={(e)=>this.setState({name:e.target.value})}/>
        <input type="text" placeholder="course" onChange={(e)=>this.setState({course:e.target.value})}/>
        <input type="text" placeholder="higherEducationBoard" onChange={(e)=>this.setState({higherEducationBoard:e.target.value})}/>
        <a onClick={this.addstudent.bind(this)} className="button">Add</a>
      </div>
    );
  }
}

export default AddStudent;
