/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/button-has-type */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const Carousel = props => {
  const { data = null, type = null } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 10000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 3,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data?.map(item => (
        <div className="item">
          <div className="art-text">
            <Link to={`/family/artist-overview/${item.id}`}>
              <div className="aide-head">
                <div className="w-100">
                  <div id="proposal" className="pt-4 application-header">
                    <img src={item.profilePic} alt="" />
                    <div className="head-text p-2">{item.name}</div>
                    <div className="normal-text mt-1">{item.content}</div>
                    <div className="mt-4 mb-3 link" onClick={e => e.stopPropagation()}>
                      {item?.twitter && (
                        <a href={`https://twitter.com/${item?.twitter}`} target="_blank">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      )}
                      {item?.facebook && (
                        <a href={`https://facebook.com/${item?.facebook}`} target="_blank">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      )}
                      {item?.instagram && (
                        <a href={`https://instagram.com/${item?.instagram}`} target="_blank">
                          <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                      )}
                      {item?.website && (
                        <a href={item?.website} target="_blank">
                          <i className="fa fa-link" aria-hidden="true" />
                        </a>
                      )}
                      {/* {type === 'Partnerships' && (
                        <>
                          <i className="fa fa-link" aria-hidden="true" />
                          <p>www.company.com</p>
                        </>
                      )}
                      {type === 'Ambassadors' && (
                        <>
                          <i className="fa fa-envelope" aria-hidden="true" />
                          <p>info@company.com</p>
                        </>
                      )} */}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
