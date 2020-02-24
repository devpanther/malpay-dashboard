import React from 'react';
import Cards from 'react-credit-cards';
import 'react-transition-group';
import 'react-credit-cards/es/styles-compiled.css';
import Input from '@material-ui/core/Input';
import Widget from "components/Widget";
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import {
  showAuthLoader,
  hideMessage,
  addCard
} from '../../../../../actions/Auth';
import Button from '@material-ui/core/Button';

class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  componentWillMount(){

  }

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }

  render() {
    const {
      cvc, expiry, name, number
    } = this.state;
    const { showMessage, loader, alertMessage } = this.props;
    return (
      <Widget>
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
 <div className="row pt-5">
        <form >
        <div className="col-md-12 col-12">
        	<Input
          
          className="w-100 mb-3"
            type="text"
            name="number"
            placeholder="Card Number"
            inputProps={{
              step: 0.1,
              min: 10,
              max: 20
            }}
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
         
            type="text"
            name="expiry"
            placeholder="expiry"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          </div>

<div className="col-md-12 col-12">
<Input
            className="w-100 mb-3"    
       
            type="text"
            name="cvc"
            placeholder="cvc"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />

<Button onClick={(e) => {e.preventDefault();
                          this.props.showAuthLoader();
                         this.props.addCard({cvc, expiry, name, number });}} type="submit" variant="contained" color="primary">Submit Card</Button>
          </div>
            
        </form>
        </div>
      </div>
      </Widget>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { loader, alertMessage, showMessage, authUser } = auth;
  return { loader, alertMessage, showMessage, authUser }
};

export default connect(mapStateToProps, {
  addCard,
  hideMessage,
  showAuthLoader,
})(PaymentForm);