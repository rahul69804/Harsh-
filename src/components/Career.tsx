import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Purchase Executive</h4>
                <h5>Ankur lighting pvt ltd</h5>
              </div>
              <h3>August 2023 - Dec 2025</h3>
            </div>
            <ul style={{ paddingLeft: '20px', fontSize: 'var(--p1)', lineHeight: '1.5' }}>
              <li>Creating and managing purchase orders</li>
              <li>Following up with vendors for material and rates</li>
              <li>Handling vendor communication and rate contribution</li>
              <li>Managing files, documents, and purchase records</li>
              <li>Conducting material audits and keeping records updated</li>
              <li>Preparing reports and comparison sheets for management</li>
              <li>Working on Google Sheets for data and reports</li>
              <li>Using Tally Prime software for purchase voucher</li>
            </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Purchase Assistant</h4>
                <h5>Styleiin India Pvt Ltd</h5>
              </div>
              <h3>Apr 2023 - August 2023</h3>
            </div>
            <ul style={{ paddingLeft: '20px', fontSize: 'var(--p1)', lineHeight: '1.5', marginTop: '10px' }}>
              <li>Creating purchase orders and managing records</li>
              <li>Collecting vendor rates and handling negotiations</li>
              <li>Preparing rate comparison sheets for decision-making</li>
              <li>Managing files and documentation systematically</li>
              <li>Handling material requirement from start to end</li>
              <li>Updating inventory and material records using CMS software</li>
              <li>Writing professional emails and office communication</li>
              <li>Comfortable in English texting and daily follow-ups</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
