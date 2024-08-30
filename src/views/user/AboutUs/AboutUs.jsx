/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react';
import {
  AboutUsImg,
  CEOImg,
  JCImg,
  missionImg,
  SteveBriggsImg,
  SydneyImg,
  ThomasImg,
  vissionImg,
} from '../../../assets/images';
import OurTeamData from './OurTeamData';

/* eslint-disable arrow-body-style */
const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="about-us-heading">
        <div className="heading-text">About Us</div>
        <div className="about-us-img">
          <img src={AboutUsImg} alt="" />
        </div>
      </div>
      <div className="about-us">
        <div className="about-us-container">
          <div className="row w-100">
            <div className="col-md-3">
              <div className="navigation-section">
                <div>
                  <a className="nav-link" href="#intoduction">
                    Introduction
                  </a>
                </div>
                <div>
                  <a className="nav-link" href="#mission">
                    Mission
                  </a>
                </div>
                <div>
                  <a className="nav-link" href="#vision">
                    Vision
                  </a>
                </div>
                <div>
                  <a className="nav-link" href="#team">
                    Team
                  </a>
                </div>
                <div>
                  <a className="nav-link" href="#testimonials">
                    Testimonials
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-9 pt-3">
              <div id="introduction">
                <div className="head-text">Introduction</div>
                <div className="normal-text mt-2">
                  NFTY creates an NFT reputation layer that uses staking and farming activities to
                  crowdsource reputation data. The process leverages economic incentives and
                  rewards, funded from 7.5% of the final payout from any NFT auction which uses the
                  protocol. The reward is distributed to a pool of “endorsers”, or “advocates”, in
                  proportion to their respective allocations in NFTY tokens. This reward is received
                  in a USD backed stable digital asset.
                </div>
              </div>
              <div className="ceo-msg">
                <div>
                  <img src={CEOImg} alt="" />
                </div>
                <div className="message-section">
                  <div className="head-text">Message from the CEO</div>
                  <div className="normal-text mt-2">
                    NFTY represents the culmination of a highly diverse team brought together to
                    provide a novel solution in uncharted reputation technology. By leveraging
                    decentralization and a unique financial incentive, NFTY sets out to foster
                    legitimacy between the buyers and sellers of NFTs. I am absolutely thrilled to
                    lead this initiative during this time of unprecedented growth in the DeFi space.
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div className="row ">
                  <div className="col-md-6 mt-2 pt-4" id="mission">
                    <div className="mission-data">
                      <div>
                        <img src={missionImg} alt="" />
                      </div>
                      <div className="sub-head-text mt-3">Mission</div>
                      <div className="normal-text text-center mt-3">
                        The NFTY Token aims to become the social currency for the NFT industry.
                        Auctions using $NFTY will generate more value, promote quality and eliminate
                        fraud.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-2 pt-4" id="vision">
                    <div className="vission-data">
                      <div>
                        <img src={vissionImg} alt="" />
                      </div>
                      <div className="sub-head-text mt-3">Vision</div>
                      <div className="normal-text text-center mt-3">
                        Every NFT auction should include crowdsourced reputation. Everyone’s
                        voiceshould be heard, while the voices of those with greater knowledge of
                        and investment in critiquing quality can be more heavily weighted.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="our-team pt-4" id="team">
                <div className="d-flex justify-content-space-between" style={{ marginLeft: '8%' }}>
                  <div className="head-text mt-2">Meet our team</div>
                </div>
                <div className="">
                  <OurTeamData />
                </div>
              </div>
              <div className="testimonial-section pt-4" id="testimonials">
                <div className="head-text">Testimonials</div>
                <div className="row">
                  <div className="col-md-6 mt-4">
                    <div className="d-flex">
                      <div>
                        <img className="testimonial-img" src={JCImg} alt="" />
                      </div>
                      <div className="testimonial-name">
                        <div className="f-b">JC</div>
                      </div>
                    </div>
                    <div className="normal-text mt-3">
                      “I’m so happy to find a token whose actual utility outperforms its original
                      stated objective. This one seems to be extremely well thought out.”
                    </div>
                  </div>
                  <div className="col-md-6 mt-4">
                    <div className="d-flex">
                      <div>
                        <img className="testimonial-img" src={ThomasImg} alt="" />
                      </div>
                      <div className="testimonial-name">
                        <div className="f-b">Thomas Walls</div>
                        <div className="f-14 opacity">Foreign Affairs International</div>
                      </div>
                    </div>
                    <div className="normal-text mt-3">
                      “$NFTY is very promising in that it takes the concept of crowd-sourcing
                      reputation and social ranking and applies it in the world of NFTs. With its
                      favorable staking terms and advocacy functionality, it’s an excellent bet for
                      long-term growth.”
                    </div>
                  </div>
                  <div className="col-md-6 mt-5">
                    <div className="d-flex">
                      <div>
                        <img className="testimonial-img" src={SteveBriggsImg} alt="" />
                      </div>
                      <div className="testimonial-name">
                        <div className="f-b">Steve Briggs</div>
                      </div>
                    </div>
                    <div className="normal-text mt-3">
                      "By crowdsourcing reputation, NFTY will give investors and NFT enthusiasts the
                      confidence they need when choosing which projects to get involved with. That's
                      something that is sorely missing in the NFT space."
                    </div>
                  </div>
                  <div className="col-md-6 mt-5">
                    <div className="d-flex">
                      <div>
                        <img className="testimonial-img" src={SydneyImg} alt="" />
                      </div>
                      <div className="testimonial-name">
                        <div className="f-b">Sydney Zhao</div>
                        <div className="f-14 opacity">
                          Mergers and acquisitions for Fortune 100 companies
                        </div>
                      </div>
                    </div>
                    <div className="normal-text mt-3">
                      "I’ve known the founders for years and their success track record has been
                      impressive. NFTY is a disrupter in the space. I look forward to leveraging
                      NFTY to promote great artists and vote for art pieces while gaining rewards"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
