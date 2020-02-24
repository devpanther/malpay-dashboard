import React from "react";
import 'react-credit-cards/es/styles-compiled.css';
import Cards from 'react-credit-cards';
import { connect } from 'react-redux'

const Card1 = (props) => {

  return (
    <Cards
    cvc={props.cardData.cvc}
    expiry={props.cardData.expiry}
    focused={true}
    name={props.cardData.name}
    number={props.cardData.number}
  />

  )
}


const mapStateToProps = ({ auth }) => {
  const { cardData } = auth;
  return { cardData }
};
export default connect(mapStateToProps)(Card1);