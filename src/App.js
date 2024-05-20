import React, { Fragment } from 'react'
import {Routes,Route} from "react-router-dom";

import EmployeeList from './components/EmployeeList/EmployeeList';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Fragment>
      <Header/>
      <Routes>
      <Route path="/" element={<EmployeeList />} />
      <Route path="/employees" element={<EmployeeList />} />
      </Routes>
       <Footer/>
    </Fragment>
  );
}

export default App;
