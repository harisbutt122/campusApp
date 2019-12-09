import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "../config/fire"
import * as firebase from "firebase"

export default class Student extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        };
    };



    handlesubmit = (e) => {
        e.preventDefault()
        firebase.database()
            .ref("adminlogin")
            .push({
                email: this.state.email,
                password: this.state.password
            })
    }


    render() {
        return (

            <div>
                {/* <img src={Imga} width="100%" height="50%"/> */}

                <div className="cmd">

                    <label><h2>admin login</h2></label>
                    <form onSubmit={this.handlesubmit}>
                        <input type="text" name="username" placeholder="Username" required onChange={e => this.setState({ email: e.target.value })} /><br />

                        <input type="password" name="password" placeholder="Password" required onChange={e => this.setState({ password: e.target.value })} /><br />

                        <input type="submit" value="Login"></input>
                    </form>

                </div>



            </div>

        )
    }
}
