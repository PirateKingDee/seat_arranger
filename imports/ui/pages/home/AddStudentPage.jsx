import React, { Component } from 'react';
import ContactForm from '/imports/ui/components/AddStudent/ContactForm.jsx';
export default class AddStudentPage extends Component {

  render() {
    return (
      <div className="container container-fluid">
          <ContactForm />
      </div>

    );
  }
}
