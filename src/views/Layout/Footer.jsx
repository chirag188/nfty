/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable arrow-body-style */
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  alienIcon,
  discordIcon,
  facebookIcon,
  linkedinIcon,
  socialMediaIcon,
  telegramIcon,
  twitterIcon,
  youtubeIcon,
} from '../../assets/images';
import Logo from '../../assets/images/Logo.png';
import DarkMode from '../../assets/images/Group 533.png';
import pdf from '../../WhitePaperv2.pdf';


const Footer = () => {
  const { theme } = useSelector(
    state => state.auth,
  );
  return (
    <>
      <hr className="hr-footer" />
      <div className="footer">
        <div className="row">
          <div className="col-sm-5 footer-first-column mt-3">
            <div>
              <img src={ theme === "dark" ? DarkMode : Logo} alt="" />
            </div>
            <div className="mt-3">
              NFTY Token is a utility token that powers the NFTY Protocol. Welcome to the first and
              only DeFi Reputation Protocol.
            </div>
          </div>
          <div className="col-sm-3 footer-second-column mt-3">
            <div className="mt-2 mb-2">
              <Link to="/governance" className="footer-link">
                Governance
              </Link>
            </div>
            <div className="mt-2 mb-2">
              {/* <div to="" className="footer-link">
                API
              </div> */}
            </div>
            <div className="mt-2 mb-2">
              <div to="" className="footer-link">
                <a
                  href={pdf}
                  className="footer-link"
                  target="_blank"
                >
                  White Paper
                </a>
              </div>
            </div>
            <div className="mt-2 mb-2">
              <div to="" className="footer-link">
                <a
                  href="https://www.nftytoken.io/static/media/NFTYOnePager-v2.677305df.pdf"
                  className="footer-link"
                  target="_blank"
                >
                  Tokenomics
                </a>
              </div>
            </div>
            <div className="mt-2 mb-2">
              <a
                className="footer-link"
                // eslint-disable-next-line max-len
                href="https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x3085154623f51b00dedfc6ceeb5197277a66b17b"
                target="_blank"
              >
                Buy NFTY
              </a>
              {/* <div to="" className="footer-link">
                
              </div> */}
            </div>
          </div>
          <div className="col-sm-4 footer-third-column mt-3">
            <div className="mt-2 mb-2">
              <Link to="/road-map" className="footer-link">
                Roadmap
              </Link>
            </div>
            <div className="mt-2 mb-2">
              <Link to="/news" className="footer-link">
                News
              </Link>
            </div>
            <div className="mt-2 mb-2">
              <Link to="/about-us" className="footer-link">
                About
              </Link>
            </div>
            <div className="mt-2 mb-2">
              <Link to="/contact-us" className="footer-link">
                Contact Us
              </Link>
            </div>
            <div className="mt-2 mb-2 d-flex flex-wrap">
              <a
                href="https://www.facebook.com/nftytoken/"
                className="footer-icon-link"
                target="_blank"
              >
                <img src={facebookIcon} alt="" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCvvzu_1K51l_ntb7vTShG2w/"
                className="footer-icon-link"
                target="_blank"
              >
                <img src={youtubeIcon} alt="" />
              </a>
              <a href="https://twitter.com/NFTYtoken" className="footer-icon-link" target="_blank">
                <img src={twitterIcon} alt="" />
              </a>
              <a href="https://t.me/nftytoken" className="footer-icon-link" target="_blank">
                <img src={telegramIcon} alt="" />
              </a>
              <a href="https://discord.gg/nfty" className="footer-icon-link" target="_blank">
                <img src={discordIcon} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/company/nfty-token"
                className="footer-icon-link"
                target="_blank"
              >
                <img src={linkedinIcon} alt="" />
              </a>
              <a
                href="https://www.reddit.com/r/Nftytoken/"
                className="footer-icon-link"
                target="_blank"
              >
                <img src={alienIcon} alt="" />
              </a>
              <a
                href="https://medium.com/@NFTYToken"
                className="footer-icon-link"
                target="_blank"
              >
                <img src={socialMediaIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="cms-footer">
        <div className="cms-footer-content">
          <span className="copy-right-icon">©</span>
          <span className="f-14">NFTY 2021</span>{' '}
        </div>
        <div className="cms-content">
          <Link className="footer-link f-14" to="/terms-and-condition">
            Terms & Conditions
          </Link>
        </div>
        <div className="cms-content">|</div>
        <div className="cms-content">
          <Link className="footer-link f-14" to="/privacy-policy">
            Privacy Policy
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
