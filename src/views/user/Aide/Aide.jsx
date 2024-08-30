/* eslint-disable import/no-useless-path-segments */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-boolean-value */

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Artist from './../../../assets/images/LandingPageimages-01.jpg';
import Partnerships from './../../../assets/images/LandingPageimages-02.jpg';
import Ambassadors from './../../../assets/images/LandingPageimages-03.jpg';
/* eslint-disable arrow-body-style */
const Feature = props => {
  const { applyNow, learnMore, className } = props;
  return (
    <div className={`mt-2 button-center d-flex ${className}`}>
      <Link to={applyNow} className="buy-btn">
        Apply now
      </Link>
      {learnMore && (
        <Link to={learnMore} className="app-launch-btn">
          Learn more
        </Link>
      )}
    </div>
  );
};
const Aide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="aide-head">
        <div className="governance-container">
          <div className="w-100">
            <div className="pt-5 col-md-12 displayauto">
              <div className="p-3 col-lg-4" id="corporation">
                <img src={Artist} alt="artist" className="w-100 mb-3" />
                <div className="head-text">Artist</div>
                <div className="normal-text mt-1">
                  Artist are the heart of our project. The inspiration behind our entire NFTY
                  platform has been motivated by creatives and our desire to bridge complicated
                  technologies and culture.
                  <br />
                  <br />
                  Here at NFTY, we are committed to evolving partnerships, education, and community
                  building with our artists by creating innovative strategies that support artist in
                  the production of NFT’s and development of dedicated communities.
                  <br />
                  <br />
                  We realize we are at a pivotal point in human history, where the art renaissance
                  of the future is emerging through technology. It is crucial for us as a team, and
                  community, to support the future voices of creative impact in order to leave a
                  legacy that we are proud of. No culture can be born without art, and technology of
                  the future will rely heavily on the creative voices for this direction.
                  <Feature
                    className="feature"
                    applyNow="/family/artist-apply"
                    learnMore="/family/artist-overview"
                  />
                </div>
              </div>
              <hr />
              <div id="structure" className="p-3 col-lg-4 partnership">
                <img src={Partnerships} alt="artist" className="w-100 mb-3" />
                <div className="head-text"> Partnerships </div>
                <div className="normal-text mt-1">
                  Developing strategic partnerships is essential to the growth of NFTY. When two
                  entities align, one brand's success brings success to its partner brand, too.
                  Collaborating can be an effective way to build a business, boost awareness, and
                  break into new markets, and for a partnership to truly work, it has to be a
                  win-win for all players in the game. Both audiences need to find value.
                  <br />
                  <br />
                  As NFTY continues to evolve, we will cultivate relationships to bring additional
                  value to not only our community but the overall NFT market space.
                  <br />
                  <br />
                  We are excited to share that NFTY will announce our new partnerships in the coming
                  months!.
                  <Feature
                    className="feature"
                    applyNow="/family/partnerships-apply"
                    // learnMore="/family/partnerships-overview"
                  />
                </div>
              </div>
              <hr />
              <div id="proposal " className="p-3 col-lg-4">
                <img src={Ambassadors} alt="artist" className="w-100 mb-3" />
                <div className="head-text">Ambassadors </div>
                <div className="normal-text mt-1">
                  Ambassadors are the face and voice of the NFTY community of movers, shakers, and
                  overall disruptors. They have their ear to the ground, while navigating the ever
                  evolving NFT industry. These ambassadors hail from backgrounds including private
                  equity, creative industries, legal, healthcare, and so much more. We at NFTY,
                  realize the importance of diverse voices, diverse industries, and diverse
                  perspectives that help us stay connected to what's going on and what is coming
                  into this new future.
                  <br />
                  <br />
                  Our Ambassadors are a crucial bridge between networks, partnerships, communities,
                  and really…the world. As a NFTY ambassador, you receive direct network access to
                  other ambassadors and NFTY leaders. Together we will be developing and creating a
                  more cohesive ambassador program over the coming year.
                  <Feature
                    className="feature"
                    applyNow="/family/ambassadors-apply"
                    // learnMore="/family/ambassadors-overview"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12 displayauto">
              <div id="proposal " className="p-3 col-lg-4">
                <Feature
                  className="feature-down"
                  applyNow="/family/artist-apply"
                  learnMore="/family/artist-overview"
                />
              </div>
              <div id="proposal " className="p-3 col-lg-4 partnership">
                <Feature
                  className="feature-down"
                  applyNow="/family/partnerships-apply"
                  // learnMore="/family/partnerships-overview"
                />
              </div>
              <div id="proposal " className="p-3 col-lg-4">
                <Feature
                  className="feature-down"
                  applyNow="/family/ambassadors-apply"
                  // learnMore="/family/ambassadors-overview"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aide;
