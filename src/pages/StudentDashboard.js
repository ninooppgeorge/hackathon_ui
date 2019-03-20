import React, { Component } from 'react';
import Axios from 'axios';
import config from '../common';

class StudentDashboard extends Component {
    state={
        uid: '',
        name: '',
        course: '',
    }
  componentDidMount(){
    let iid = this.props.location.search;
    iid = iid.replace("?uid=","");
    console.log(iid)
      Axios.get(config.local+'/student/list?uid='+iid).then((data)=>{
            console.log(data.data);
            this.setState({
                uid:data.data.uid,
                name:data.data.name,
                course:data.data.course
            })
        }).catch((err)=>{
            console.log(err);

      })
  }
  render() {
    return (
      <div className="App">
        Student dashboard
        <br/>
        uid: {this.state.uid}
        <br/>
        name: {this.state.name}
        <br/>
        course: {this.state.course}
      </div>
    );
  }
}

export default StudentDashboard;
