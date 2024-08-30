/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-boolean-value */

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import UserSlider from '../UserSlider/UserSlider';
import { MikeNash, AlanTietel } from '../../../assets/images';

const data = [
  {
    name: 'Mike Nash',
    profilePic: MikeNash,
    id: 'mike-nash',
    twitter: 'realmichaelnash',
    facebook: 'michael.nash1',
    instagram: 'realmichaelnash',
    website: 'https://nashartist.com',
    content:
      'Also known as “Nash,” is a mixed media digital artist and filmmaker living in Nashville/Los Angeles.  In 2010 Moviemaker Magazine called Nash one of the Top Ten Filmmakers For The Planet.',
  },
  {
    name: 'Alan Teitel',
    profilePic: AlanTietel,
    id: 'alan-teitel',
    twitter: 'ultraSlo',
    facebook: 'alan.teitel.1',
    instagram: 'ultraSlo',
    website: 'http://www.ultraSlo.com',
    content:
      'Alan Teitel is a two-time Emmy Award Winner and 6-time nominee and has been an innovator in the imaging industry for over 40 years. He served as a blue-ribbon panelist for the National Academy of Arts and Sciences including being selected to sit on the technical committee. He has developed technology for his own use and other companies also.',
  },
];

/* eslint-disable arrow-body-style */
const Overview = () => {
  const onSubmit = e => {
    e.preventDefault();
    toast.success('Application submitted successfully');
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [type, setType] = useState('Artists');
  const [URL, setURL] = useState('/family/artist-apply');

  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case '/family/partnerships-overview':
        setType('Partnerships');
        break;
      case '/family/ambassadors-overview':
        setType('Ambassadors');
        break;
      default:
        setType('Artists');
        break;
    }
    setURL(location.pathname.split('-')[0] + '-apply');
  }, [location.pathname]);
  return (
    <>
      <ToastContainer />
      <div className="aide">
        <div className="aide-head">
          <div className="governance-container">
            <div className="row w-100">
              <div className="col-md-12">
                <Link to="/family" className="back_arrow">
                  <i className="fa fa-angle-left" aria-hidden="true" style={{ zoom: 2 }} />
                </Link>
                <div id="proposal" className="pt-4 application-header">
                  <div className="head-text">{type}</div>
                  <div className="normal-text mt-1">
                    Artist are the heart of our project. The inspiration behind our entire NFTY
                    platform has been motivated by creatives and our desire to bridge complicated
                    technologies and culture.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {type === 'Artists' && <UserSlider data={data} type={type} />}
        {/* {type === 'Partnerships' && <UserSlider data={data} type={type} />}
        {type === 'Ambassadors' && <UserSlider data={data} type={type} />} */}
      </div>
      <div className="aide">
        <div className="aide-head">
          <div className="governance-container">
            <div className="row w-100">
              <div className="col-md-12">
                <div id="proposal" className="pt-2 application-header">
                  <div className="displayauto" style={{ alignItems: 'center' }}>
                    <div className="beone">Be one of them...</div>
                    <Link to={URL} className="buy-btn applynow" style={{ marginLeft: 18 }}>
                      Apply
                    </Link>
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

export default Overview;
