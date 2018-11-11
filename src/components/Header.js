import React, { Component } from 'react';
import { Link } from "@reach/router";
import logo from "../logo.png";

const logoStyle = {
    maxHeight: '100px'
  };

class Header extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg  navbar-custom ">
                <div className="container">
                   
                    <div className="col-md-3">
                        
                        <Link to="/" className="logo">
                            <span>
                                <img src={logo} style={logoStyle} alt="Know your candidates" />
                            </span>
                        </Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="mdi mdi-menu"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
                            <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        
                            </li>   
                            
                            <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        
                            </li>  

                            <li className="nav-item">
                            <Link to="/compare" className="nav-link">Compare candidates</Link>
                               
                            </li>                    
                                                  
                        </ul>                    
                    </div>
                </div>
            </nav>
        );
    }
  }


export default Header;