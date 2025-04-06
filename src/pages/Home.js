import React from 'react';
import './Home.css'

const Home = () => {
  const handleContactClick = () => {
    // You can replace this URL with your contact page or form link
    window.location.href = '/contact';  // Or use a mailto link: window.location.href = 'mailto:youremail@example.com';
  };

  return (
    <div className="container">
      <h1 className="title">Welcome to Patrick McNeilly Financial Planning</h1>
      <p className="description">
        Patrick McNeilly and his network of associated advisors can provide a complete range of financial planning and product brokerage services. Some of the many services available include:
      </p>

      <ul className="list">
        <li className="item">Retirement Planning</li>
        <li className="item">Estate Planning</li>
        <li className="item">Tax Planning</li>
        <li className="item">Investments</li>
        <li className="item">Life Insurance</li>
        <li className="item">Disability Insurance</li>
        <li className="item">Education Savings Planning</li>
      </ul>

      <p className="description">Contact our offices to learn more.</p>

      {/* Replace the paragraph with a button */}
      <button onClick={handleContactClick}>Contact Us</button>


    </div>
  );
};

export default Home;