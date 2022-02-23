import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "./modules/home/Home";
import Results from "./modules/results/Results";
import { useSelector } from 'react-redux';

function App() {
  const {user} = useSelector(state => ({
    user: state.user,
  }));

  return (
    <Router>
        <Routes>
          <Route path="/"  element={<Home />}/>
          <Route path='/searchResults' element={user == null ? <Navigate replace to='/' /> : <Results />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
