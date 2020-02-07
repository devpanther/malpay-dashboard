import React from "react";
import Popup from "reactjs-popup";
import PaymentForm from "./PaymentForm"
import Button from '@material-ui/core/Button';
import {Add} from '@material-ui/icons'

export default () => (
    <Popup
    trigger={<Button variant="contained" className="jr-btn bg-cyan text-white ">      <Add/> Add Card</Button>}
    modal
    closeOnDocumentClick
  >
    <span> <PaymentForm /> </span>
    
  </Popup>
);