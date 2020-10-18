import React,{Component} from 'react';
const locurl = "http://localhost:8900/location";
 const resturl ="http://localhost:8900/restuaranthome?city=";
//what is this empty function??
class Search extends Component {
    constructor(){
        super()
   
        this.state={
            location:'',
            city:'',
            restx:''
        }
    }

    handleCity = (event) =>
    {
        this.setState({restuarant:''})
        this.setState({city:event.target.value})
        var cityid = parseInt(event.target.value)
        //we do the localstorage thing to do in the console log which rest the user selected
        sessionStorage.setItem("cityid",event.target.value)
        console.log(`${resturl}${cityid}`)
        //we want to call resturants based on the city selected
        fetch(`${resturl}${cityid}`,{method:'GET'}). //the resturl prints data of the particular city, we are taking the same and printing it in cole an in react
        then((res) =>res.json())
        .then((data) =>
        {
            this.setState({restx:data})
        })
    } //the selected city is stored here

    renderCity = (data) => {
        // //rerendering location cause state change
        if(data){
            return data.map((item) => { 
                return( 
                    //(1) option value for city:event.target.value, city_id is displayed is displayed here on clicking onchange
                    <option value={item.city}> {/* value is a attribute here, we are storing selected item.city in it.*/}
                        {item.name}
                    </option>
                )//option will be returned the exact no of times the length of the array is.

            })

        }
    }
    renderRest = (data) =>{
        if(data){
            return data.map((item)=>
            {
                return (
                    <option>
                        {item.name} | {item.locality}
                    </option>
                )

            })
        }
    }
    render(){
        return(
            <header>
                <center>
                 
                <select onChange={this.handleCity}> 
                    {this.renderCity(this.state.location)}
                {/* <p>When you select a new city, 
                a function is triggered (1) which outputs the value of the selected city id. */}
                
            
                </select>
                {/*<p>Selected city is{this.state.city}</p> */}
                <input list="restx" name="rests" id ="rests"/>
                <datalist id = "restx">
                    {this.renderRest(this.state.restx)}
                </datalist>
                </center>
                <hr/>
            </header>
        )
    }
    componentDidMount()
     //used to call api at page load, other apis should be called in thier respective event 
        {
            fetch(locurl,{method:'GET'})
            .then((res) => res.json())
            .then((data)=>{
                this.setState({location:data})
                //location is a array we are storing all the data that we get from the api into location 
                //there is a state update therefore rerender
            })

        }
       

    
}
//onchange= event call this.handle.. : whensomeone type any value we wil call the handler
//handleChange = event handler 
//setState is a method which updates the state
//eg:whatever wse type in the input box gets updated below
export default Search;
//meaning of render will happen in one component and the other will be exported
//why are we making header if we can put everything in const home?
//contructor use: 
//super constructor use: 