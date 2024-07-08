import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-row pb-5 "></div>
        <div className="footer-content ">
          <div className="col-xl-4 col-lg-4 mb-50">
            <div className="footer-widget">
              <div className="footer-text"></div>
              <div className="footer-social-icon">
                <a href="#">
                  <i className="fab fa-facebook-f facebook-bg"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter twitter-bg"></i>
                </a>
                <a href="#">
                  <i className="fab fa-google-plus-g google-bg"></i>
                </a>
              </div>
            </div>
            <div className="footer-container">
              <div className="flex flex-col gap-1 mt-5">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Recourses</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Gift Cards</a>
                    </li>
                    <li>
                      <a href="#">Find a Store</a>
                    </li>
                    <li>
                      <a href="#">Nike Journal</a>
                    </li>
                    <li>
                      <a href="#">Become a Member</a>
                    </li>
                    <li>
                      <a href="#">Student Discount</a>
                    </li>
                    <li>
                      <a href="#">Feedback</a>
                    </li>
                    <li>
                      <a href="#">Promo Codes</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-1 mt-5">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Help</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Gift Cards</a>
                    </li>
                    <li>
                      <a href="#">Find a Store</a>
                    </li>
                    <li>
                      <a href="#">Nike Journal</a>
                    </li>
                    <li>
                      <a href="#">Become a Member</a>
                    </li>
                    <li>
                      <a href="#">Student Discount</a>
                    </li>
                    <li>
                      <a href="#">Feedback</a>
                    </li>
                    <li>
                      <a href="#">Promo Codes</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-1 mt-5">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Company</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Gift Cards</a>
                    </li>
                    <li>
                      <a href="#">Find a Store</a>
                    </li>
                    <li>
                      <a href="#">Nike Journal</a>
                    </li>
                    <li>
                      <a href="#">Become a Member</a>
                    </li>
                    <li>
                      <a href="#">Student Discount</a>
                    </li>
                    <li>
                      <a href="#">Feedback</a>
                    </li>
                    <li>
                      <a href="#">Promo Codes</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading"></div>
                <div className="footer-text mb-25">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <button>
                      <i className="fab fa-telegram-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2024, All Right Reserved{" "}
                  <a href="https://codepen.io/anupkumar92/">Nike</a>
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Policy</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
