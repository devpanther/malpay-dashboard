import React from "react";
import TaskList from "./TaskList";
import SiteVisit from "./SiteVisit";
import RecentActivity from "./RecentActivity";
import TicketList from "./TicketList";
import TaskByStatus from "./TaskByStatus";
import WelComeCard from "./WelComeCard";
import Overview from "./Overview";
import IconWithTextCard from "./IconWithTextCard";
import Widget from "components/Widget/index";
import { detailCards, recentActivity } from "./data";
import CurrencyCalculator from "../Crypto/CurrencyCalculator";
import ContainerHeader from "components/ContainerHeader/index";
import IntlMessages from "util/IntlMessages";
import Cards from './Cards';
import Popup from './Popup';
import Portfolio from "./Portfolio";
import BalanceHistory from "./BalanceHistory";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

const CRM = ({ match }, props) => {
  // const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (

    <div className="dashboard animated slideInUpTiny animation-duration-3">
      <ContainerHeader match={match} title={<IntlMessages id="User Dashboard" />} />
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
          <Widget styleName="p-4">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-6 col-12 text-center">
                <WelComeCard />
                <hr/>
                <Button onClick={handleOpen} variant="contained" color="primary">Add Card</Button>
                <hr/>
                {props.cardData !== undefined ? <div className="jr-audi-col col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12"><Cards /></div>  : 'No Cards' }
              </div>
              
              

              {/* <div className="jr-visit-col col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12">
                <SiteVisit />
              </div> */}
              {/* <Popup /> */}
              <div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        style={{ display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'}}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div style={{backgroundColor: 'transparent', padding: '2, 4, 3'}}>
            <Popup />
          </div>
        </Fade>
      </Modal>
    </div>
            </div>
          </Widget>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-12">
          <Portfolio/>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-12">
          <BalanceHistory/>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 col-12 order-sm-2">
          <Widget>
            <RecentActivity recentList={recentActivity} shape="rounded" />
          </Widget>
          <CurrencyCalculator />
        </div>

        <div className="col-xl-8 col-lg-8 col-md-12 col-12 order-sm-1">
          <div className="row">
            {detailCards.map((data, index) => <div key={index} className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
              <IconWithTextCard data={data} />
            </div>)
            }

            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <TaskList />
            </div>
            <div className="col-xl-7 col-lg-7 col-md-7 col-12">
              <TicketList />
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5 col-12">
              <TaskByStatus />
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <Overview />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  const { cardData } = auth;
  return { cardData }
};

export default connect(mapStateToProps)(CRM);
