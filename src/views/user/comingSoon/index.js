/* eslint-disable  */
import React, { Component } from 'react';
import { Logo } from '../../../assets/images';
// import moment from 'moment';
import './Timer.css';

class CountDown extends Component {
  constructor(props) {
    super(props);
    this.count = this.count.bind(this);
    this.state = {
      months: 0,
      days: 0,
      minutes: 0,
      hours: 0,
      secounds: 0,
      time_up: '',
    };
    this.x = null;
    this.deadline = null;
  }
  count() {
    var now = new Date().getTime();
    var t = this.deadline - now;
    var dd = Math.floor(t / (1000 * 60 * 60 * 24));
    var hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((t % (1000 * 60)) / 1000);
    var days = dd < 10 ? '0' + dd : dd;
    var hours = hh < 10 ? '0' + hh : hh;
    var minutes = mm < 10 ? '0' + mm : mm;
    var seconds = ss < 10 ? '0' + ss : ss;

    this.setState({ days, minutes, hours, seconds });

    if (t < 0) {
      clearInterval(this.x);
      this.setState({
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        time_up: 'TIME IS UP',
      });
    }
  }
  componentDidMount() {
    this.deadline = new Date('Nov 01, 2021 00:00:00').getTime();

    this.x = setInterval(this.count, 1000);
  }

  render() {
    const { days, seconds, hours, minutes } = this.state;
    return (
      <>
        <div className="row mt-5">
          <div className="col-12 comingsoon-aline">
              <div className="d-flex justify-content-space-around coming-soon">
                <h3 className="ml-5">
                  Coming Soon
                </h3>
                <img className="nfty-brand-logo" src={Logo} alt="" />
              </div>
          </div>
        </div>
        <div id="countdown" className="">
          <div className="">
            <div className="box">
              <p id="day">{days}</p>
              <span className="text">Days</span>
            </div>
          </div>
          <div className="">
            <div className="box">
              <p id="hour">{hours}</p>
              <span className="text">Hours</span>
            </div>
          </div>
          <div className="">
            <div className="box">
              <p id="minute">{minutes}</p>
              <span className="text">Minutes</span>
            </div>
          </div>
          <div className="">
            <div className="box">
              <p id="second">{seconds}</p>
              <span className="text">Seconds</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CountDown;
