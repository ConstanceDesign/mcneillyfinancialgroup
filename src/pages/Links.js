import React from 'react';
import './Links.css'; // Ensure you create and link this CSS file

const Links = () => {
    return (
      <div className="container">
        <h1 className="title">Useful Links</h1>
        
        <h2 className="subtitle">Mutual Fund Companies</h2>
        <ul className="list">
          <li classname="item"><a href="https://www.agf.com" target="_blank" rel="noopener noreferrer">AGF</a></li>
          <li classname="item"><a href="https://www.aic.com" target="_blank" rel="noopener noreferrer">AIC Group of Funds</a></li>
          <li classname="item"><a href="https://www.aimfunds.com" target="_blank" rel="noopener noreferrer">AIM</a></li>
          <li classname="item"><a href="https://www.cifunds.com" target="_blank" rel="noopener noreferrer">CIFunds</a></li>
          <li classname="item"><a href="https://www.dynamic.ca" target="_blank" rel="noopener noreferrer">Dynamic Mutual Funds</a></li>
          <li classname="item"><a href="https://www.fidelity.ca" target="_blank" rel="noopener noreferrer">Fidelity Investments</a></li>
          <li classname="item"><a href="https://www.mackenzieinvestments.com" target="_blank" rel="noopener noreferrer">Mackenzie</a></li>
          <li classname="item"><a href="https://www.templeton.com" target="_blank" rel="noopener noreferrer">Templeton</a></li>
        </ul>
  
        <h2 className="subtitle">Industry Groups</h2>
        <ul className="list">
          <li classname="item"><a href="https://www.fpsc.ca" target="_blank" rel="noopener noreferrer">Financial Planners Standards Council (FPSC)</a></li>
          <li classname="item"><a href="https://www.ific.ca" target="_blank" rel="noopener noreferrer">Investment Fund Institute of Canada (IFIC)</a></li>
          <li classname="item"><a href="https://www.advocis.ca" target="_blank" rel="noopener noreferrer">Advocis: The Financial Advisors Association of Canada</a></li>
          <li classname="item"><a href="https://www.cprp.ca" target="_blank" rel="noopener noreferrer">Canadian Association of Pre-Retirement Planners</a></li>
          <li classname="item"><a href="https://www.fpanet.org" target="_blank" rel="noopener noreferrer">The Financial Planning Association (USA)</a></li>
          <li classname="item"><a href="https://www.mfda.ca" target="_blank" rel="noopener noreferrer">Mutual Fund Dealers Association (MFDA)</a></li>
        </ul>
  
        <h2 className="subtitle">Financial Information</h2>
        <ul className="list">
          <li classname="item"><a href="https://www.fundlibrary.com" target="_blank" rel="noopener noreferrer">Fund Library</a></li>
          <li classname="item"><a href="https://www.stockformation.com" target="_blank" rel="noopener noreferrer">Stock Formation</a></li>
          <li classname="item"><a href="https://www.morningstar.com" target="_blank" rel="noopener noreferrer">Morningstar</a></li>
          <li classname="item"><a href="https://www.globefund.com" target="_blank" rel="noopener noreferrer">Globefund</a></li>
          <li classname="item"><a href="https://www.quicken.com" target="_blank" rel="noopener noreferrer">Quicken</a></li>
          <li classname="item"><a href="https://www.cannex.com" target="_blank" rel="noopener noreferrer">CANNEX</a></li>
          <li classname="item"><a href="https://www.investorlearning.ca" target="_blank" rel="noopener noreferrer">Investor Learning Centre</a></li>
          <li classname="item"><a href="https://www.cra-arc.gc.ca" target="_blank" rel="noopener noreferrer">Canada Customs and Revenue Agency</a></li>
        </ul>
  
        <h2 className="subtitle">Personal Finance</h2>
        <ul className="list">
          <li classname="item"><a href="https://www.retireweb.com" target="_blank" rel="noopener noreferrer">RetireWeb</a></li>
          <li classname="item"><a href="https://www.canoe.com" target="_blank" rel="noopener noreferrer">Canoe</a></li>
          <li classname="item"><a href="https://www.yahoo.com/finance" target="_blank" rel="noopener noreferrer">Yahoo Finance</a></li>
          <li classname="item"><a href="https://www.canada.com" target="_blank" rel="noopener noreferrer">Canada.com</a></li>
          <li classname="item"><a href="https://www.50plus.ca" target="_blank" rel="noopener noreferrer">50 Plus</a></li>
        </ul>

      </div>
    );
  };
  
  export default Links;