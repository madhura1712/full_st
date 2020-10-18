import React,{Component} from 'react';
const locurl = "http://localhost:8900/location";
 const resturl ="http://localhost:8900/restuaranthome?city=";
class Search extends Component{
    constructor()
    {
        super()
        this.state={
            location:'',
            restx:'',
            city:''
        }
    }
    handlecity = (event)=>
    {
        this.setState({city:event.target.value});
        var cityid = parseInt(event.target.value)
        sessionStorage.setItem("cityid",parseInt(event.target.value));
        fetch(`${resturl}${cityid}`,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({restx:data})
            //goes and finds the cityid based on given city from rendercity and finds rest data
        }
        )
    }

    rendercity=(event)=>
    {
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
    } //returns the list of locations

    renderx = (event) =>
    {
        if(data){
            return(data.map((item)=>
            {
                {item.name} | {item.locality}
            }))
        }
    }
    render()
    {
        return(
            <div>
                <select onChange={this.handlecity()}>
                    
                       {this.renderCity(this.state.location)} 
                     

                </select>
                <input list="restx" name="rests" id ="rests" className="restinput"/>
                <datalist id = "restx" >
                    {this.renderx(this.state.restx)}
                </datalist>
            </div>
        )
        
     

    }
    componentDidMount()
    {
        fetch(locurl,{method:'GET'})
        .then((res) =>res.json())
        .then((data)=>
        {
            this.setState({location:data})
        }
        )
       
    }
}




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