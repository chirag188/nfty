/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RoadMapImg, RoadMapFlow,RoadMapDark} from '../../../assets/images';
import './roadMap.css';

const RoadMap = () => {
  const { theme } = useSelector(
    state => state.auth,
  );
  return (
    <>
      <div className="roadMap-heading">
        <div className="roadMap-text">Roadmap</div>
        <div className="roadMap-img">
          <img src={RoadMapImg} alt="Roadmap" />
        </div>
      </div>

      <div className="container">
        <div className="roadMap-text mt-4">
          The NFTY Protocol is growing very rapility and our community is committed to developing a
          fully functional open source DeFi Reputation Protocol by the end of 2023. See our roadmap
          below for milestones ahead.{' '}
        </div>
        <div className="roadMap-flow">
          <h4 className="roadMap-flow-head">NFTY DeFi Reputation Protocol Roadmap</h4>
        </div>
        <div className="text-center">
          <img src={theme === "dark" ? RoadMapDark : RoadMapFlow} alt="RoadMapFlow" className="roadmap-flow" />
        </div>
        <div className="text-center roadmap-text">
          <p>Want to help or have some ideas?</p>
          <p>
            <Link to="/contact-us" className="link">
              <span className="roadmap-underline"> contact </span> us{' '}
            </Link>
            today or join our social media.{' '}
          </p>
        </div>
      </div>
    </>
  );
};

export default RoadMap;
