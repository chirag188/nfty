/* eslint-disable  */
import Slider from 'react-slick';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  AdamAlonzi,
  chrisMillsImg,
  clintonMillsImg,
  edMillsImg,
  elvinChevry,
  JackCollins,
  JP,
  linkedinColored,
  Logo,
  SteveWood,
  twitterColored,
  chrissyCook,
} from '../../../assets/images';
import '../../../assets/slick/slick.css';
import '../../../assets/slick/slick-theme.css';
import DarkMode from '../../../assets/images/Group 533.png';
import reviewerImg5 from '../../../assets/images/reviewerImg5.png';

const teamMemberData = [
  {
    memberImage: chrisMillsImg,
    name: 'Chris Mills',
    position: 'CEO',
    description:
      'Multi award winning IT entrepreneur with 22 years experience dedicated to high-performing teams',
    twitterLink: 'https://twitter.com/ChrisMillsNFTY',
    linkedInLink: 'http://www.linkedin.com/in/chrisomills/',
  },
  {
    memberImage: edMillsImg,
    name: 'Ed Mills',
    position: 'CMO',
    description:
      'Impressive and passionate Hollywood talent manager and game designer with 7 Webby awards',
    twitterLink: 'https://twitter.com/EdMillsNFTY_CMO',
    linkedInLink: 'https://www.linkedin.com/in/edmills4/',
  },
  {
    memberImage: JP,
    name: 'JP Beaudet',
    position: 'CTO',
    description:
      'Tokenomics & privacy expert, early blockchain entrepreneur with many successful projects',
    twitterLink: 'https://twitter.com/JeanPhilippeBea',
    linkedInLink: 'https://www.linkedin.com/in/jean-philippe-beaudet-12472884/',
  },
  {
    memberImage: reviewerImg5,
    name: 'Baytop Scott',
    position: 'Director of Community Innovation',
    description:
      'Community innovation leader, bridging the worlds of technology and human experience',
    twitterLink: 'http://twitter.com/baytopscott',
    linkedInLink: 'https://www.linkedin.com/in/baytopscott/',
  },
  {
    memberImage: chrissyCook,
    name: 'Chrissy Cook',
    position: 'VP Partner Success',
    description:
      'Ethereum girl in a blockchain world, crypto thought-leader, consultant to multiple blockchain projects',
    twitterLink: 'https://twitter.com/cryptochrissy',
    linkedInLink: 'https://www.linkedin.com/in/chrissycook',
  },
  {
    memberImage: SteveWood,
    name: 'Steve Wood',
    position: 'COO',
    description:
      'Consultant, researcher, author, and executive behind multiple apps, aid projects, and US laws',
    twitterLink: 'https://twitter.com/stevewoodus',
    linkedInLink: 'https://www.linkedin.com/in/steve-saw',
  },
  {
    memberImage: clintonMillsImg,
    name: 'Clinton Mills',
    position: 'Chairman',
    description:
      'Top CEO Forbes Under 30 co-founding his marketing firm then expanding into the digital space',
    twitterLink: 'https://twitter.com/Clintonm9',
    linkedInLink: 'https://www.linkedin.com/in/millsclinton/',
  },
  {
    memberImage: AdamAlonzi,
    name: 'Adam Alonzi',
    position: 'CCO',
    description:
      'NFT artist, award winning filmmaker/author, and biotechnologist with multimedia expertise',
    twitterLink: 'https://twitter.com/Adam_Alonzi',
    linkedInLink: 'https://www.linkedin.com/in/adam-alonzi/',
  },
  {
    memberImage: JackCollins,
    name: 'Jake Collins',
    position: 'Advisor',
    description: 'Business Development and Partnerships',
    twitterLink: 'https://twitter.com/jakecollins',
    linkedInLink: 'https://www.linkedin.com/in/jakecollins007/',
  },
  {
    memberImage: elvinChevry,
    name: 'Evelyne Chevry',
    position: 'Advisor',
    description:
      'Entrepreneur, ai expert, hacker, and artist/dj with 25 years experience in emerging technologies',
    twitterLink: 'https://twitter.com/evelynechevry',
    linkedInLink: 'https://www.linkedin.com/in/evelyne-chevry-aba28a51/',
  },
];
const OurTeamData = () => {
  const { theme } = useSelector(state => state.auth);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [usedTheme, setUsedTheme] = useState(localStorage.getItem('theme'));
  useEffect(() => {
    setUsedTheme(localStorage.getItem('theme'));
  }, [usedTheme]);

  return (
    <>
      <Slider {...settings}>
        {teamMemberData.map((member, index) => (
          <div key={index + 1} className="team-member-card">
            <div>
              <img className="logo-img" src={theme === 'dark' ? DarkMode : Logo} alt="" />
            </div>
            <div className="d-flex mt-3">
              <div className="team-imgs">
                <img className="team-member-img" src={member.memberImage} alt="" />
              </div>
              <div className="team-member-name">
                <div className="f-b">{member.name}</div>
                <div className="f-14 opacity">{member.position}</div>
              </div>
            </div>
            <div className="f-14 mt-3">{member.description}</div>
            <div className="mt-3 d-flex">
              <a className="memberSocailBtn" href={member.twitterLink} target="_blank">
                <img
                  className="cursor-pointer"
                  src={twitterColored}
                  alt=""
                  style={{ marginRight: '16px' }}
                />
              </a>
              <a className="memberSocailBtn" href={member.linkedInLink} target="_blank">
                <img className="cursor-pointer" src={linkedinColored} alt="" />
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default OurTeamData;
