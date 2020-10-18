import React,{Component} from 'react';
import './rest.css';
import {Tab,Tabs,TabList,TabPanel} from 'react-tabs';
class RestI extends Component {

    render(){
        return(

           <div>
            <div className="imagecontainer">
             <div className="imgallery">
                  <p className="imgallery-text">Click to see Image Gallery</p>
             </div>
             
             
            </div>
            
                <h1 className="heading">The Big Chill Cakery</h1>
               <Tabs>
                   
                       <Tab> <span className="subhead1">OverView</span>
                       </Tab>
                       <br/>
                       <Tab> <span className="subhead2">Contact</span></Tab>
                        <hr/>
                   
                   <TabPanel>
                       <h2>   <div>
                    <p className="about">About this Place</p>
                    <p className="about-sub">Cuisine</p>
                    
                    <p className="desc">Bakery, Fast-food</p>
                    <p className="about-sub">Average Cost</p>
                    <p className="desc">₹700 for two people (approx.)</p>
                </div></h2>
                   </TabPanel>
              
                   <TabPanel>
                   <p className ="ph">Phone Number</p>
                   <p className ="phno">+91 114004566</p> 
                   <p class="titlex">The Big Chill Cakery</p>
                   <p class="add">Shop 1, Plot D, Samruddhi Complex, Chincholi, 
Mumbai-400002, Maharashtra</p>
                       
                       </TabPanel>
               </Tabs>
               
             
        </div>
    
        )
    
    }
    
}
export default RestI;