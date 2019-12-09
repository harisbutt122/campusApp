import React, { Component } from 'react'

class Companydata extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible:false,
            cname: [],
            age: [],
            uni: [],
            college: [],
            subjects: []

        };
    };

    handlechange = (e) => {
        this.setState({
            
            [e.target.name]: e.target.value,
          
        })
         
     
    }
    handlesubmit=(e)=>{
        e.preventDefault();
       
       this.setState({
           visible:true
       })

    }
    render() {
        return (
            <div>
                <div>
                    <div className="studentprofile">
                        <br />
                        <div className="stddiv">

                            <label><h2>company details</h2></label>
                            <form onSubmit={this.handlesubmit.bind(this)}>
                                <input type="text"
                                    name="name"
                                    placeholder="company name"
                                    value={this.state.name}
                                    onChange={this.handlechange.bind(this)} 
                                    required/>
                                <br />

                                <input
                                    type="text"
                                    name="age"
                                    placeholder="city"
                                    value={this.state.age}
                                    onChange={this.handlechange.bind(this)} 
                                    required/>
                                <br />

                                <input type="text"
                                    name="uni"
                                    placeholder="empty position"
                                    value={this.state.uni}
                                    onChange={this.handlechange.bind(this)}
                                    required />
                                <br />

                                <input type="text"
                                    name="college"
                                    placeholder="experienced"
                                    value={this.state.college}
                                    required
                                    onChange={this.handlechange.bind(this)} />
                                <br />

                                <input type="text"
                                    name="subjects"
                                    placeholder="established"
                                    value={this.state.subjects}
                                    required
                                    onChange={this.handlechange.bind(this)} />
                                <br />
                                <input type="submit" value="Login" />
                            </form>

                        </div>


                        <div>
                            {/* <br />
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
                            </Link> */}

                        </div>

                    </div>
                    {this.state.visible ? <div className="datashow">
                        <div className="datashowb">
                            <br />
                            <p className="p">company name: {this.state.name}</p>
                            <p className="p">city: {this.state.age}</p>
                            <p className="p">empty position: {this.state.uni}</p>
                            <p className="p">experienced: {this.state.college}</p>
                            <p className="p">established: {this.state.subjects}</p>
                            <br />
                        </div>
        </div> :null}  


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



export default Companydata
