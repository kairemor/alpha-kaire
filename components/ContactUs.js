import React from "react";

function ContactUs() {
  return (
    <section className="contact_section " id="contactLink">
      <div className="map_container">
        <div id="googleMap"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="form_container">
              <h2>Get In touch</h2>
              <form action="">
                <div>
                  <input type="text" placeholder="Your Name" />
                </div>
                <div>
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div>
                  <input type="email" placeholder="Your Email" />
                </div>
                <div>
                  <input
                    type="text"
                    className="message-box"
                    placeholder="Message"
                  />
                </div>
                <div className="btn_box">
                  <button>SEND</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
