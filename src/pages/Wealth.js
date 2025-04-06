import React from 'react';
import './Wealth.css'; // Ensure you create and link this CSS file

const Wealth = () => {
  return (
    <div className="container">
      <h1 className="title">Why Should I Save?</h1>
      <p className="description">
        Saving is essential for several reasons, including:
      </p>
      <ul className="list">
        <li className="item">Protection Against the Unforeseen & Uncontrollable</li>
        <li className="item">Risk of Inflation Depleting Savings</li>
        <li className="item">Decreased Government Pensions</li>
        <li className="item">Assist in Acquiring and Growing Assets</li>
        <li className="item">Supplement Other Sources of Income</li>
      </ul>

      <h2 className="subtitle">What Type of Investments Are Available?</h2>
      <ul className="list">
        <li className="item">GICs</li>
        <li className="item">Bonds</li>
        <li className="item">Segregated Funds</li>
        <li className="item">Mutual Funds</li>
        <li className="item">Labour Sponsored Funds</li>
        <li className="item">RRSPs, Group RRSPs</li>
        <li className="item">RESPs</li>
        <li className="item">Universal Life</li>
      </ul>

      <h2 className="subtitle">What Aspects of Investment Planning Can an Investment Professional Assist Me With?</h2>
      <p className="description"><strong>An investment professional can help you with the following:</strong>
      </p>
      <ul className="list">
        <li className="item">Setting Objectives: helping you and your family decide on your investment objectives and ranking them in order of importance</li>
        <li className="item">Setting Goals: financial, lifestyle, business, personal</li>
        <li className="item">Optimize Tax Situation: consider various alternatives and their tax implications now and in the future</li>
        <li className="item">Help you Gauge your Risk Level: help you determine your risk tolerance and select investments within your comfort level both financially and emotionally</li>
        <li className="item">Provide Additional Resources: provide access to diverse investment vehicles and comprehensive investment and tax knowledge</li>
        <li className="item">Monitoring: periodically review investments to monitor their progress and if they are still meeting your needs, also changing investments during different stages of your life as your needs and goals change</li>
      </ul>
    </div>
  );
};

export default Wealth;