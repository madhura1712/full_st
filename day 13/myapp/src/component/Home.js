import React from 'react';
import Search from './Search';
import Quicks from './Quicks';
import Footer from './Footer'
//var React = require('react')
const Home = () => {
    return(
        <div>
            <Search/>
            <hr/>
            <Quicks/>
            <hr/>
            <Footer year="2020"/>  

        </div> //we can wrap many tags and div in a wrapper element or a wrapper div, but cannot have 
        //innumerable tags without a wrapper element
    )
} //the app function

//render??
//we created a compnent called app and we render it in the div root
//means the above h1 tag will come inside the div automatically
//ReactDOM.render(<App/>,document.getElementById('root')); why did we remove this
export default Home;
//we shifted everything from index to home because index is the main file that we run
//we are reducing the load on index

//year is like an attribute eg src, href