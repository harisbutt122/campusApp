import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../config/fire";
import * as firebase from "firebase";
// import Studentprofile from '../components/Studentprofile';





firebase
.database()
.ref("studentssignup/")
.on("value", snapshot => {
  snapshot.forEach(function (childSnapshot) {
  
    var childData = childSnapshot.val();


  });

});




export default class Student extends Component {
  constructor(props) {
    super(props);

    console.log("hellllll", this.props.email);
    




    this.state = {
      lemail: "",
      lpassword: "",

    };
  }

 


  loginCheck = (e) => {


  

    e.preventDefault();





  };




  render() {

    return (
      <div>


        <div className="cmd">
          <label>
            <h2>student log</h2>
          </label>
          {/* //pass variables of email and password and update the value of those variables when the value in textfield changes*/}
          {/* <form onSubmit={(e) => this.loginCheck(e, emailchk, passwordchk)}> */}
          <form onSubmit={this.loginCheck}>

            <input
              type="text"
              name="username"
              placeholder="email"
              required
              onChange={e => this.setState({ lemail: e.target.value })}
            />

            <br />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={e => this.setState({ lpassword: e.target.value })}
            />

            <br />

            <input type="submit" value="Login"></input>
          </form>
        </div>

        {/*just for testing  */}
        <div>
          <Link to="/student/studentprofile" className="sbtn">
            <button className="sbtn">student profile</button>
          </Link>
        </div>
      </div>
    );
  }
}
