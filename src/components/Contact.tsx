import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:sakshichauhan8806@gmail.com" data-cursor="disable">
                sakshichauhan8806@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>BBA (FIA) pursuing Delhi University (2023 - 2026)</p>
          </div>
          <div className="contact-box">
            <h4>Phone</h4>
            <a href="tel:9354216385" data-cursor="disable" className="contact-social">
              9354216385 <MdArrowOutward />
            </a>
            <h4>Address</h4>
            <p style={{ marginTop: '10px' }}>
              Near Hindon Airforce,<br />Mohan Nagar Ghaziabad
            </p>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Sakshi Chauhan</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
