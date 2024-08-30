/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { themeValidator } from '../../store/actions';
import lightHam from '../../assets/images/lightHam.png';
import DarkHam from '../../assets/images/DarkHam.svg';
import BuyBtnModal from '../user/NFTYProtocol/BuyBtnModal';

const MenuDropdown = () => {
  const dispatch = useDispatch();
  const [usedTheme, setUsedTheme] = useState(localStorage.getItem('theme'));
  const [buyNowmodal, setBuyModal] = useState(false);
  useEffect(() => {
    setUsedTheme(localStorage.getItem('theme'));
  }, [usedTheme]);

  const clickedClass = 'clicked';
  const { body } = document;
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
    <div>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-autoclose-true" className="cursor-pointer dropdown-btn">
          <img className="hamburger-icon" src={theme === 'dark' ? DarkHam : lightHam} alt="" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <div className="nav-tab">
            <Dropdown.Item href="/" className="dropdown-item f-18">
              NFTY Protocol
            </Dropdown.Item>

            <hr />
            <Dropdown.Item href="/governance" className="dropdown-item f-18">
              Governance
            </Dropdown.Item>

            <hr />
            <Dropdown.Item href="/about-us" className="dropdown-item f-18">
              About
            </Dropdown.Item>
            <hr />
            <Dropdown.Item href="/family" className="dropdown-item f-18">
              Family
            </Dropdown.Item>
            <hr />
            <Dropdown.Item
              onClick={() => setBuyModal(true)}
              // href="https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x3085154623f51b00dedfc6ceeb5197277a66b17b"
              className="dropdown-item f-18 f-b"
              target="_balnk"
            >
              Buy
            </Dropdown.Item>
            <hr />
            <div className="darkmode-aline">
              <span onClick={e => switchTheme(e)}>
                {theme === 'dark' ? (
                  <>
                    <i
                      title="Enable Light Mode"
                      className="fas fa-sun"
                      style={{ marginRight: 5 }}
                    ></i>
                    <span style={{ color: '#fff' }}>Light Mode</span>
                  </>
                ) : (
                  <>
                    <i
                      title="Enable Dark Mode"
                      className="fas fa-moon"
                      style={{ marginRight: 5 }}
                    ></i>
                    Dark Mode
                  </>
                )}
              </span>
              {/* <input type="checkbox" className={`checkbox ${theme === "dark" ? clickedClass : ""}`} 
                  checked={usedTheme === "dark"} 
                  id="toggleDarkMode  " onClick={(e) => switchTheme(e)} 
                  onChange={() => { setUsedTheme(localStorage.getItem("theme"))}}/>
              <label className="label" htmlFor="toggleDarkMode">
              <div className="ball" />
            </label> */}
            </div>
          </div>
          <hr />
          <Dropdown.Item
            href="https://app.nftytoken.io/"
            className="dropdown-item f-18"
            target="_balnk"
          >
            <div className="app-btn width-fit-content">App</div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {buyNowmodal && <BuyBtnModal closeModal={() => setBuyModal(false)} />}
    </div>
  );
};

export default MenuDropdown;
