import React, { useState } from "react";
import black__links from "../image/black__links.png";
import "../style/contact.css";
function Contact() {
  const [isInputActive, setInputActive] = useState(false);
  const [isInputActive2, setInputActive2] = useState(false);
  const [isInputActive3, setInputActive3] = useState(false);
  const [isButtonActive, setIsButtonAvtive] = useState(false);

  const handleFocus = () => {
    setInputActive(true);
  };

  const handleBlur = () => {
    setInputActive(false);
  };
  const handleFocus2 = () => {
    setInputActive2(true);
  };

  const handleBlur2 = () => {
    setInputActive2(false);
  };
  const handleFocus3 = () => {
    setInputActive3(true);
  };

  const handleBlur3 = () => {
    setInputActive3(false);
  };

  const handleButtonClick = () => {
    setIsButtonAvtive(!isButtonActive);
  };

  return (
    <section className="conact">
      <div className="container">
        <div className="contact__card">
          <h2>Get in Touch</h2>
          <div className="contact__item">
            <p>
              I’d love to hear about what you’re working on and how I could
              help. I’m currently looking for a new role and am open to a wide
              range of opportunities. My preference would be to find a position
              in a company in London. But I’m also happy to hear about
              opportunites that don’t fit that description. I’m a hard-working
              and positive person who will always approach each task with a
              sense of purpose and attention to detail. Please do feel free to
              check out my online profiles below and get in touch using the
              form.
            </p>
            <img src={black__links} alt="" />
          </div>
        </div>
        <div className="contact__card2">
          <h2>Contact Me</h2>
          <div className="contact__item2">
            <p>Name</p>
            <div className="contact__forms">
              <form
                className={
                  isInputActive || isButtonActive
                    ? "form-active"
                    : "button-active"
                }
              >
                <input
                  className={isInputActive ? "input-active" : "contact input"}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  type="text"
                  placeholder="Jane Appleseed"
                />
              </form>
            </div>
            <div className="contactItem4">
              <p>Email Address</p>
              <form
                className={
                  isInputActive2 || isButtonActive
                    ? "form-active2"
                    : "button-active"
                }
              >
                <input
                  className={isInputActive2 ? "input-active2" : ""}
                  onFocus={handleFocus2}
                  onBlur={handleBlur2}
                  type="email"
                  placeholder="Email Address"
                />
              </form>
            </div>
            <div className="contact__item3">
              <p>Message</p>
              <form
                className={
                  isInputActive3 || isButtonActive
                    ? "form-active3"
                    : "button-active"
                }
              >
                <input
                  className={isInputActive3 ? "input-active3" : ""}
                  onFocus={handleFocus3}
                  onBlur={handleBlur3}
                  type="text"
                  placeholder="How can I help?"
                />
              </form>
            </div>
            <button
              className={isButtonActive ? "" : ""}
              onClick={handleButtonClick}
            >
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
