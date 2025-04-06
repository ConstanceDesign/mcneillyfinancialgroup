import React from 'react';
import './Personal.css';

const Personal = () => {
  return (
    <div className="container">
      <h1 className="title">Personal Insurance Solutions</h1>
      <p className="description">
        At McNeilly Financial Group Inc., we find that each case is unique as circumstances differ for each individual, and the medical history of all is case sensitive. Without question, there is only so much in the budget to go towards insurance, and this is a major issue in addressing the needs fully.
      </p>
      <p className="description">
        This means that there are times when we cannot afford the best product for a specific requirement, and one should not commit greatly to any one type of insurance as this leaves some priorities left uncovered. Work with an advisor that takes the time to at least address the big picture, and note advisors have an obligation to do this.
      </p>
      <p className="description">
        Prioritize when tackling the issues, and we recommend considering living benefits first as the ratio of accident and sickness claims versus death claims is 9:1. Work with the budget and spread the coverage accordingly to fit the need. Review your insurance program on a regular basis, usually every 3 years or when change occurs. Keep pace with the times as products change for the good and the bad, and be wary of clauses within contracts that make the insurer the boss, not you.
      </p>
      <h2 className="subtitle">Take a look at these various areas of insurance and concerns for your personal needs:</h2>
      <ul className="list">
        <li className="item">Term Insurance</li>
        <li className="item">Critical Illness</li>
        <li className="item">Health Insurance</li>
        <li className="item">Disability Insurance</li>
        <li className="item">Mortgage Insurance</li>
        <li className="item">Permanent Insurance</li>
      </ul>
    </div>
  );
};

export default Personal;