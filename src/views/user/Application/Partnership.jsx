/* eslint-disable prefer-template */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-boolean-value */

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';

/* eslint-disable arrow-body-style */
const Application = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [disabledValue, setDisabledValue] = useState(true);
  const checkboxRef = useRef();
  const validationSchema = Yup.object({
    name: Yup.string().required('Please enter name'),
    email: Yup.string().email('Please enter correct email').required('Email is Required'),
    phone: Yup.string().trim().min(10, 'Minimum length 9').max(11, 'Maximum length 10'),
    companyName: Yup.string().required('Please enter Company Name'),
    companyWebsite: Yup.string().required('Please enter Company Website'),
    partnershipOpp: Yup.string().required('Please enter Your bio'),
  });
  const checkBoxhandler = () => {
    setDisabledValue(!disabledValue);
  };
  const onSubmitForm = async (values, resetForm) => {
    const { name, email, companyName, companyWebsite, phone, partnershipOpp } = values;
    const phoneNumber = '+' + phone[0] + ' ' + phone.slice(1, phone.length);
    try {
      await axios.post(`${process.env.REACT_APP_EMAIL_SEND_API}/partner`, {
        name,
        email,
        phoneNumber,
        companyName,
        companyWebsite,
        oppurtinityText: partnershipOpp,
      });
      toast.success('Application for Partnership submitted successfully');
      resetForm();
      setDisabledValue(true);
      // toast.success(response.data.msg);
    } catch (error) {
      toast.error(error.response.data.err_msg);
    }
  };
  const formRef = useRef();
  const onSubmitClick = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };
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
                  <div className="head-text">Let’s Collaborate</div>
                  <div className="normal-text mt-1">
                    As a startup, we understand the importance of partnerships and welcome the
                    opportunity to collaborate with other entities to create unique offerings within
                    the space. If you have a project, idea, or would like to discuss the integration
                    of the NFTY Protocol into your marketplace, please complete the “Let’s
                    Collaborate” form below. A member of our team will review your message and
                    schedule a collaborative session.
                  </div>
                </div>
                <Formik
                  initialValues={{
                    name: '',
                    email: '',
                    phone: '1',
                    companyName: '',
                    companyWebsite: '',
                    partnershipOpp: '',
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    validationSchema.validate(values);
                    onSubmitForm(values, resetForm);
                    setSubmitting(false);
                    resetForm();
                    checkboxRef.current.checked = false;
                    setDisabledValue(!disabledValue);
                  }}
                >
                  {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <form className="form_application quick-contact" onSubmit={handleSubmit}>
                      <div className="application_filed">
                        <div>
                          <label>Name</label>
                        </div>
                        <div>
                          <input
                            type="text"
                            style={{ background: 'white' }}
                            name="name"
                            placeholder="Enter your first and last name"
                            className="form-control"
                            onChange={e => {
                              const re = /^[A-Za-z ']+$/;
                              if (e.target.value === '' || re.test(e.target.value)) handleChange(e);
                            }}
                            value={values.name}
                          />
                          <div className="error">{errors.name && touched.name && errors.name}</div>
                        </div>
                      </div>
                      <div className="application_filed">
                        <div>
                          <label>Email Address</label>
                        </div>
                        <div>
                          <input
                            type="text"
                            name="email"
                            placeholder="Enter your email address"
                            className="form-control"
                            onChange={handleChange}
                            value={values.email}
                          />
                          <div className="error">
                            {errors.email && touched.email && errors.email}
                          </div>
                        </div>
                      </div>
                      <div className="application_filed">
                        <PhoneInput
                          countryCodeEditable={false}
                          country="us"
                          inputProps={{
                            name: 'phone',
                            required: true,
                          }}
                          onChange={value => {
                            const event = {};
                            event.target = {};
                            event.target.name = 'phone';
                            event.target.value = value;
                            handleChange(event);
                          }}
                          value={values.phone}
                          specialLabel="Phone Number"
                          placeholder="Enter your Phone number including the country and area codes"
                        />
                        <div className="error">{errors.phone && touched.phone && errors.phone}</div>
                      </div>
                      <div className="application_filed">
                        <div>
                          <label>Company name</label>
                        </div>
                        <div>
                          <input
                            type="text"
                            placeholder="Enter your Username"
                            style={{ background: 'white' }}
                            className="form-control"
                            onChange={handleChange}
                            name="companyName"
                            value={values.companyName}
                          />
                          <div className="error">
                            {errors.companyName && touched.companyName && errors.companyName}
                          </div>
                        </div>
                      </div>
                      <div className="application_filed">
                        <div>
                          <label>Company Website</label>
                        </div>
                        <div>
                          <input
                            type="url"
                            placeholder="https://www.xyz.com"
                            style={{ background: 'white' }}
                            className="form-control"
                            name="companyWebsite"
                            onChange={handleChange}
                            value={values.companyWebsite}
                          />
                          <div className="error">
                            {errors.companyWebsite &&
                              touched.companyWebsite &&
                              errors.companyWebsite}
                          </div>
                        </div>
                      </div>
                      <div className="application_filed">
                        <div>
                          <label>Partnership opportunity</label>
                        </div>
                        <div>
                          <textarea
                            type="text"
                            rows="4"
                            placeholder="Start typing your bio here"
                            className="form-control"
                            name="partnershipOpp"
                            style={{ background: 'white' }}
                            onChange={handleChange}
                            value={values.partnershipOpp}
                          />
                          <div className="error">
                            {errors.partnershipOpp &&
                              touched.partnershipOpp &&
                              errors.partnershipOpp}
                          </div>
                        </div>
                      </div>
                      <div
                        className="application_filed"
                        style={{ display: 'flex', alignItems: 'center' }}
                      >
                        <input
                          ref={checkboxRef}
                          type="checkbox"
                          style={{ zoom: 1.6, marginRight: 8 }}
                          onChange={checkBoxhandler}
                        />
                        <div>
                          I accept{' '}
                          <Link className="footer-link f-14" to="/terms-and-condition">
                            Terms & Conditions
                          </Link>{' '}
                          and{' '}
                          <Link className="footer-link f-14" to="/privacy-policy">
                            Privacy Policy
                          </Link>
                        </div>
                      </div>
                      <div className="application_filed">
                        <button
                          type="submit"
                          className={'submit-btn ' + (disabledValue && 'disabled')}
                          disabled={disabledValue}
                          onClick={onSubmitClick}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Application;
