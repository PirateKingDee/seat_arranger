import React, { Component } from 'react';
import DisplayStudents from '/imports/ui/components/Students/DisplayStudents.jsx';
export default class DisplayStudentsPage extends Component {

  render() {
    if(this.props.dataIsReady){
      return(
        <div>
          <h1>Display Students</h1>
          <DisplayStudents students={this.props.students} />
        </div>
      )
    }
    else{
      return (
        <h1>Loading</h1>
      );
    }
  }
}
