import React from 'react';
import {Link} from 'react-router-dom';
import './rest.css';
const Header = () => {
   return(
    <div>
    <nav className="mynav navbar navbar-inverse ">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <Link className="navbar-brand"id="logo" to="#">e!</Link>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav ml-auto">   
                <li>
                  < Link to= "#">Login</Link>
                </li>
                <li>
                    <Link to="#">Create an account</Link>
                  </li>
    
        
      </ul>
    
    </div>
  </div>
</nav>
</div>
   )

    
}

export default Header;
//header cant be a part of any other componet beccause its a seperate component needed on every age