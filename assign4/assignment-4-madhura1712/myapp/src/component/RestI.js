import React,{Component} from 'react';
import './rest.css';

class RestI extends Component {

    render(){
        return(

           <div>
       
           <div class="container">
           <div className="imagecontainer">
            <div className="imgallery">
                 <p className="imgallery-text">Click to see Image Gallery</p>
            </div>
            
            
           </div>
           
               <h1 className="heading">The Big Chill Cakery</h1>
               <span className="subhead1">OverView</span>
               <span className="subhead2">Contact</span> 
               <hr/>
               <div>
                   <p className="about">About this Place</p>
                   <p className="about-sub">Cuisine</p>
                   
                   <p className="desc">Bakery, Fast-food</p>
                   <p className="about-sub">Average Cost</p>
                   <p className="desc">₹700 for two people (approx.)</p>
               </div>
           </div>
           
          
       
             
        </div>
    
        )
    
    }
    
}
export default RestI;