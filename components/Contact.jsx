import React from "react";

export default function Contact() {
  return (
    <div className="anik-page-content-wrap">
      <div className="section-wrapper pl-60 pr-60 pt-60">
        <div className="anik-page-title-wrap mb-15">
          <h2 className="page-title">contact</h2>
        </div>
      </div>

      <div className="section-wrapper pr-60 pl-60 mb-60">
        <div className="contact-area bg-light-white-2">
          <h5 className="contact-title">
            I'm always open to discussing produuct
          </h5>
          <h5 className="">Design, Work or Partnerships.</h5>
          <form className="contact-form">
            <div className="form-input-item mb-12">
              <label className="input-lebel name">name *</label>
              <input name="name" className="input-box name h-6" type="text" />
            </div>
            <div className="form-input-item mb-12">
              <label className="input-lebel gmail">Email *</label>
              <input name="email" className="input-box gmail" type="Email" />
            </div>
            <div className="form-input-item mb-12">
              <label className="input-lebel message">Message *</label>
              <textarea
                name="message"
                className="input-box message"
                cols="20"
                rows="5"
              ></textarea>
            </div>
            <div className="form-btn-wrap">
              <button type="submit" value="Send" className="form-btn">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
