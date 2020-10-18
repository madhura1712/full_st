import React,{Component} from 'react';
const orderurl ="http://localhost:8900/placeOrder";
class Forms extends Component{
    constructor(props){
        super(props)

            this.state={
                order_id: Math.floor(Math.random()*10000),
                name:"",
                phone:"",
                email:"",
                address:"",
                rest_id:this.props.match.params.id,
                person:1        
            }
        }
    handleChangeName= (event) =>
    {
        this.setState({name:event.target.value})
        console.log(this.state.name)
    }
    handleChangePhone= (event) =>
    {
        this.setState({phone:event.target.value})
        console.log(this.state.phone)
    }
    handleChangeEmail= (event) =>
    {
        this.setState({email:event.target.value})
        console.log(this.state.email)
    }
    handleChangeAdd= (event) =>
    {
        this.setState({address:event.target.value})
        console.log(this.state.address)
    }
    handleChangePerson= (event) =>
    {
        this.setState({person:event.target.value})
        console.log(this.state.person)
    }
    handleSubmit = () =>
    {
        var data ={
            "order_id":this.state.order_id,
            "name":this.state.name,
            "phone":this.state.phone,
            "email":this.state.email,
            "address":this.state.address,
            "rest_id":this.state.rest_id,
            "person":this.state.person
        }
        fetch(orderurl,{
            method:'POST',
            headers:{
                'Accept':'application/JSON',
                'Content-Type':'application/JSON'
            },
            body:JSON.stringify(data)
        })
        .then((this.props.history.push('/orderDisplay')))
    }
    handleCan = ()=>
    {
        this.props.history.push('/')
    }
    render(){
        return(
            <div>
                <div className ="container">
                    <div className ="panel panel-success">
                        <div className ="panel-heading">
                           <h3> Place Order</h3>
                        </div>
                        <div className = "panel-body">
                            <div class="form-group">
                                <label className="control-label">ORDER ID: </label>
                                <input type="text" name="order_id"  readOnly value ={this.state.order_id} class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label className="control-label">RESTUARANT  ID: </label>
                                <input type="text" name="rest_id"  readOnly value ={this.state.rest_id} class="form-control"/>
                            
                            </div>
                            <div class="form-group">
                                <label className="control-label">NAME: </label>
                                <input type="text" name="name"  value ={this.state.name} class="form-control" onChange={this.handleChangeName} />
                            
                            </div>
                            <div class="form-group">
                                <label className="control-label">ADDRESS: </label>
                                <input type="text" name="address" value ={this.state.address} class="form-control" onChange={this.handleChangeAdd}/>
                            
                            </div>
                            <div class="form-group">
                                <label className="control-label">PHONE: </label>
                                <input type="text" name="phone" value ={this.state.phone} class="form-control" onChange={this.handleChangePhone}/>
                            
                            </div>
                            <div class="form-group">
                                <label className="control-label">EMAIL: </label>
                                <input type="text" name="email"  value ={this.state.email} class="form-control" onChange={this. handleChangeEmail}/>
                            
                            </div>
                            <div class="form-group">
                                <label className="control-label">Person: </label>
                                <select name="person" value={this.state.person} class="form-control" onChange={this.handleChangePerson} >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                
                            </div>
                            <div>
                                <button className="btn btn-success" onClick={this.handleSubmit}>Place Order</button>
                                &nbsp;
                                <button className="btn btn-danger" onClick={this.handleCan}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Forms ;