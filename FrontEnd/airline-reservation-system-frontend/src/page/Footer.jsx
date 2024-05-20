import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="custom-footer-bg">
      <div className="container my-5">
        <footer className="text-center text-lg-start text-color">
          <div className="container-fluid p-4 pb-0">
            <section>
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color">
                    Airline Reservation System
                  </h5>
                  <p>
                    Welcome to our Airline Reservation System, where seamless
                    travel planning and exhilarating adventures meet. Embark on
                    a journey of convenience as you navigate our user-friendly
                    platform to explore an array of flights, destinations, and
                    class options.
                  </p>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color-4">About us</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-color">
                        <i className="fab fa-facebook-f me-2"></i> Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-color">
                        <i className="fab fa-instagram me-2"></i> Instagram
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-color">
                        <i className="fab fa-youtube me-2"></i> Youtube
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-color">
                        <i className="fab fa-linkedin-in me-2"></i> LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color-4">Contact us</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-color">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-color">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-color">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-color">
                        Link 4
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color-4">Careers</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-color">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-color">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-color">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-color">
                        Link 4
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color-4">Links</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-color">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-color">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-color">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-color">
                        Link 4
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="text-center">
            © 2024 Copyright :
            <a
              className="text-color-3"
              href="https://github.com/Smrutisudha13/Airline-ticket-booking/tree/main/FrontEnd/airline-reservation-system-frontend"
            >
              Smrutisudha Senapati
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
