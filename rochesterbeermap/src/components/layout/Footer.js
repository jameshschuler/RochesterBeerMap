import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer orange darken-1">
      <div className="footer-copyright orange darken-1">
        <div className="container">
          <div className="row">
            <div className="col s12 center">
              <h4 className="grey-text text-lighten-4">Rochester Beer Map</h4>
              <h6 className="grey-text text-lighten-4">
                Helping beer lovers explore Rochester's amazing beer scene.
              </h6>
              <h6 className="grey-text text-lighten-4">
                <i className="far fa-envelope fa-fw mr" />
                contact@rochesterbeermap.com
              </h6>
              <h6>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grey-text text-lighten-4"
                  href="http://www.jamesschuler.io"
                >
                  By James Schuler
                </a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
