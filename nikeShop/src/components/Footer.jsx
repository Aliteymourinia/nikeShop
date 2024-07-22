import React from "react";
import "../styles/Footer.css";
import "../styles/ProductDetails.css";
const Footer = () => {
  return (
    <footer className="footer-section" id="Footer-Section">
      <div className="container">
        <div className="footer-row "></div>
        <div className="footer-content ">
          <div className="col-xl-4 col-lg-4 mb-50">
            <div className="footer-widget">
              <div className="footer-text"></div>
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
                      <a href="#">Get Help</a>
                    </li>
                    <li>
                      <a href="#">Order Status</a>
                    </li>
                    <li>
                      <a href="#">Shipping and Delivery</a>
                    </li>
                    <li>
                      <a href="#">Returns</a>
                    </li>
                    <li>
                      <a href="#"> Payment Options</a>
                    </li>
                    <li>
                      <a href="#">Reviews</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
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
                      <a href="#">About Nike</a>
                    </li>
                    <li>
                      <a href="#">News</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#"> Investors</a>
                    </li>
                    <li>
                      <a href="#"> Purpose</a>
                    </li>
                    <li>
                      <a href="#">Sustainability</a>
                    </li>
                    <li>
                      <a href="#">Tax</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading"></div>
                <div className="footer-text mb-25"></div>
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

      <div className="container">
        <div className="col-xl-6 col-lg-6 text-center text-lg-left"></div>
        <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
          <div className="footer-menu">
            <div className="copyright-text">
              <p>
                © 2024 Nike, Inc. All rights reserved{" "}
                <a href="https://codepen.io/anupkumar92/"></a>
              </p>
            </div>

            <ul>
              <li>
                <a href="#">Guides</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Terms of Sale</a>
              </li>
              <li>
                <a href="#">Privacy & Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
