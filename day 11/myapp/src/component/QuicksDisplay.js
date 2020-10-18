import React from 'react';
import {Link} from 'react-router-dom';
import './QuicksDisplay.css';
const Displayx = (props) =>
{
    const listMeal = ({mealT}) =>
    {
        if(mealT){
            return mealT.map((item)=>{
               return (
                   //<Link to ="/details">
                   //when we click on any tile, it goes to details
                   // now wee want the search on the basis of the mealtype, there the code below
                   <Link to ={`/details/${item.mealtype}`}>
                       <div className="tileContainer">
                <div className="tileComponent1">
                    <img src={ `/images/${item.name}.png`}/>
                </div>
                <div className="tileComponent2">
                    <div className="componentHeading">
                        {item.name}
                    </div>
                    <div className="componentSubHeading">
                        Start your day with exclusive breakfast option
                    </div>
                </div>

            </div>
                        
                   </Link>
               )
            }
            )
        }


    }
    return(
            <div>
                
        <div className="quickSearchContainer">
            <p className="quickSearchHeding">
                Quick Searches
            </p>
            <p className="quickSearchSubHeding">
                Discover restaurants by type of meal
            </p>
            </div>
           
                <h4>Quick Search</h4>
                {listMeal(props)}
                {/* why are we calling props this way, why not year.props?*/}
            </div>
    )

}
export default Displayx;