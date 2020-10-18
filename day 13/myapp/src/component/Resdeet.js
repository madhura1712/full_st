import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Tab,Tabs,TabList,TabPanel} from 'react-tabs';
import "./rest.css";
import 'react-tabs/style/react-tabs.css';
const resturl ="http://localhost:8900/restuarantd";

class Resdeet extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            restp:''
        }
    }

    backb = (event) =>
    {
       var mealid =  sessionStorage.getItem('mealid',this.props.match.params.id)
        this.props.history.push(`/details/${mealid}`)
    }
    render(){
        console.log(this.state.restp)
        var {restp} = this.state
        return(
            <div className="container">
                
                         <img src={restp.thumb} className="img-responsive"/>
                         <p className="imgallery-text">Click to see Image Gallery</p>
                    
              
            
                <h1 className="headdeet">{restp.name}</h1>
               <Tabs>
                    <TabList>
                    <Tab><span className="overview">OverView</span></Tab>
                    <Tab>Contact</Tab>
                    <hr/>
                    </TabList>
                    <TabPanel>
                        <div>
                        <p className="about">About this Place</p>
                        <p className="about-sub">Cuisine</p>
                        <p className="desc">{restp.cuisine}</p>
                        <p className="about-sub">Average Cost</p>
                        <p className="desc">Rs {restp.cost} for Two</p>
                        </div>
                   </TabPanel>
                   <TabPanel>
                       <div>
                     
                       <p className ="about-sub">Phone Number</p>
                        <p className ="desc">{restp.contact_number}</p> 
                        <p class="about-sub">{restp.name}</p>
                        <p class="desc">{restp.address}</p>
                      
                       </div>
                   
                 
                       
                       </TabPanel>
               </Tabs>
               
                    <div class="row">
                        <button class="btn btn-danger" onClick={this.backb}>Go back</button>
                        <Link to ={`/order/${this.props.match.params.id}`} class="btn btn-success">Place order</Link>
                    </div>
          </div>
        )
    }
    componentDidMount()
    {
       let restid = parseInt(this.props.match.params.id)
        console.log(`${resturl}/${restid}`)
        axios.get(`${resturl}/${restid}`)
        .then((response) => {this.setState({restp:response.data[0]})})
    }

}
export default Resdeet;