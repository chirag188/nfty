/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { MikeNash, AlanTietel } from '../../../assets/images';
// import ShowCaseSlider from '../ShowCaseSlider/ShowCaseSlider';

/* eslint-disable arrow-body-style */
const UserDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const data = [
  //   {
  //     name: 'NFT Title',
  //     profilePic:
  //       'https://c8.alamy.com/comp/2CG1M9N/dark-tunnel-with-bright-colored-neon-lights-empty-black-space-for-text-blurry-reflections-on-the-floor-abstract-black-background-3d-rendering-imag-2CG1M9N.jpg',
  //     id: 1,
  //   },
  //   {
  //     name: 'NFT Title',
  //     profilePic:
  //       'https://c8.alamy.com/comp/2CG1M9N/dark-tunnel-with-bright-colored-neon-lights-empty-black-space-for-text-blurry-reflections-on-the-floor-abstract-black-background-3d-rendering-imag-2CG1M9N.jpg',
  //     id: 2,
  //   },
  //   {
  //     name: 'NFT Title',
  //     profilePic:
  //       'https://c8.alamy.com/comp/2CG1M9N/dark-tunnel-with-bright-colored-neon-lights-empty-black-space-for-text-blurry-reflections-on-the-floor-abstract-black-background-3d-rendering-imag-2CG1M9N.jpg',
  //     id: 3,
  //   },
  //   {
  //     name: 'NFT Title',
  //     profilePic:
  //       'https://c8.alamy.com/comp/2CG1M9N/dark-tunnel-with-bright-colored-neon-lights-empty-black-space-for-text-blurry-reflections-on-the-floor-abstract-black-background-3d-rendering-imag-2CG1M9N.jpg',
  //     id: 4,
  //   },
  //   {
  //     name: 'NFT Title',
  //     profilePic:
  //       'https://c8.alamy.com/comp/2CG1M9N/dark-tunnel-with-bright-colored-neon-lights-empty-black-space-for-text-blurry-reflections-on-the-floor-abstract-black-background-3d-rendering-imag-2CG1M9N.jpg',
  //     id: 5,
  //   },
  // ];

  const { userId } = useParams();
  return (
    <>
      {userId === 'mike-nash' ? (
        <>
          <div className="user-details" style={{ textAlign: 'center' }}>
            <Link
              to={`/family/${'artist-overview'}`}
              className="back_arrow"
              style={{ display: 'flex', textDecoration: 'none' }}
            >
              <i
                className="fa fa-angle-left mt-2"
                aria-hidden="true"
                style={{ zoom: 2, paddingLeft: '1vw' }}
              />
            </Link>
            <div className="heading-text">Mike Nash</div>
            <div className="mt-2">
              <a
                style={{ textDecoration: 'none' }}
                href="https://www.youtube.com/watch?v=ZZ5iQD2VeU0 "
                target="_blank"
                rel="noreferrer"
              >
                NFTY Founding Artist Series - Michael Nash
              </a>
            </div>
          </div>

          <div className="user-details">
            <div className="about-us-container">
              <div className="row w-100">
                <div className="col-md-12">
                  <div className="ceo-msg" style={{ marginTop: 0 }}>
                    <div className="message-section">
                      <div className="normal-text">
                        <p>
                          Also known as “Nash,” is a mixed media digital artist and filmmaker living
                          in Nashville/Los Angeles. In 2010 Moviemaker Magazine called Nash one of
                          the Top Ten Filmmakers For The Planet.
                        </p>
                        <p>
                          His art collections are fueled by society's endless quest for
                          decentralization globally, giving power to the masses.
                        </p>
                        <p>
                          Nash has been painting for decades and creating digital art for over a
                          decade. His work is collected privately throughout the world, including
                          several celebrities.
                        </p>
                        <p>
                          Nash is the founder of Beverly Hills Production, what he calls "a habitat
                          for creative addiction.
                        </p>
                        <p>
                          Mike has already created several NFTs of his paintings, and you can find
                          them on many of the top NFT marketplaces.
                        </p>
                        <div
                          className="mt-4 mb-3 link displayauto"
                          style={{ justifyContent: 'flex-start' }}
                        >
                          <div className="fa-userlink">
                            <a
                              className="user_details_link"
                              href="https://www.facebook.com/michael.nash1"
                              rel="noreferrer"
                              target="_blank"
                            >
                              <i className="fa fa-facebook-square" aria-hidden="true" />
                              michael.nash1
                            </a>
                          </div>
                          <div className="fa-userlink">
                            <a
                              className="user_details_link"
                              href="https://twitter.com/realmichaelnash"
                              rel="noreferrer"
                              target="_blank"
                            >
                              <i className="fa fa-twitter-square" aria-hidden="true" />
                              @realmichaelnash
                            </a>
                          </div>
                          <div className="fa-userlink">
                            <a
                              className="user_details_link"
                              href="https://www.instagram.com/realmichaelnash/"
                              rel="noreferrer"
                              target="_blank"
                            >
                              <i className="fa fa-instagram" aria-hidden="true" />
                              @realmichaelnash
                            </a>
                          </div>
                          <div className="fa-userlink">
                            <a
                              className="user_details_link"
                              href="https://nashartist.com"
                              rel="noreferrer"
                              target="_blank"
                            >
                              <i className="fa fa-link" aria-hidden="true" />
                              nashartist.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img className="artist-img" src={MikeNash} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="user-details">
            <Link
              to={`/family/${'artist-overview'}`}
              className="back_arrow"
              style={{ display: 'flex', textDecoration: 'none' }}
            >
              <i
                className="fa fa-angle-left mt-2"
                aria-hidden="true"
                style={{ zoom: 2, paddingLeft: '1vw' }}
              />
            </Link>
            <div className="heading-text">Alan Tietel</div>
            <div className="mt-2">
              <a
                style={{ textDecoration: 'none' }}
                href="https://www.youtube.com/watch?v=45SDzH_51D8"
                target="_blank"
                rel="noreferrer"
              >
                NFTY Founding Artist Series - Alan Teitel
              </a>
            </div>
          </div>
          <div className="user-details">
            <div className="about-us-container">
              <div className="row w-100">
                <div className="col-md-12">
                  <div className="ceo-msg" style={{ marginTop: 0 }}>
                    <div className="message-section">
                      <div className="normal-text">
                        <p>
                          Alan Teitel is a two-time Emmy Award Winner and 6-time nominee and has
                          been an innovator in the imaging industry for over 40 years. He served as
                          a blue-ribbon panelist for the National Academy of Arts and Sciences
                          including being selected to sit on the technical committee. He has
                          developed technology for his own use and other companies also.
                        </p>
                        <p>
                          Alan has shared videos over half a billion times online and has been
                          involved in productions for all the major outlets such as ABC, CBS, NBC,
                          Discovery, Fox, The Science Channel, The history channel, and many online
                          outlets also.
                        </p>
                        <p>
                          As covid kept many of us at home he found time to experiment with images
                          in ways he’d put off for many years. The results are here, and he’s
                          sharing them as NFT’s!
                        </p>
                        <div
                          className="mt-4 mb-3 link displayauto"
                          style={{ justifyContent: 'flex-start' }}
                        >
                          <div className="fa-userlink">
                            <a
                              className="user_details_link"
                              href="https://www.facebook.com/alan.teitel.1"
                              rel="noreferrer"
                              target="_blank"
                            >
                              <i className="fa fa-facebook-square" aria-hidden="true" />
                              alan.teitel.1
                            </a>
                          </div>
                          <div className="fa-userlink">
                            <a
                              className="user_details_link"
                              href="https://twitter.com/ultraSlo"
                              rel="noreferrer"
                              target="_blank"
                            >
                              <i className="fa fa-twitter-square" aria-hidden="true" />
                              @UltraSlo
                            </a>
                          </div>
                          <div className="fa-userlink">
                            <a
                              className="user_details_link"
                              href="https://www.instagram.com/ultraSlo"
                              rel="noreferrer"
                              target="_blank"
                            >
                              <i className="fa fa-instagram" aria-hidden="true" />
                              @UltraSlo
                            </a>
                          </div>
                          <div className="fa-userlink">
                            <a
                              className="user_details_link"
                              href="http://www.ultraSlo.com"
                              rel="noreferrer"
                              target="_blank"
                            >
                              <i className="fa fa-link" aria-hidden="true" />
                              www.ultraSlo.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img className="artist-img" height="321px" src={AlanTietel} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* <div className="user-details" style={{ textAlign: 'center' }}>
        <div className="heading-text">Show Case</div>
        <ShowCaseSlider data={data} />
      </div> */}
    </>
  );
};

export default UserDetails;
