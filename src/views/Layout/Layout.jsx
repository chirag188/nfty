/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import Logo from '../../assets/images/Logo.png';
import DarkLogo from '../../assets/images/Group 533.png';
import polygonUp from '../../assets/images/Polygon-up.png';
import downArrow from '../../assets/images/downArrow.png';
import MenuDropdown from './MenuDropdown';
import { themeValidator } from '../../store/actions';
// import DayNightIcon from '../../assets/images/day-night.png';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import BuyBtnModal from '../user/NFTYProtocol/BuyBtnModal';
const Layout = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [buyNowmodal, setBuyModal] = useState(false);
  const [marketData, setMarketData] = useState();
  const [usedTheme, setUsedTheme] = useState(localStorage.getItem('theme'));
  const makeAPICall = () => {
    axios.get(`https://stage-backend.nftytoken.io/api/v1/wrapper/ticker`).then(res => {
      const responce = res.data.data.usdPrice;
      setMarketData(responce);
    });
  };
  useEffect(() => {
    makeAPICall();
  }, []);

  useEffect(() => {
    setUsedTheme(localStorage.getItem('theme'));
  }, [usedTheme]);

  let clickedClass = 'clicked';
  const body = document.body;
  const darkTheme = 'dark';
  const lightTheme = 'light';
  let theme;

  if (localStorage) {
    theme = localStorage.getItem('theme');
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = e => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem('theme', 'light');
      theme = lightTheme;
      setUsedTheme(localStorage.getItem('theme'));
      dispatch(themeValidator({ data: lightTheme }));
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem('theme', 'dark');
      theme = darkTheme;
      setUsedTheme(localStorage.getItem('theme'));
      dispatch(themeValidator({ data: darkTheme }));
    }
    // window.location.reload()
  };
  return (
    <>
      <div className="containerss">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/" style={{ flex: '10%' }}>
            <img className="nfty-brand-logo" src={usedTheme === 'dark' ? DarkLogo : Logo} alt="" />
          </Link>
          <a
            href="https://coinmarketcap.com/currencies/nifty-defi-protocol/"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <div className="d-flex" style={{ flex: '20%', marginRight: '40px' }}>
              {/* apply a link https://www.coingecko.com/en/coins/nifty-token*/}
              <div className="mr-2 nfty-number">${marketData ? marketData?.toFixed(4) : null}</div>
              {/* <div */}
              {/* className={ */}
              {/* marketData?.market_data?.price_change_percentage_24h < 0 */}
              {/* ? 'stake-data-percentage-down f-14' */}
              {/* : 'stake-data-percentage f-14' */}
              {/* } */}
              {/* > */}
              {/* {marketData?.market_data?.price_change_percentage_24h
                  ? `${marketData?.market_data?.price_change_percentage_24h.toFixed(2)} %`
                  : null} */}

              {/* <span className="ml-3" style={{ marginLeft: 5 }}>
                  {marketData?.market_data?.price_change_percentage_24h ? (
                    <img
                      className="pb-1 polygon-icon"
                      src={
                        marketData?.market_data?.price_change_percentage_24h > 0
                          ? polygonUp
                          : downArrow
                      }
                      alt="Raise"
                    />
                  ) : null}
                </span> */}
              {/* </div> */}
            </div>
          </a>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ flex: '40%' }}
          >
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  NFTY Protocol
                </Link>
                {location.pathname === '/' ? <hr className="active" /> : null}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/governance">
                  Governance
                </Link>
                {location.pathname === '/governance' ? <hr className="active" /> : null}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  About
                </Link>
                {location.pathname === '/about-us' ? <hr className="active" /> : null}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/family">
                  Family
                </Link>
                {location.pathname.includes('/family') ? <hr className="active" /> : null}
              </li>
            </ul>
          </div>
          <div className="nav nav-buy-app" style={{ flex: '15%' }}>
            <div>
              <a
                className="nav-link f-b"
                // eslint-disable-next-line max-len
                onClick={() => setBuyModal(true)}
                target="_blank"
                style={{ cursor: 'pointer' }}
              >
                Buy
              </a>
            </div>
            <div>
              <a href="https://dapp.nftytoken.app" className="app-btn" target="_blank">
                App
              </a>
            </div>
            <div className="darkmode-aline">
              <span onClick={e => switchTheme(e)}>
                {usedTheme === 'dark' ? (
                  <i title="Enable Light Mode" className="fas fa-sun"></i>
                ) : (
                  <i title="Enable Dark Mode" className="fas fa-moon"></i>
                )}
              </span>
              {/* <input
                type="checkbox"
                className={`checkbox ${theme === 'dark' ? clickedClass : ''}`}
                checked={usedTheme === 'dark' ? true : false}
                id="toggleDarkMode"
                onClick={e => switchTheme(e)}
                onChange={() => {
                  setUsedTheme(localStorage.getItem('theme'));
                }}
              />
              <label className="label" for="toggleDarkMode">
                <div className="ball"></div>
              </label> */}
            </div>
            {/* <div className="cursor-pointer">
            <img className="day-night-icon" src={DayNightIcon} alt="" />
          </div> */}
          </div>
          <div className="d-flex navbar-btns">
            <MenuDropdown />
          </div>
        </nav>
        {buyNowmodal && <BuyBtnModal closeModal={() => setBuyModal(false)} />}
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
