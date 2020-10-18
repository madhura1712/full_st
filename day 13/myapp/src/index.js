import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './component/Routing'; 
import Home from './component/Home';

const App =() =>{
    return(
        <div>
           <Routing/> 
        </div>
    )
}
ReactDOM.render(<App/>,document.getElementById('root'));