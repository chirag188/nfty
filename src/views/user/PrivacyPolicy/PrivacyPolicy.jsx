/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
/* eslint-disable arrow-body-style */

import React from 'react';
import { Privacy, Vector, Phone, Email } from '../../../assets/images';
import './privacy.css';


const PrivacyPolicy = () => {
  return (
    <>
      <div className="privacy-heading">
        <div className="privacy-text">Privacy Policy</div>
        <div className="privacy-img">
          <img src={Privacy} alt="Privacy Policy" className="privacy-img" />
        </div>
      </div>
      <div className="container">
        <h4 className="text-center nfty-head">NFTY DeFi Reputation Protocol</h4>
        <div className="row">
          <div className="col-md-4">
            <div className="card priv-body">
              <div className="text-center mt-3">
                <img src={Vector} alt="" className="priv-vectorimg text-center" />
              </div>

              <div className="card-body">
                <h5 className="card-title priv-cardhead">Address</h5>
                <p className="card-text priv-cardtext">
                  NFTY, Inc. <br />
                  200 Natchez Trace Ave., <br />
                  Suite 200 <br />
                  Bowling Green, KY 42103-7995
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card priv-body">
              <div className="text-center mt-3">
                <img src={Phone} alt="" className="priv-vectorimg text-center" />
              </div>
              <div className="card-body">
                <h5 className="card-title priv-cardhead">Telephone</h5>
                <p className="card-text priv-cardtext">
                  <a className="priv-cardnum" href="tel:270-796-5063">
                    270-796-5063
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card priv-body">
              <div className="text-center mt-3">
                <img src={Email} alt="" className="priv-vectorimg text-center" />
              </div>
              <div className="card-body">
                <h5 className="card-title priv-cardhead">Email</h5>
                <p className="card-text priv-cardtext">info@nftytoken.io</p>
              </div>
            </div>
          </div>
        </div>
        <div className="priv-para">
          <p className="priv-paraDetails">
            Our Data Protection Officer is Evelyne Chevy. Please for any questions about this
            privacy policy or your personal data. If you have any questions or concerns about our
            use of your personal information, please refer them to the DPO, or alternatively, send
            them using the contact form on our website, or to the email addresses stated above.
          </p>
        </div>
        <div className="priv-para">
          <h4 className="priv-cookiehead">Cookies Clause</h4>

          <p className="priv-paraDetails">
            This website does not use any cookies. Cookies will be set by our external payment
            provider to process any payments. This only happens when transacting and you’re notified
          </p>

          <p className="priv-paraDetails">
            This website does not use any cookies. Cookies will be set by our external payment
            provider to process any payments. This only happens when transacting and you’re notified
          </p>

          <p className="priv-paraDetails">
            In all other areas of the website, no tracking cookies from us, or third parties are
            placed. We don’t serve any ads, and we don’t use cookie or Javascript-based analytics
            platforms.
          </p>

          <h4 className="priv-cookiehead mt-5">What Data is Collected?</h4>
          <p className="priv-paraDetails">
            The following table contains the data this website collects.
          </p>
        </div>
      </div>

      <div className="container">
        <table className="table table-borderless">
          <thead className="priv-tablehead">
            <tr>
              <th scope="col">Collecting</th>
              <th scope="col">Purpose</th>
              <th scope="col">Basis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Email Address</td>
              <td>
                For contact purposes, those that desire to opt
                <br />
                -in and consent, happily get to read about
                <br /> news relating to our business, and we also
                <br /> provide unbiased education on the NFT industry,
                <br /> so you’re in the know!{' '}
              </td>
              <td>Consent</td>
            </tr>
            <tr>
              <td>Personal Information</td>
              <td>
                To process sales, or for events. This
                <br /> information is only collected when you buy a <br />
                ticket and the e-mail address collected will be <br />
                used at your request to inform you about events.
              </td>
              <td>Consent, Contract</td>
            </tr>
            <tr>
              <td> IP Address</td>
              <td>
                To detect and respond to security incidents. <br />
                This information is stored in our log files and is
                <br /> only accessible to our system administrators.
                <br /> In aggregate, anonymised form, this data may <br />
                be used to provide us with details regarding
                <br /> number of visitors to optimise our server infrastructure <br />
                to cope with visitor demand.
              </td>
              <td>Legitimate interests</td>
            </tr>
            <tr>
              <td> Username & Password</td>
              <td>
                For the purpose of making an account with us
                <br /> that will allow you to access your ticket <br />
                information and retrieve the ticket(s) at any <br />
                time, or pre-fill information when you order <br />
                additional tickets.
                <br />
                Making an account is not mandatory. Your <br />
                ticket will in any case be sent to you via <br />
                email.
              </td>
              <td>Consent</td>
            </tr>
            <tr>
              <td> Payment info</td>
              <td>
                This information is directly collected by a <br />
                payment processor, and we do not store or <br />
                process this information in any way, shape or
                <br /> form.
                <br />
                Our payment processor requires this <br />
                information in order to process any legal
                <br /> transactions.
              </td>
              <td>Contract</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container">
        <h4 className="priv-cookiehead mt-5"> How is Data Collected?</h4>
        <p className="priv-paraDetails">
          With the exception of the data in our web server’s log files, you directly provide us with
          the data we collect. We collect and process data when you:
        </p>
        <ul className="priv-paraDetails">
          <li>Register or place any orders on this website.</li>
          <li>
            Voluntarily complete a form or provide feedback via our contact form or via email.
          </li>
        </ul>

        <h4 className="priv-cookiehead">How is Data Used?</h4>
        <ul className="priv-paraDetails">
          <li>Data is collected so that we can:</li>
          <li>Process nft orders.</li>
          <li>
            Send email with news and education related to nfts and digital currencies that interact
            with nfts tech
          </li>
          <li>
            or the purpose of being proactive and detecting and being able to quickly respond to any
            possible security incidents.
          </li>
        </ul>
        <p className="priv-paraDetails">
          When we process any orders, we may send your data to and use the resulting information
          from our payment provider in order to process the payment.
        </p>

        <h4 className="priv-cookiehead">Third Party Data Sharing</h4>
        <p className="priv-paraDetails">
          If you provide your email address, we will store it on your mailing list provided to us by
          MailChimp, Inc. in order for us to be able to inform you via email about news related to
          our events.
        </p>
        <p className="priv-paraDetails">
          We also may share some of your information with our payment processor if necessary for the
          proper processing of your ticket purchase.
        </p>
        <p className="priv-paraDetails">
          In all other cases, your information will not be shared with any third parties.
        </p>

        <h4 className="priv-cookiehead">How is Data Stored?</h4>
        <p className="priv-paraDetails">
          We store your data in various formats on the server, namely log files (for the information
          in point 3 of section 2), or in a database (for information under points 1 and 2 of
          section 2). Passwords you provide us will be stored in hashed form.
        </p>

        <h4 className="priv-cookiehead">How Long is Data Stored?</h4>
        <p className="priv-paraDetails">
          For the data under row 3 of the table in section 2 (log files), we store your data for a
          maximum of 7 days. This provides us with the necessary time frame to respond to security
          incidents.
        </p>

        <p className="priv-paraDetails">
          For the data under rows 1 and 2 of the table in section 2 (e-mail address and personal
          information), data is stored until order or event has come to a conclusion. This allows us
          to inform you about the events taking place.
        </p>

        <p className="priv-paraDetails">
          Also the information may be necessary to combat fraud. If you previously made an account,
          if you choose to delete your account this information will be deleted as well.
        </p>

        <p className="priv-paraDetails">
          For the data under row 4 of the table in section 2 (username & password), is stored until
          you choose to delete your account.
        </p>

        <p className="priv-paraDetails">
          The data under row 5 of the table in section 2 (payment information) is not stored or
          processed by us in any form, shape or format. This data is used by our payment processor
          only to process the payment.
        </p>

        <h4 className="priv-cookiehead">Security</h4>
        <p className="priv-paraDetails">
          We take all appropriate and exceptional technical and organisational measures to protect
          your data from unauthorised access or disclosure, misuse or destruction.
        </p>

        <h4 className="priv-cookiehead">Need to Know More?</h4>
        <p className="priv-paraDetails">
          Should you have any questions, comments or concerns about the way we handle any privacy
          matter, please contact our DPO Evelyne Chevy at Evelyne@nftytoken.io
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
