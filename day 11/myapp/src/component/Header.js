import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
   return(
    <div>
    <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <Link className="navbar-brand" to="#">Edumato</Link>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li className="active"><Link to="/">Home</Link></li>
        <li><Link to ="/details">Page 1</Link></li>
        
      </ul>
    
    </div>
  </div>
</nav>
</div>
   )

    
}

export default Header;
