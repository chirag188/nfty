/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable import/order */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Ethereum from '../../../assets/images/ethereum.jpg';
import Uniswap from '../../../assets/images/Uniswap-Exchange-Logo.jpg';
import Matic from '../../../assets/images/matic.png';
import ApeSwap from '../../../assets/images/awepswap.png';
import Binance from '../../../assets/images/binance.png';
import Bitmart from '../../../assets/images/bitmart.png';
import Tether from '../../../assets/images/tether.png';
import './buymodal.css';

function BuyBtnModal({ closeModal }) {
  return (
    <>
      <div
        className="modal fade show"
        id="add-suc"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="enterOTP"
        style={{ display: 'block', zIndex: 99999 }}
      >
        <div
          style={{ justifyContent: 'center' }}
          className="modal-dialog modal-dialog-centered"
          role="document"
        >
          <div className="modal-content text-center animated shake modal-width">
            <div className="d-flex justify-content-end">
              <span className="close" onClick={closeModal}>
                X
              </span>
            </div>
            <div className="modal-body text-center">
              <div className="container container1">
                <a
                  href="https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x3085154623f51b00dedfc6ceeb5197277a66b17b"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="row btn-wrapper ">
                    <div className="coins-container">
                      <div className="white-ring">
                        {' '}
                        <img src={Ethereum} />
                      </div>
                    </div>
                    <div className="mid-container">
                      <i
                        style={{ color: 'white', fontSize: 'large' }}
                        className="fas fa-chevron-right"
                      />
                      <p style={{ margin: '0px', fontWeight: 'bold', color: 'white' }}>Uniswap</p>
                    </div>
                    <div className="coins-container">
                      <div className="white-ring">
                        <img src={Uniswap} />
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.bitmart.com/trade/en?layout=basic&symbol=NFTY_USDT"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="row btn-wrapper ">
                    <div className="coins-container">
                      <div className="white-ring">
                        {' '}
                        <img src={Tether} />
                      </div>
                    </div>
                    <div className="mid-container">
                      <i
                        style={{ color: 'white', fontSize: 'large' }}
                        className="fas fa-chevron-right"
                      />
                      <p style={{ margin: '0px', fontWeight: 'bold', color: 'white' }}>Bitmart</p>
                    </div>
                    <div className="coins-container">
                      <div className="white-ring">
                        <img src={Bitmart} />
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://app.apeswap.finance/swap?inputCurrency=BNB&outputCurrency=0x8623e66Bea0DCe41B6d47f9C44e806A115baBae0"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="row btn-wrapper  ">
                    <div className="coins-container">
                      <div className="white-ring">
                        {' '}
                        <img src={Binance} />
                      </div>
                    </div>
                    <div className="mid-container">
                      <i
                        style={{ color: 'white', fontSize: 'large' }}
                        className="fas fa-chevron-right"
                      />
                      <p style={{ margin: '0px', fontWeight: 'bold', color: 'white' }}>ApeSwap</p>
                      <span style={{ color: 'white' }}>(BNB)</span>
                    </div>
                    <div className="coins-container">
                      <div className="white-ring">
                        <img src={ApeSwap} />
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://app.apeswap.finance/swap?inputCurrency=MATIC&outputCurrency=0x8623e66Bea0DCe41B6d47f9C44e806A115baBae0"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="row btn-wrapper  ">
                    <div className="coins-container">
                      <div className="white-ring">
                        {' '}
                        <img src={Matic} />
                      </div>
                    </div>
                    <div className="mid-container">
                      <i
                        style={{ color: 'white', fontSize: 'large' }}
                        className="fas fa-chevron-right"
                      />
                      <p style={{ margin: '0px', fontWeight: 'bold', color: 'white' }}>ApeSwap</p>
                      <span style={{ color: 'white' }}>(Matic)</span>
                    </div>
                    <div className="coins-container">
                      <div className="white-ring">
                        <img src={ApeSwap} />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>
  );
}

export default BuyBtnModal;
