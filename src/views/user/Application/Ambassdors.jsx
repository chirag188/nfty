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
const Application = props => {
  const [disabledValue, setDisabledValue] = useState(true);
  const checkboxRef = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const validationSchema = Yup.object({
    name: Yup.string().required('Please enter name'),
    email: Yup.string().email('Please enter correct email').required('Email is Required'),
    phone: Yup.string().trim().min(10, 'Minimum length 9').max(11, 'Maximum length 10'),
  });
  const checkBoxhandler = () => {
    setDisabledValue(!disabledValue);
  };
  const onSubmitForm = async (values, resetForm) => {
    const { name, email, workTogether, phone } = values;
    const phoneNumber = '+' + phone[0] + ' ' + phone.slice(1, phone.length);
    try {
      await axios.post(`${process.env.REACT_APP_EMAIL_SEND_API}/ambassdors`, {
        name,
        email,
        phoneNumber,
        message: workTogether,
      });
      // toast.success(response.data.msg);
      toast.success('Application for Ambassdor submitted successfully');
      resetForm();
      setDisabledValue(true);
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
                  <div className="head-text">NFTY Ambassdors Application</div>
                  <div className="normal-text mt-1">
                    If you fit the description of a NFTY Ambassador, then we would love to hear from
                    you! Please complete the application below for consideration.
                  </div>
                </div>
                <Formik
                  initialValues={{
                    name: '',
                    email: '',
                    phone: '1',
                    workTogether: '',
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
                            style={{ background: 'white' }}
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
                          value={values.phone}
                          onChange={value => {
                            const event = {};
                            event.target = {};
                            event.target.name = 'phone';
                            event.target.value = value;

                            handleChange(event);
                          }}
                          specialLabel="Phone Number"
                          placeholder="Enter your Phone number including the country and area codes"
                        />
                        <div className="error">{errors.phone && touched.phone && errors.phone}</div>
                      </div>
                      <div className="application_filed">
                        <div>
                          <label>How can we work together</label>
                        </div>
                        <div>
                          <textarea
                            type="text"
                            onChange={handleChange}
                            style={{ background: 'white' }}
                            value={values.workTogether}
                            rows="4"
                            name="workTogether"
                            placeholder="Start typing your bio here"
                            className="form-control"
                          />
                          <div className="error">
                            {errors.workTogether && touched.workTogether && errors.workTogether}
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
                          onClick={onSubmitClick}
                          disabled={disabledValue}
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
