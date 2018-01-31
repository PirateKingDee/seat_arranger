import React, { Component } from 'react';
export default class ContactForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      address:{
        street: '',
        city: '',
        state: '',
        zip: ''
      },
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.addStudent = this.addStudent.bind(this);
  }

  handleInput(e, name){
    if(!e.target.value){
      this.setState({[name]:''})
      return
    }
    this.setState({[name]: e.target.value});
  }

  handleAddress(e, name){
    let address = this.state.address;
    if(!e.target.value){
      address[name] = '';
      this.setState({address:address})
      return
    }
    address[name] = e.target.value;
    this.setState({address: address});
  }

  clearInput(){
    this.setState({
      firstName: '',
      lastName: '',
      phone: '',
      address:{
        street: '',
        city: '',
        state: '',
        zip: ''
      }
    })
  }

  addStudent(){
    let student = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      phone: this.state.phone,
      address: this.state.address
    }

    console.log(student);
    let self = this;
    Meteor.call("addStudent", student, function(err, result){
      if(result){
        console.log('success ', result);
        this.clearInput();
      }
      else{
        console.log(err);
      }
    })
  }

  render() {
    return (
      <div>
        <div className="form-address" id="address">
{/*
          <div className="flex-container c-1column" id="locationField">
            <label>Search for your address</label>
            <input className="flex-item" id="autocomplete" placeholder="address, zip or city" onFocus="geolocate()" type="text"></input>
          </div> */}

          <div className="flex-container">
            <div className="flex-item c-2column">
              <label>First Name</label>
              <input id="first_name" value={this.state.firstName} onChange={(e) => {this.handleInput(e, "firstName")}}></input>
            </div>
            <div className="flex-item c-2column">
              <label>Last Name</label>
              <input id="last_name" value={this.state.lastName} onChange={(e) => {this.handleInput(e, "lastName")}}></input>
            </div>
          </div>

          <div className="flex-container">
            <label>Street address</label>
            <div className="flex-item c-2column">
              <input id="street" value={this.state.address.street} onChange={(e) => {this.handleAddress(e, "street")}}></input>
            </div>
          </div>

          <div className="flex-container">
            <label>City</label>
            <input className="flex-item c-1column" id="locality" value={this.state.address.city} onChange={(e) => {this.handleAddress(e, "city")}}></input>
          </div>

          <div className="flex-container">
            <div className="flex-item c-2column">
              <label>State</label>
              <input id="state" value={this.state.address.state} onChange={(e) => {this.handleAddress(e, "state")}}></input>
            </div>
            <div className="flex-item c-2column">
              <label>Zip code</label>
              <input id="postal_code" value={this.state.address.zipcode} onChange={(e) => {this.handleAddress(e, "zipcode")}}></input>
            </div>
          </div>

          <div className="flex-container">
            <label>Phone #</label>
            <input className="flex-item c-1column" id="phone" value={this.state.phone} onChange={(e) => {this.handleInput(e, "phone")}}></input>
          </div>

          <button onClick={this.addStudent}>Add</button>

        </div>
      </div>
    );
  }
}
