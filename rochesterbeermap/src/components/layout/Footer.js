import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer blue-grey">
      <div className="footer-copyright blue-grey">
        <div className="container">
          <div className="row">
            <div className="col s12 center">
              <h4>Rochester Beer Map</h4>
              <h6>
                An app designed to help Rochesterians and visitors explore
                Rochester's amazing beer scene.
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
