import React from "react";
import Widget from "components/Widget/index";
import Card1 from "./Card1";
import Card2 from "./Card2";



const Cards = () => {
  return (


      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-12 ">

        <Widget >
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
          <Card1 />
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
          <Card2/>
        </div>
        </div>
       
        </Widget>
                
          </div>
          </div>


  );
};

export default Cards;