import React from 'react';
import { BrowserRouter , Route} from 'react-router-dom';
import Home from './Home';
import Details from './Details';
import Header from './Header';
const Routing =() => {
    return(
        <BrowserRouter>
        <div>
        <Header/>
        <Route exact path="/" component={Home}> </Route>
        <Route path="/details/:id" component={Details}> </Route>
        {/*id is param name for the mealtype we are recieving */}
    
        </div>
        </BrowserRouter>


    )

}
export default Routing;
//when we type /details, the contents of home page are even displayed, 
//this is because of '/' in details, it prints te cotents of only / also.
//therefore we use exactpath