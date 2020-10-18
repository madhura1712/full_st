import React,{Component} from 'react';
import axios from 'axios';
import DetailDisplay from './DetailDisplay';
import './middle.css';
//component in curly braces because component is a class in react
const resturl ="http://localhost:8900/reshome";

class Details extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            cityid : parseInt(sessionStorage.getItem('cityid'))?parseInt(sessionStorage.getItem('cityid')):1,
            restlist : [],
            cuisine:'',
            sort:'',
            costx:'',
            test:''
            
    }
    console.log("hi the constructor loads first")
}
        //there is a different way we recieve this props
        //this props is not from any component
        //its from object >> match >>param
    
        cuisineFilter = (event) =>
    {
        //helps to get which value is currently selected.
        console.log(event.target.value);
        let cuisine = event.target.value;
        sessionStorage.setItem('mealid',this.props.match.params.id)
        let mealid = parseInt(this.props.match.params.id)
        let url;
        if(event.target.value==0)
        {
             url =`${resturl}/${this.state.cityid}/${this.props.match.params.id}`
        }
        else{
            url =  `${resturl}/${this.state.cityid}/${this.props.match.params.id}?cuisine=${cuisine}`
        }
        axios.get(`${url}`).then((response)=>
        {
            this.setState({restlist:response.data})
        })
    }
    
    sortfilter = (event) =>
    {
        //helps to get which value is currently selected.
        console.log(event.target.value);
        let sort = event.target.value;
        sessionStorage.setItem('mealid',this.props.match.params.id)
        let mealid = parseInt(this.props.match.params.id)
        var url;
        if(event.target.value== 1)
        {
            url =`${resturl}/${this.state.cityid}/${mealid}`
            sort={cost:-1}
        }
        else{
            url = `${resturl}/${this.state.cityid}/${mealid}`
            sort = {cost:1}
        }
       
        axios.get(`${url}`).then((response)=>
        {
            this.setState({restlist:response.data})
        })
    }

    costfilter = (event)=>
    {
        let mealid = parseInt(this.props.match.params.id)
        let costx= (event.target.value).split(',');
        let lcost = parseInt(costx[0]);
        let hcost = parseInt(costx[1]);
        let url;
        if(event.target.value ==0)
        {
            url =`${resturl}/${this.state.cityid}/${this.mealid}`

        }
        else{
            url =`${resturl}/${this.state.cityid}/${mealid}?lcost=${lcost}&hcost=${hcost}`
        }
        axios.get(`${url}`).then((response)=>
        {
            this.setState({restlist:response.data})
        })
    }
    render(){
        console.log("render loads second and at state change ")
console.log(sessionStorage.getItem("cityid "));
        console.log(this.state.cityid)
        return(
            <div>
                <div class="container">
                <div className = "row">
                
{/*<h2>Details for city id {this.state.cityid}
                and mealtype is {this.props.match.params.id}</h2> */}
                <div className="col-lg-2 blockfill">
                <h3 class="hi">FILTERS</h3>
               
                <br/>
                <div onChange={this.cuisineFilter} className="cus"> 
                <p>CUISINE</p>
                <label className="radio">
                <input type = "radio" value ="0" name ="cuisine"/>All<br/>
                </label>
                <label className="radio">
                <input type = "radio" value ="1" name ="cuisine"/>North<br/>
                </label>
                <label className="radio">
                <input type ="radio" value ="2" name="cuisine"/>South<br/>                    
                </label>
                <label className="radio">
                <input type = "radio" value ="3" name ="cuisine"/>Chinese<br/>
                </label>
                <label className="radio">
                <input type = "radio" value ="4" name ="cuisine"/>Fast food<br/>
                </label>
                <label className="radio">
                <input type ="radio" value ="5" name ="cuisine"/>Street Food<br/>
                </label>
                </div>

               
               
                <div onChange = {this.costfilter} className="cus">
                <p>COST</p>
                <label className="radio">
                <input type = "radio" value ="0" name ="range"/>All<br/>
                </label>
                <label className="radio">
                <input type = "radio" value ="0,500" name ="range"/>0-500<br/>
                </label>
                <label className="radio">
                <input type = "radio" value ="501,1000" name ="range"/>500-1000<br/>
                </label>
                </div>
                {/*in js we can use commas to split
                var a = 0,500
                a.split(',')
                
                */}
                 <div onChange = {this.sortfilter} className="cus">
                    <p>SORT</p>
                    <label className="radio">
                    <input type = "radio" value ="1" name ="sort"/>High to low<br/>
                    </label>
                    <label className="radio">
                    <input type ="radio" value ="2" name="sort"/>Low to high<br/>                    
                    </label>
                    </div>
                
                
             </div>
             <div class="col-lg-10">
             <DetailDisplay resdata={this.state.restlist}/>
            </div>

            </div>
                </div>
            </div>
            
                
        )
    }
    componentDidMount()
    {
        console.log("didmount runs  the api only when the page is loaded")
        sessionStorage.setItem('mealid',this.props.match.params.id)
       let mealid = parseInt(this.props.match.params.id)
        console.log(`${resturl}/${this.state.cityid}/${this.props.match.params.id}`)
        axios.get(`${resturl}/${this.state.cityid}/${mealid}`)
        .then((response) => {this.setState({restlist:response.data})})
    }
    componentDidUpdate()
{
    console.log("didupdate runs when the api needed to be updated, and the selected value keeps on changing");
    
}
}

export default Details;