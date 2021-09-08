import React from "react"
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      entered: false,
      fname: "",
      lname: "",
      dob: "",
      age:"",
      email:""
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  handleClick(events){
    this.setState({
      entered: true,
      fname: this._fname.value,
      lname: this._lname.value,
      dob: this._dob.value,
      age: this._age.value,
      email: this._email.value
    })
  }

  handleClear(event){
    this.setState({
      entered: false,
      fname:"",
      lname: "",
      dob:  "",
      age: "",
      email:""
    })
    this._fname.value=""
    this._lname.value=""
    this._dob.value=""
    this._age.value=""
    this._email.value=""
  }

  render(){
    const text = this.state.entered ? "Filled" : "Empty"
    return(
      <div>
        <h1>Personal Details Form</h1>
        <hr/>
        <h2>Enter your first name:</h2>
        <input type="text" ref={value => this._fname=value} />
        <h2>Enter your last name:</h2>
        <input type="text" ref={value => this._lname=value} />
        <h2>Enter your Birth Date:</h2>
        <input type="date" ref={value => this._dob=value} />
        <h2>Enter your age:</h2>
        <input type="text" ref={value => this._age=value} />
        <h2>Enter your email id:</h2>
        <input type="text" ref={value => this._email=value} />
        <br/>
        <button onClick={this.handleClick}>Submit</button>
        <br/>
        <br/>
        <button onClick={this.handleClear}>Clear</button>
        <hr/>
        <h1>Form Status: {text}</h1>
        <h2>Name: {this.state.fname} {this.state.lname}</h2>
        <h2>Date of Birth: {this.state.dob}</h2>
        <h2>Age: {this.state.age}</h2>
        <h2>Email Id: {this.state.email}</h2>
      </div>
    )
  }
}

export default App;
