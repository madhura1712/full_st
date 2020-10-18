import React from 'react';
import Header from './Header';
import Home from './Home';
import { BrowserRouter , Route} from 'react-router-dom';
const Routing = () =>
{
    return(
        <BrowserRouter>
        <div>
        <Header/>
        <Home/>
        </div>
        </BrowserRouter>
       
    )
}
export default Routing;