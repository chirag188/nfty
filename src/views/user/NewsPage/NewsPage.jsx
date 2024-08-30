/* eslint-disable */
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import ShowMoreText from 'react-show-more-text';
import { NewsPageImg } from '../../../assets/images';
const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  function executeOnClick(isExpanded) {
        console.log(isExpanded);
    }
  const makeAPICall = () => {
    axios
      .get(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@NFTYToken`)
      .then(res => {
        const responce = res.data.items;
        setNewsData(responce);
      });
  };
  useEffect(() => {
    makeAPICall();
  }, []);
  return (
    <>
      <div className="news-heading">
        <div className="heading-text">News</div>
        <div className="news-img">
          <img src={NewsPageImg} alt="" />
        </div>
      </div>
      <div className="news container">
        <div className="news-container">
          <div className="">
            {newsData &&
              newsData?.map((data, index) => (
                <div className="container newsBox mt-3" key={index}>
                  <div className="">
                    <div className="head-text">{data?.title}</div>
                    <div className="date-text">{moment(data?.pubDate).format('MMM-DD-YYYY')}</div>
                  </div>
                  <div className="normal-text mt-2">
                    <ShowMoreText
                      /* Default options */
                      lines={3}
                      more="Show more"
                      less="Show less"
                      className="content-css"
                      anchorClass="my-anchor-css-class"
                      onClick={executeOnClick}
                      expanded={false}
                      truncatedEndingComponent={'...'}
                    >
                     
                    <div dangerouslySetInnerHTML={{ __html: data?.content }} />
                    </ShowMoreText>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
