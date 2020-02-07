import React from 'react';
import Cards from 'react-credit-cards';
import 'react-transition-group';
import 'react-credit-cards/es/styles-compiled.css';
import Input from '@material-ui/core/Input';
import Widget from "components/Widget";



export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <Widget>
      <div  className="row" id="PaymentForm">
      
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
 
        <form >
        <div className="col-md-12 col-12">
        	<Input
          
          className="w-100 mb-3"
            type="number"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          </div>
        
        <div className="col-md-12 col-12">
         	<Input
              className="w-100 mb-3"
            type="text"
            name="name"
            placeholder="name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          </div>

<div className="col-md-12 col-12">
           	<Input
            className="w-100 mb-3"    
         
            type="number"
            name="expiry"
            placeholder="expiry"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          </div>

<div className="col-md-12 col-12">
<Input
            className="w-100 mb-3"    
       
            type="number"
            name="cvc"
            placeholder="cvc"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />

<Input className="jr-btn bg-cyan text-white col-md-12 col-12" type="submit" value="Submit" />
          </div>
            
        </form>
       
      </div>
      </Widget>
    );
  }
}