import React,{Component} from 'react';
import axios from 'axios';
import OrderDisplay from './OrderDisplay';
const orurl = "http://localhost:8900/ordersx"
//calling the api here nad storing the data in orders
class OrderDis extends Component 
{
    constructor(){
        super()
        this.state ={
            orders:''
        }
    }
    render(){
        return(
            <div>
                <div class="containers">
                    <div>
                        <OrderDisplay orderdata = {this.state.orders}/>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        axios.get(`${orurl}`).then((response) => {this.setState({orders:response.data})})
      
    }
}
export default OrderDis;