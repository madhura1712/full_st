import React,{Component} from 'react';
import axios from 'axios';
const resturl ="http://localhost:8900/restuarantd";

class Resdeet extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            restp:''
        }
    }

    backb = (event) =>
    {
       var mealid =  sessionStorage.getItem('mealid',this.props.match.params.id)
        this.props.history.push(`/details/${mealid}`)
    }
    render(){
        console.log(this.state.restp)
        var {restp} = this.state
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className = "panel-heading">
                        <h3>{restp.name}</h3>
                    </div>
                    </div>
                    <div class="row">
                        <button class="btn btn-danger" onClick={this.backb}>Go back</button>
                        <button class="btn btn-success">Place order</button>
                    </div>
                    </div>
        )
    }
    componentDidMount()
    {
       let restid = parseInt(this.props.match.params.id)
        console.log(`${resturl}/${restid}`)
        axios.get(`${resturl}/${restid}`)
        .then((response) => {this.setState({restp:response.data[0]})})
    }

}
export default Resdeet;