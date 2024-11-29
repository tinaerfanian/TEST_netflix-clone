import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-muted bg-dark text-light py-3">
      <div className="bg-dark border-top-secondary py-5">
        <div className="row">
          <div className="col-12 col-md-4 mb-4">
            <h3 className="h5 mb-3">Company</h3>
            <ul className="lista">
              <li><a href="#" className="text-secondary text-decoration-non">About us</a></li>
              <li><a href="#" className="text-secondary text-decoration-non">Jobs</a></li>
              <li><a href="#" className="text-secondary text-decoration-non">Press</a></li>
              <li><a href="#" className="text-secondary text-decoration-non">Blog</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-4 mb-4">
          <h3 className="h5 mb-3">Support</h3>
          <ul className="lista">
              <li><a href="#" className="text-secondary text-decoration-non">Help center</a></li>
              <li><a href="#" className="text-secondary text-decoration-non">Contact us</a></li>
              <li><a href="#" className="text-secondary text-decoration-non">Supported device</a></li>
              <li><a href="#" className="text-secondary text-decoration-non">Accesibility</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-4 mb-4">
          <h3 className="h5 mb-3">Legal</h3>
          <ul className="lista">
              <li><a href="#" className="text-secondary text-decoration-non">Terms of use</a></li>
              <li><a href="#" className="text-secondary text-decoration-non">Privacy Policy</a></li>
              <li><a href="#" className="text-secondary text-decoration-non">Cookies</a></li>
              <li><a href="#" className="text-secondary text-decoration-non">Corporate info</a></li>
            </ul>
          </div>

        </div>
      </div>
      <p>&copy; 1997-2023 Netflix, Inc.</p>
    </footer>
  );
};

export default Footer;
