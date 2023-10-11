"use client";
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const MedicalContact = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = 'service_ounkmaj';
    const templateID = 'template_v3vcmss';
    const userID = 'Q45Drc10lrcAw0vE_';

    const name = e.target.name.value;
    const email = e.target.email.value;
    const contact = e.target.contact.value;
    const position = e.target.position.value;
    const country = e.target.country.value;
    const message = e.target.message.value;

    const templateParams = {
      name,
      email,
      contact,
      message,
      position,
      country,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setIsSuccess(true);

        // Reset the form fields
        e.target.reset();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  const validateEmail = (event) => {
    const email = event.target.value;
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (event) => {
    const phone = event.target.value;
    // Phone number validation for India with optional country code +91 and exactly 10 digits
    const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
    const isNumeric = /^\d+$/;

    return isNumeric.test(phone) && phoneRegex.test(phone);
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Any Queries? Contact Us Now
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                We will get back to you ASAP.
              </p>
              <form onSubmit={sendEmail}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className={`w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp ${
                          !validateEmail && 'border-red-500'
                        }`}
                        required
                        onBlur={validateEmail}
                      />
                      {!validateEmail && (
                        <p className="text-sm text-red-500 mt-1">Invalid email address</p>
                      )}
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="contactNumber"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Contact Number
                      </label>
                      <input
                        pattern='[0-9]{10}'
                        type="tel"
                        name="contact"
                        placeholder="Enter contact number"
                        className={`w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp ${
                          !validatePhone && 'border-red-500'
                        }`}
                        required
                        onBlur={validatePhone}
                      />
                      {!validatePhone && (
                        <p className="text-sm text-red-500 mt-1">Invalid phone number</p>
                      )}
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="position"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Interested Job Position
                      </label>
                      <textarea
                        name="position"
                        rows={1}
                        placeholder="Eg: OT Nurse"
                        className={`w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp`}
                        required
                      />
                      <span className='text-xs'>If multiple positions, please seperate by comma</span>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="country"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Interested Country
                      </label>
                      <textarea
                        name="country"
                        rows={1}
                        placeholder="Eg: England"
                        className={`w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp`}
                        required
                      />
                      <span className='text-xs'>If multiple countries, please seperate by comma</span>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      value="send"
                      className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              {isSuccess && (
                <div className="mt-4 text-green-600">
                  Email sent successfully! We'll get back to you soon.
                </div>
              )}
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            {/* <NewsLatterBox /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalContact;
