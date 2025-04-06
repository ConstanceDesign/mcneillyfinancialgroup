import React from 'react';
import './Footer.css';

const Footer = () => {
const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>The contents of this website do not constitute an offer or solicitation for residents in the United States or in any other jurisdiction where either McNeilly Financial Group and/ or Sterling Mutuals is not registered or permitted to conduct business. Mutual funds provided through Sterling Mutuals Inc. Commissions, trailing commissions, management fees and expenses all may be associated with mutual fund investments. Please read the prospectus carefully before investing. Mutual funds are not guaranteed, their values fluctuate frequently, and past performance may not be repeated.</p>
      <p>McNeilly Financial Group provides insurance products, and other related financial services as independent insurance agents, and is not the business of, or monitored by Sterling Mutuals Inc.</p>

      <div className="footer-links">
        <a href="/legal">Legal Information</a> |
        <a href="/privacy">Privacy Information</a> |
        <a href="/complaint">How To Make a Complaint</a> |
        <a href="/investor-protection">Investor Protection Corporation</a> |
        <a href="/account-opening">Account Opening Information</a>
      </div>

      <p>&copy; {currentYear} Patrick McNeilly Financial Planning. All Rights Reserved.</p>

      <div className="footer-logo">
        <img src="/path-to-sterling-logo.png" alt="Sterling Mutuals Inc." />
      </div>
    </footer>
  );
};

export default Footer;