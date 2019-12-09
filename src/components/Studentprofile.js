import React, { Component } from 'react'




// import { Route } from "react-router-dom"
// import Imga from "../images/1.jpg"
import { Link } from "react-router-dom"




export default class Studentpprofile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: false,
            name: "",
            namearr: [],
            age: "",
            agearr: [],
            uni: "",
            uniarr: [],
            college: "",
            collegearr: [],
            subjects: "",
            subjectsarr: [],
            isinedit: false

        };
    };

    handlechange = (e) => {

        this.setState({
            [e.target.name]: e.target.value,


        })


    }
    handlesubmit = (e) => {
        var sname = this.state.name;
        var nameins = this.state.namearr;
        nameins.push(sname);

        var sage = this.state.age;
        var ageins = this.state.agearr;
        ageins.push(sage);

        var suni = this.state.uni;
        var uniins = this.state.uniarr;
        uniins.push(suni);

        var scollege = this.state.college;
        var collegeins = this.state.collegearr;
        collegeins.push(scollege);

        var ssubjects = this.state.subjects;
        var subjectsins = this.state.subjectsarr;
        subjectsins.push(ssubjects);

        this.state.name = "";
        this.state.age = "";
        this.state.uni = "";
        this.state.college = "";
        this.state.subjects = "";
        e.preventDefault();

        this.setState({
            visible: true,
            namearr: nameins,
            agearr: ageins,
            uniarr: uniins,
            collegearr: collegeins,
            subjectsarr: subjectsins
        })

    }

    // edit(event) {
    //     let d = event.target.id
    //     let nameins = this.state.namearr
    //     nameins.splice(d, 1)
    //     this.setState({
    //         namearr: nameins
    //     })
    // }

    render() {



        let namelist = this.state.namearr.map((e, i) =>
            <li key={i} >name : {e}
                <span className="cross" onClick={this.edit} id={i}>edit</span>
            </li>
        )

        let agelist = this.state.agearr.map((e, i) =>
            <li key={i} >age : {e}
<span className="cross">edit</span>
            </li>
        )

        let unilist = this.state.uniarr.map((e, i) =>
            <li key={i} >uni : {e}
                <span className="cross">edit</span>
            </li>
        )

        let collegelist = this.state.collegearr.map((e, i) =>
            <li key={i} >college : {e}
                <span className="cross">edit</span>
            </li>
        )

        let subjectslist = this.state.subjectsarr.map((e, i) =>
            <li key={i}>subjects : {e}
                <span className="cross">edit</span>
            </li>
        )


        return (
            <div>
                <div>
                    <div className="studentprofile">
                        <br />
                        <div className="stddiv">

                            <label><h2>students details</h2></label>
                            <form onSubmit={this.handlesubmit.bind(this)}>

                                <input type="text"
                                    name="name"
                                    placeholder="fullname"
                                    value={this.state.name}
                                    onChange={this.handlechange.bind(this)}
                                    required />
                                <br />

                                <input
                                    type="text"
                                    name="age"
                                    required
                                    placeholder="age"
                                    value={this.state.age}
                                    onChange={this.handlechange.bind(this)} />
                                <br />

                                <input type="text"
                                    name="uni"
                                    placeholder="university"
                                    value={this.state.uni}
                                    required
                                    onChange={this.handlechange.bind(this)} />
                                <br />

                                <input type="text"
                                    name="college"
                                    placeholder="college"
                                    value={this.state.college}
                                    required
                                    onChange={this.handlechange.bind(this)} />
                                <br />

                                <input type="text"
                                    name="subjects"
                                    placeholder="subjects"
                                    required
                                    value={this.state.subjects}
                                    onChange={this.handlechange.bind(this)} />
                                <br />
                                <input type="submit" value="Login" />
                            </form>

                        </div>


                        <div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <Link to="/company/allcompanydata">

                                <button className="click">companies data</button>
                            </Link>
                            <br />
                            <br />
                            <Link to="/student/allstudentdata">

                                <button className="click">student data</button>
                            </Link>

                        </div>

                    </div>
                    {this.state.visible ? <div className="datashow">

                        <div className="datashowb">
                            <br />
                            <ul className="d">
                                {namelist}<br />
                                {agelist}<br />
                                {unilist}<br />
                                {collegelist}<br />
                                {subjectslist}
                            </ul>
                            <br />
                        </div>
                    </div> : null}


                </div>
                {/* <div className="datashow">
                   <p>{this.state.name}</p>
                    <p>{this.state.age}</p>
                    <p>{this.state.uni}</p>
                    <p>{this.state.college}</p>
                    <p>{this.state.subjects}</p>
                   </div>  */}


            </div>
        )
    }
}
