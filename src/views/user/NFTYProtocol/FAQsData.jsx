import axios from 'axios';
import { useEffect, useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

/* eslint-disable arrow-body-style */
const FAQsData = () => {
  const [faqData,setFaqData]=useState()
   const makeAPICall = () => {
     axios.get(`https://nfty.zendesk.com/api/v2/help_center/en-us/articles.json`).then(res => {
       const responce = res.data;
       setFaqData(responce);
     });
   };
   useEffect(()=>{
makeAPICall();
   },[])
  function CustomToggle({ children, eventKey }) {
    // eslint-disable-next-line no-console
    const decoratedOnClick = useAccordionButton(eventKey, () => console.log('totally custom!'));
    return (
      <button type="button" className="plus-btn" onClick={decoratedOnClick}>
        {children}
      </button>
    );
  }
  return (
    <>
      <Accordion defaultActiveKey="0">
        {faqData?.articles?.filter((el) => el.section_id !== 4408303648531).map((items, index) => (
          <>
            <div key={items.id}>
              <div className="d-flex justify-content-space-between">
                <div className="f-18 mt-3">{items?.title}</div>
                <CustomToggle eventKey={index + 1}>+</CustomToggle>
              </div>
              <Accordion.Collapse eventKey={index + 1}>
                <Card.Body dangerouslySetInnerHTML={{ __html: items?.body }} />
              </Accordion.Collapse>
            </div>
            <hr />
          </>
        ))}
      </Accordion>
    </>
  );
};

export default FAQsData;
