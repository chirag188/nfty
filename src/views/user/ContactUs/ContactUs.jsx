import axios from 'axios';
import { useState } from 'react';
import { callImg, chatWithUs, ContactUsImg, mailSupportImg } from '../../../assets/images';

/* eslint-disable */
const ContactUs = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const makeAPICall = () => {
    if (name && email && message) {
      axios
        .post(`https://nfty.zendesk.com/api/v2/requests.json`, {
          request: {
            requester: { name ,email},
            subject: 'Contact-us',
            comment: { body: message },
            // custom_fields: [{ id: 360038338431, value: name }],
          },
        })
        .then(res => {
          console.log('RES', res);
          window.location.reload();
          // const responce = res.data;
          // setMarketData(responce);
        });

    }
  };

  return (
    <>
      <div className="contact-us-heading">
        <div className="heading-text">Contact Us</div>
        <div className="contact-us-img">
          <img src={ContactUsImg} alt="" />
        </div>
      </div>
      <div className="contact-us">
        <div className="contact-us-container">
          <div className="address-section">
            <div className="row">
              <div className="col-lg-6 mt-3">
                <div className="head-text">Corporate Address</div>
                <div className="normal-text mt-3">
                  NFTY, Inc. <br />
                  200 Natchez Trace Ave., <br />
                  Suite 200 <br />
                  Bowling Green, KY 42103-7995
                  <br />
                  Phone: 270-796-5063 Email: support@nftytoken.io
                </div>
              </div>
              <div className="col-lg-6 mt-3">
                {/* <div className="head-text">Address 2</div>
                <div className="normal-text">
                  8668 Concord Center Dr. Englewood, CO 80112
                  <br />
                  Phone: 270-796-5063 Email: info@email.com
                </div> */}
              </div>
            </div>
          </div>
          <div className="quick-contact">
            <div className="head-text">Quick Contact</div>
            <div>
              <div className="row mt-3">
                <div className="col-lg-6 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-lg-6 mt-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="mt-3">
                <textarea
                  className="text-area w-100"
                  row={10}
                  placeholder="Message"
                  onChange={e => setMessage(e.target.value)}
                  required
                />
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-end">
                  <button type="button" className="submit-btn" onClick={makeAPICall}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="support-section">
        <div className="head-text text-center">Support</div>
        <div className="row mt-3 justify-content-center">
          <div className="col-md-4 card-container">
            <div className="card">
              <div className="image mt-2">
                <img src={callImg} alt="" />
              </div>
              <div className="sub-head-text mt-2">Telephone</div>
              <div>
                <div className="f-12 mt-2">
                  {' '}
                  <a style={{ textDecoration: 'none', color: 'black' }} href="tel:270-796-5063">
                    270-796-5063
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 card-container">
            <div className="card">
              <div className="image mt-2">
                <img src={mailSupportImg} alt="" />
              </div>
              <div className="sub-head-text mt-3">Email Support</div>
              <div>
                <div className="f-12 mt-2">support@nftytoken.io</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 card-container">
            <div className="card">
              <div className="image mt-2">
                <img src={chatWithUs} alt="" />
              </div>
              <div className="sub-head-text mt-2">
                <a href="javascript:$zopim.livechat.window.show();" className="chat-with-us">
                  Chat with us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
