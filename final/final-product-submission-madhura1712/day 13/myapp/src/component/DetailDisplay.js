import React from 'react';
import {Link} from 'react-router-dom';
import './middle.css';
const DetailDisplay =(props) => {
    const renderTable = ({resdata})=>{
        if(resdata)
        { 
                
            return resdata.map((item) => {
                   
                   return(
                       <div>
                            <div className="row blockx">
                             
                                <div className="col-lg-4">
                                    <img src ={item.thumb}class="imgx"/>
                                </div>
                              <div className="col-lg-6">
                                <div>
                            {/* for restaurant detailed page, very simple route, just pass the id of the resto */}
                           <Link to ={`/rest/${item._id}`}> <p className="box">{item.name}</p></Link><br/>
                        <p class="cityn"> {item.locality}</p><br/>
                        <p class="add">{item.address}</p><br/>
                  
                   <hr/>
                   </div>
                   <div>
                   <span class="add">CUISINE: </span> 
                        <span class="cityn">{item.Cuisine[0].name},{item.Cuisine[1].name}</span><br/>
                        <span class="add">COST:</span>   <span class="cityn">{item.cost}</span><br/>
                   </div>
                   <br/>
                </div>

                </div>
            </div>
                      
                   
                    
                   )
            })
        }
    }
    return(
        <div>
                
                {renderTable(props)}

    
        </div>

    )
}
export default DetailDisplay;