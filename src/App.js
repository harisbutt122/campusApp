import React from 'react';
import './App.css';

import Student from "./pages/Student"
import Home from "./pages/Home"
import Company from "./pages/Company"
import Admin from "./pages/Admin"
import Error from "./pages/Error"
import Navbar from "./components/Navbar"

import Allcompanydata from './components/Allcompanydata';
import Studentprofile from './components/Studentprofile';
import Companydata from './components/Companydata';
import { Route, Switch } from "react-router-dom"
import Allstudentsdata from './components/Allstudentsdata';
import Studentsignup from './pages/Studentsignup';
import Companysignup from './pages/Companysignup';
import Adminsignup from './pages/Adminsignup';


function App() {



  
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin/" component={Adminsignup} />
        <Route exact path="/company" component={Companysignup} />
        <Route exact path="/student/" component={Studentsignup} />

        <Route exact path="/student/studentlogin" component={Student} />
        <Route exact path="/company/companylogin" component={Company} />
        <Route exact path="/admin/adminlogin" component={Admin} />
        {/* <Route exact path="/student/studentlogin" component={Student} />
        <Route exact path="/student/studentlogin" component={Student} /> */}

        <Route exact path="/company/allcompanydata" component={Allcompanydata} />
        <Route exact path="/company/allcompanydata" component={Student} />
        <Route exact path="/student/allstudentdata" component={Allstudentsdata}  />
        <Route exact path="/student/studentprofile" component={Studentprofile}  />
        <Route exact path="/company/companyprofile" component={Companydata}  />
        <Route component={Error} />
      </Switch>
     
    </>
  );
}

export default App;
