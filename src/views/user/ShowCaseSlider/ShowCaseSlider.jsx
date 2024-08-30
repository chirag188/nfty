/* eslint-disable no-unused-expressions */
/* eslint-disable react/button-has-type */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const ShowCaseSlider = props => {
  const { data = null } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data?.map(item => (
        <div className="item showcase">
          <div className="art-text">
            <Link to={`/family/artist-overview/${item.id}`}>
              <div className="aide-head">
                <div className="w-100">
                  <div id="proposal" className="pt-4 application-header">
                    <img src={item.profilePic} alt="" />
                    <div className="head-text">{item.name}</div>
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

export default ShowCaseSlider;
