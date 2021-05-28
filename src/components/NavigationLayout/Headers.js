import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav">
                    <li class="active"><Link to="/">Home</Link></li>
                    <li class="active"><Link to="/about">About Us</Link></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><Link to="/SignUp"><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                </ul>
                </div>
            </div>
            </nav>

        </header>
    )
}

export default Header;