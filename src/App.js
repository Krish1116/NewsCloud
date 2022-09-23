import logo from './logo.svg';
import './App.css';

//class base component - by default function base component hota h
//Methods ka menagment easy rehta h 
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
        
      </div>
    )
  }
}

