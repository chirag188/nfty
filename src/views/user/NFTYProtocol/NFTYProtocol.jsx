/* eslint-disable */
import { Nav, TabContainer, TabContent, Table, TabPane } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Zendesk from 'react-zendesk';
import axios from 'axios';
import YouTube from 'react-youtube';
import { ToastContainer, toast } from 'react-toastify';
// import pdf from '../../../Whitepaper.pdf';
import {
  CEOImgPng,
  invertedCommaIcon,
  landingVector,
  reviewerImg,
  reviewerImg1,
  reviewerImg2,
  reviewerImg3,
  reviewerImg4,
  ROICalcImg,
  staticVideoImg,
  whitePaperSectionImg,
  DarkAboutNft,
  DarkVector,
  DarkROI,
  DarkROICal,
  profilePicImg,
  leaderboardDark,
} from '../../../assets/images';
import FAQsData from './FAQsData';
import tokenomicsPdf from '../../../NFTYOnePager-v2.pdf';
import { Link } from 'react-router-dom';
import BuyBtnModal from './BuyBtnModal';

const opts = {
  height: '450px',
  width: '580px',
  playerVars: {
    origin: 'https://youtu.be/hBxOaSu-9ck',
    // https://developers.google.com/youtube/player_parameters
    //  autoplay: 1,
  },
};
const ZENDESK_KEY = 'i4Zhf0NgLMH15bbGlGKWbdZGsXHZCXlp17X30g3P';
const setting = {
  color: {
    theme: '#000',
  },
  launcher: {
    chatLabel: {
      'en-US': 'Need Help',
    },
  },
  contactForm: {
    fields: [{ id: 'description', prefill: { '*': 'My pre-filled description' } }],
  },
};
/* eslint-disable arrow-body-style */
const tableData = [
  {
    rank: 1,
    socialRank: 'Patron',
    nftyStaked: '1 NFTY',
    timeStaked: 'Any',
    stakingReward: '13.579%',
    votePower: '1',
  },
  {
    rank: 2,
    socialRank: 'Iron',
    nftyStaked: '500 NFTY',
    timeStaked: '30 Days',
    stakingReward: '14.579%',
    votePower: '500',
  },
  {
    rank: 3,
    socialRank: 'Silver',
    nftyStaked: '10,000 NFTY',
    timeStaked: '45 Days',
    stakingReward: '15.079%',
    votePower: '10,000',
  },
  {
    rank: 4,
    socialRank: 'Gold',
    nftyStaked: '25,000 NFTY',
    timeStaked: '90 Days',
    stakingReward: '15.579%',
    votePower: '25,000',
  },
  {
    rank: 5,
    socialRank: 'Platinum',
    nftyStaked: '50,000 NFTY',
    timeStaked: '180 Days',
    stakingReward: '15.829%',
    votePower: '50,000',
  },
  {
    rank: 6,
    socialRank: 'Diamond',
    nftyStaked: '100,000 NFTY',
    timeStaked: '365 Days',
    stakingReward: '16.079%',
    votePower: '100,000',
  },
];

const BUYER_REVIEWS = [
  {
    id: 1,
    image: reviewerImg,
    name: 'JC',
    type: 'Buyer',
    review:
      'I’m so happy to find a token whose actual utility outperforms its original stated objective. This one seems to be extremely well thought out.',
  },
  {
    id: 1,
    image: reviewerImg2,
    previewImage: reviewerImg1,
    name: 'Steve Briggs',
    type: 'Buyer',
    review:
      "By crowdsourcing reputation, NFTY will give investors and NFT enthusiasts the confidence they need when choosing which projects to get involved with. That's something that is sorely missing in the NFT space.",
  },
  {
    id: 1,
    image: reviewerImg3,
    name: 'Thomas Walls',
    type: 'Foreign Affairs International',
    review:
      '$NFTY is very promising in that it takes the concept of crowd-sourcing reputation and social ranking and applies it in the world of NFTs. With its favorable staking terms and advocacy functionality, it’s an excellent bet for long-term growth.',
  },

  {
    id: 1,
    image: reviewerImg4,
    name: 'Sydney Zhao',
    type: 'Mergers and acquisitions for Fortune 100 companies',
    review:
      'I’ve known the founders for years and their success track record has been impressive. NFTY is a disrupter in the space. I look forward to leveraging NFTY to promote great artists and vote for art pieces while gaining rewards',
  },
];

const NFTYProtocol = () => {
  const [email, setEmail] = useState();
  const [buyerDetails, setBuyerDetails] = useState(BUYER_REVIEWS[1]);
  const [topStaker, setTopStaker] = useState();
  const [buyNowmodal, setBuyModal] = useState(false);
  const [topStreaker, setTopStreaker] = useState();
  const _onReady = event => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const { theme } = useSelector(state => state.auth);
  const handleChange = e => {
    setEmail(e.target.value);
  };
  const subscribe = async e => {
    e.preventDefault();
    const response = await axios
      .post('https://prod-backend.nftytoken.io/api/v1/subscribe', {
        email,
      })
      .then(res => {
        toast.success(res.data.msg);
      })
      .catch(err => {
        toast.error(err.response.data.err_msg);
      });
    return response;
  };
  const topStakerAPICall = () => {
    axios
      .get('https://prod-backend.nftytoken.io/api/v1/users/topStaker')
      .then(res => {
        console.log('staker', res.data.data);
        setTopStaker(res.data.data);
      })
      .catch(err => console.log(err));
  };
  const topStreakerAPICall = () => {
    axios
      .get('https://prod-backend.nftytoken.io/api/v1/users/topStreaker')
      .then(res => {
        console.log('streaker', res.data.data);
        setTopStreaker(res.data.data);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    topStakerAPICall();
    topStreakerAPICall();
  }, []);
  return (
    <>
      <div className="nfty-protocol container-fluid">
        <div className="protocol-head">
          <ToastContainer />
          <div className="row w-100 hero-banner">
            <div className="col-12 col-md-5 hero-head">
              <div className="heading-text">
                <div>Rewarding Excellence</div> <div>Token</div>{' '}
              </div>
              <Zendesk zendeskKey={ZENDESK_KEY} {...setting} />
              <div className="simple-text">
                Be the voice of quality. Be rewarded for your discernment
              </div>
              <div className="mt-5 d-flex">
                <a href="https://app.nftytoken.io/" className="app-launch-btn" target="_blank">
                  Launch App
                </a>
                <a
                  onClick={() => setBuyModal(true)}
                  style={{ cursor: 'pointer' }}
                  className="buy-btn"
                  target="_blank"
                >
                  Buy
                </a>
              </div>
            </div>
            <div className="col-12 col-md-7">
              <div className="right-ima">
                <div className="video-box text-center">
                  <YouTube
                    className="youtube-video"
                    videoId="hBxOaSu-9ck"
                    opts={opts}
                    onReady={_onReady}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="subscribe-section container-fluid">
          <div className="subscribe">
            <div className="heading-text">Subscribe to our newsletter to stay updated</div>

            <form name="contactform" className="contactform" onSubmit={subscribe}>
              <div className="input-section">
                <div className="input-group justify-content-center">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="your@email.com"
                    onChange={handleChange}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    required
                  />
                  <button type="submit" className="read-more-btn">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="tokenomics-whitepaper container-fluid">
          <div className="row w-100 hero-banner">
            <div className="col-md-5 ">
              <div className="mt-5 hero-head1">
                <div className="heading-text">Tokenomics</div>
                <div className="simple-text">
                  The NFTY Protocol uses the NFTY token and a USD-backed stablecoin. The NFTY token
                  acts as a critical reputation layer for NFT transactions.
                </div>
                <div className="coming-soonbtn">
                  <button type="button" className="read-more-btn">
                    <a href={tokenomicsPdf} className="read-more-btn" target="_blank">
                      Read More
                    </a>
                  </button>
                </div>
              </div>
              <div className="mt-5 hero-head1">
                <div className="heading-text">Our White Paper</div>
                <div className="simple-text">
                  Discoverability (or the lack thereof) plagues NFT makers and collectors. Find out
                  how the NFTY utility token solves this and other problems in our white paper.
                </div>
                <div className="coming-soonbtn">
                  <button type="button" className="read-more-btn">
                    <a
                      // onClick={() => window.open(pdf)}http://stagelandingpage.nftytoken.io/aide
                      href={`https://nftytoken.app/static/media/Whitepaper.pdf`}
                      className="read-more-btn"
                      target="_blank"
                    >
                      Read More
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="white-paper-img">
                <img src={whitePaperSectionImg} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="tokenomics-vector container-fluid">
          <img className="w-100" src={theme === 'dark' ? DarkVector : landingVector} alt="" />
        </div>
        <div className="about-nfty container-fluid">
          <div className="row w-100">
            <div className="col-md-6">
              <div className="mt-5">
                <div>
                  <img
                    className="inverted-coma-img"
                    src={theme === 'dark' ? DarkAboutNft : invertedCommaIcon}
                    alt=""
                  />
                </div>
                <div className="heading-text">Message from the CEO</div>
                <div className="simple-text">
                  The NFTY Protocol rewards artists for their work and advocates for their acumen.
                  NFTY is the token behind this transformative leveraging of good judgement to
                  promote quality in NFT marketplaces.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="founder-text">
                “NFTY represents the culmination of a highly diverse team brought together to
                provide a novel solution in uncharted reputation technology. By leveraging
                decentralization and a unique financial incentive, NFTY sets out to foster
                legitimacy between the buyers and sellers of NFTs. I am absolutely thrilled to lead
                this initiative during this time of unprecedented growth in the DeFi space.”
              </div>
              <div className="founder-details mt-3">
                <img className="founder-img" src={CEOImgPng} alt="" />
                <div className="founder-name">
                  <div>
                    <spna style={{ fontSize: 18 }}>Chris Mills</spna> <br />
                    Co-founder & CEO, NFTY Token
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="why-nfty container-fluid">
          <div className="row w-100 pt-4">
            <div className="col-md-6 hero-head1">
              <div className="heading-text">Why NFTY?</div>
              <div className="heading-sub-text">
                Earn first-rate staking rewards while building your social rank for free NFTs and
                stablecoin payouts.
              </div>
              <div className="mt-4 f-b roi-head">ROI</div>
              <div className="simple-text">
                Launch our NFTY App and play around with rewards earned based on different what-if
                scenarios.
              </div>
              <div className="mt-4 f-b roi-head">Special NFTY Reward</div>
              <div className="simple-text">
                Early NFTY stakers will be airdropped a founder’s NFT that will only be minted once
                and never available again. Stake today to be guaranteed this exclusive offer.
              </div>
              <div className="mt-5 app-launchbtn">
                <a href="https://app.nftytoken.io" className="app-launch-btn" target="_blank">
                  Launch App
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-center">
                <a href="https://app.nftytoken.io" target="_blank">
                  <img
                    className="roi-calc-img"
                    src={theme === 'dark' ? DarkROICal : ROICalcImg}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="buyer-review container-fluid">
          <div className="row w-100 pt-3">
            <div className="col-md-6">
              <div className="heading-text">People Say About Us</div>
              <div className="col-md-6 reviewer-preview-top">
                <div className="d-flex justify-content-center">
                  <img
                    className="reviewer-img"
                    src={buyerDetails.previewImage || buyerDetails.image}
                    alt=""
                  />
                </div>
              </div>
              <div className="heading-sub-text pt-2">{buyerDetails.review}</div>
              <div className="reviewer-name">{buyerDetails.name}</div>
              <div className="reviewer-role">{buyerDetails.type}</div>
              <div className="other-reviewer-img">
                {BUYER_REVIEWS.map((buyer, index) => (
                  <img
                    key={buyer.id}
                    src={buyer.image}
                    alt="buyer"
                    onClick={() => setBuyerDetails(BUYER_REVIEWS[index])}
                  />
                ))}
              </div>
            </div>
            <div className="col-md-6 col-md-6 reviewer-preview-side">
              <div className="d-flex justify-content-center">
                <img
                  className="reviewer-img"
                  src={buyerDetails.previewImage || buyerDetails.image}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="social-ranking container-fluid">
          <div className="heading-text">Social Rank</div>
          <div className="mt-2">
            Improve your social rank to unlock increasingly higher staking rewards, exclusive
            events, unique NFTs, auctions, and more!
          </div>
          <div className="table-section table-scroll">
            <Table hover>
              <thead className="table-header">
                <tr>
                  <th>Rank</th>
                  <th>Social Rank</th>
                  <th>NFTY Staked</th>
                  <th>Time Staked</th>
                  <th>Staking Reward</th>
                  <th>Vote Power</th>
                </tr>
              </thead>
              <tbody>
                {tableData?.map((data, index) => (
                  <tr key={index}>
                    <td>{data.rank}</td>
                    <td>{data.socialRank}</td>
                    <td>{data.nftyStaked}</td>
                    <td>{data.timeStaked}</td>
                    <td>{data.stakingReward}</td>
                    <td>{data.votePower}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
        <div className="achivement-section">
          <TabContainer defaultActiveKey="topStakers">
            <Nav>
              <Nav.Item>
                <Nav.Link eventKey="topStakers">
                  <span> Top Stakers</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="longestStreaks">Longest Streaks</Nav.Link>
              </Nav.Item>
            </Nav>

            <TabContent className="mt-4">
              <TabPane eventKey="topStakers">
                <div className="mt-3 f-18">Flex your status by becoming a top $NFTY staker</div>
                <div className="top-stakers-data">
                  <div className="row">
                    {topStaker &&
                      topStaker.map((data, i) => (
                        <div className="col-lg-6 mt-3">
                          <div className="single-data">
                            <div className="col-md-2 col-2">
                              <img
                                src={
                                  data.profilePic
                                    ? data.profilePic
                                    : theme === 'dark'
                                    ? leaderboardDark
                                    : profilePicImg
                                }
                                alt=""
                              />
                            </div>
                            <div className="f-b margin-left col-md-4 col-4">
                              {data.name.length > 20
                                ? `${data.name.substring(0, 6)}...${data.name.substring(
                                    data.name.length - 6,
                                    data.name.length,
                                  )}`
                                : data.name}
                            </div>
                            <div className="margin-left col-md-4 col-4">
                              {data.totalStaked.$numberDecimal} Tokens
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </TabPane>
              <TabPane eventKey="longestStreaks">
                <div className="mt-3 f-18">Flex your status by having longest streaks</div>
                <div className="longest-streak-data">
                  <div className="row">
                    {topStreaker &&
                      topStreaker.map((data, i) => (
                        <div className="col-lg-6 mt-3">
                          <div className="single-data">
                            <div className="col-md-2 col-2">
                              <img
                                src={
                                  data?.profilePic
                                    ? data?.profilePic
                                    : theme === 'dark'
                                    ? leaderboardDark
                                    : profilePicImg
                                }
                                alt=""
                              />
                            </div>
                            <div className="f-b margin-left col-md-4 col-4">
                              {data.name?.length > 20
                                ? `${data.name.substring(0, 6)}...${data.name.substring(
                                    data.name.length - 6,
                                    data.name.length,
                                  )}`
                                : data.name}
                            </div>
                            <div className="margin-left col-md-4 col-4">
                              {data?.stakingTime} Days streaks{' '}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </TabPane>
            </TabContent>
          </TabContainer>
        </div>
        {buyNowmodal && <BuyBtnModal closeModal={() => setBuyModal(false)} />}

        <div className="faq-section container-fluid">
          <div className="faq">
            <div className="heading-text">FAQs</div>
            <div className="mt-3">
              <FAQsData />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTYProtocol;
