/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-boolean-value */
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import PhoneInput from 'react-phone-input-2';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useSelector } from 'react-redux';

const initialValues = {
  name: '',
  email: '',
  phone: '+1',
  instagram: '',
  twitter: '',
  facebook: '',
  bio: '',
  website: '',
};
/* eslint-disable arrow-body-style */
const Application = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [disabledValue, setDisabledValue] = useState(true);
  const checkboxRef = useRef();
  const theme = useSelector(state => state.auth.theme);
  const validationSchema = Yup.object({
    name: Yup.string().required('Please enter name'),
    email: Yup.string().email('Please enter correct email').required('Email is Required'),
    phone: Yup.string().trim().min(10, 'Minimum length 9').max(11, 'Maximum length 10'),
    bio: Yup.string().required('Please let us know about yourself'),
    instagram: Yup.string().required('Please Enter Instagram Link'),
    twitter: Yup.string().required('Please Enter Twitter Link'),
    facebook: Yup.string().required('Please Enter facebook Link'),
  });
  const onSubmitForm = async (values, resetForm) => {
    const { name, email, facebook, bio, instagram, phone, twitter, website } = values;
    const phoneNumber = '+' + phone[0] + ' ' + phone.slice(1, phone.length);
    try {
      await axios.post(`${process.env.REACT_APP_EMAIL_SEND_API}/artist`, {
        name,
        email,
        bio,
        phoneNumber,
        fbLink: facebook,
        twitterLink: twitter,
        instaLink: instagram,
        website,
      });
      toast.success('Application for Artist submitted successfully');
      resetForm();
      setDisabledValue(true);
    } catch (error) {
      toast.error(error.response.data.err_msg);
    }
  };
  const checkBoxhandler = () => {
    setDisabledValue(!disabledValue);
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
                  <div className="head-text">NFTY Artist Application</div>
                  <div className="normal-text mt-1">
                    Are you a traditional Artist or Creative looking to transform your works into
                    NFTs but aren’t sure how to get started? Or maybe you simply don’t have time to
                    learn the technical skills or want to. At NFTY Inc., we help traditional artists
                    and creatives crossover the bridge into the digital art world and the future
                    metaverse. We have high standards for the individuals we work with and offer a
                    White Glove NFT service. If you’re ready for a new adventure, complete the
                    application below for our team to review.
                  </div>
                </div>
                <Formik
                  initialValues={{
                    name: '',
                    email: '',
                    phone: '1',
                    instagram: '',
                    twitter: '',
                    facebook: '',
                    bio: '',
                    website: '',
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
                  {({ values, errors, touched, handleChange, handleSubmit }) => (
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
                            value={values.name}
                            onChange={e => {
                              const re = /^[A-Za-z ']+$/;
                              if (e.target.value === '' || re.test(e.target.value)) handleChange(e);
                            }}
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
                            value={values.email}
                            onChange={handleChange}
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
                          <label>Bio</label>
                        </div>
                        <div>
                          <textarea
                            type="text"
                            rows="4"
                            style={{ background: 'white' }}
                            name="bio"
                            placeholder="Start typing your bio here"
                            className="form-control"
                            onChange={handleChange}
                            value={values.bio}
                          />
                          <div className="error">{errors.bio && touched.bio && errors.bio}</div>
                        </div>
                      </div>
                      <div className="application_filed">
                        <div>
                          <label>Facebook</label>
                        </div>
                        <div>
                          <input
                            type="url"
                            name="facebook"
                            style={{ background: 'white' }}
                            placeholder="Enter your Username"
                            className="form-control"
                            onChange={handleChange}
                            value={values.facebook}
                          />
                          <div className="error">
                            {errors.facebook && touched.facebook && errors.facebook}
                          </div>
                        </div>
                      </div>
                      <div className="application_filed">
                        <div>
                          <label>Instagram</label>
                        </div>
                        <div>
                          <input
                            style={{ background: 'white' }}
                            type="url"
                            name="instagram"
                            placeholder="Enter your Username"
                            className="form-control"
                            onChange={handleChange}
                            value={values.instagram}
                          />
                          <div className="error">
                            {errors.instagram && touched.instagram && errors.instagram}
                          </div>
                        </div>
                      </div>
                      <div className="application_filed">
                        <div>
                          <label>Twitter</label>
                        </div>
                        <div>
                          <input
                            type="text"
                            name="twitter"
                            placeholder="Enter your Username"
                            className="form-control"
                            style={{ background: 'white' }}
                            onChange={handleChange}
                            value={values.twitter}
                          />
                          <div className="error">
                            {errors.twitter && touched.twitter && errors.twitter}
                          </div>
                        </div>
                      </div>
                      <div className="application_filed">
                        <div>
                          <label>Website</label>
                        </div>
                        <div>
                          <input
                            type="url"
                            placeholder="https://www.xyz.com"
                            style={{ background: 'white' }}
                            className="form-control"
                            name="website"
                            value={values.website}
                            onChange={handleChange}
                          />
                          <div className="error">
                            {errors.website && touched.website && errors.website}
                          </div>
                        </div>
                      </div>
                      <div
                        className="application_filed"
                        style={{ display: 'flex', alignItems: 'center' }}
                      >
                        <input
                          type="checkbox"
                          style={{ zoom: 1.6, marginRight: 8 }}
                          onChange={checkBoxhandler}
                          ref={checkboxRef}
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
