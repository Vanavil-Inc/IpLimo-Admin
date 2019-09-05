import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="page-footer font-small blue">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="footer-info">
                <div className="section-title">
                  <h2>Inspire Power Pte Ltd</h2>
                </div>
                <label className="footer-label">
                  1 COLEMAN STREET, #10-06 THE ADELPHI SINGAPORE (179803)
                </label>

                <div className="copyright-text">
                  <label className="footer-label">
                    Copyright © 2019 IpLimo
                  </label>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="footer-info">
                <div className="section-title">
                  <h2 className="footer-label">Contact Info</h2>
                </div>
                <address>
                  <p className="footer-label"> +65 8332 6318 / 9295 3535</p>
                  <p>
                    <a href="mailto:sample@iplimo.sg">sample@iplimo.sg</a>
                  </p>
                </address>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
