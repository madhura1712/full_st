import React,{Component} from 'react';
import QuicksDisplay from './QuicksDisplay';
const quickurl = "http://localhost:8900/mealtype"
class QuickS extends Component{ 
    constructor()
    {
        super()
        this.state={
            mealT:''
        }
    }
    render()
    {
        return(
            <div>
            
                <QuicksDisplay mealT={this.state.mealT}/>
            </div>
        )
    }
    componentDidMount(){
        fetch(quickurl,{method:'GET'})
        .then((res)=> res.json()) //can we convert to any format?
        .then((data)=>
        {
            this.setState({mealT:data})
            //this.setState puts in new values in mealT:Data
        }
        )
    }
}
export default  QuickS;