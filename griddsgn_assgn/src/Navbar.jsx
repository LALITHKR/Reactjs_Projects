import React from "react";
const Navbar = () => {
  return (
    <>
      <header>
    
        <div className="head-container">
        
          <div className="logobox">
            <div className="logo">EDYODA</div>
            <i className="logo-caption">Stories</i>
          </div>
          

          <div className="dropdown">
            <label htmlFor="lists">Explore Categories</label>
            <select name="catlog" id="lists">
              <option value=""></option>
              <option value="AI" id="#AI">
                Artifitial Inteligence
              </option>
              <option value="CloudComputing" id="CloudComputing">
                Cloud Computing
              </option>
              <option value="DevOps" id="DevOps">
                DevOps
              </option>
              <option value="programminglanguages" id="programminglanguages">
                Programming languages
              </option>
              <option value="mobileappdevelopment" id="mobileappdevelopment">
                Mobile Application Development
              </option>
              <option value="technology-tools" id="technology_tools">
                Technology and tools
              </option>
              <option value="getjob" id="getjob">
                Get a Job in Tech Company
              </option>

              <option value="others">Others</option>
            </select>
          </div>
          

          <div className="headinfo">
            EdYoda is free learning and knowledge sharing platform for techies
          </div>
          <div className="button">
            <button className="gotobtn">
              <a href="https://www.edyoda.com/home" target="_blank">
                Go To Main Website
              </a>
            </button>
          </div>
          
        </div>
        
      </header>
    </>
  );
};

export default Navbar;
