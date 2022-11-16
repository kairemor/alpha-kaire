import React from "react";

function ContactUs() {
  return (
    <section id="contact" className="contact_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="form_container">
              <h2>Nous Contacter</h2>
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
                  <button>Envoyer</button>
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
