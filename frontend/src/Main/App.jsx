import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter } from 'react-router-dom'

import Logo from '../Componetes/templates/Logo'
import Nav from '../Componetes/templates/Nav'
import Footer from '../Componetes/templates/Footer'
import Routes from './Routes'

export default props =>
    <BrowserRouter>
        <div className='app'>
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
   </BrowserRouter> 