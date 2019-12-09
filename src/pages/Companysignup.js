import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "../config/fire"
import * as firebase from "firebase"

export default class Companysignup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            email:"",
            password:""
        };
    };



    handlesubmit = (e) => {
        e.preventDefault()
        firebase.database()
            .ref("companysignup")
            .push({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                password: this.state.password
            })
    }


    render() {
        return (

            <div>
                <div className="signupa">
                    <div className="signupb">

                        <label><h2>Company signup</h2></label>
                        <form onSubmit={this.handlesubmit}>
                            <input type="text" className="fname" name="username" placeholder="first name" required onChange={e => this.setState({ firstname: e.target.value })} />
                            <input type="text" className="fname" name="username" placeholder="last name" required onChange={e => this.setState({ lastname: e.target.value })} /><br /><br />
                            <input type="text" className="email" name="username" placeholder="email" required onChange={e => this.setState({ email: e.target.value })} /><br /><br />
                            <input type="password" className="email" name="password" placeholder="Password" onChange={e => this.setState({ password: e.target.value })} /><br /><br />
                            <input type="submit" className="sssubmit" value="Login"></input>
                        </form>
                        <br />
                        <p>Already have an account <Link to="/company/companylogin" className="sslogin">login here</Link></p>
                        <br />
                        <br />
                    </div>
                </div>


            </div>


        )
    }
}
