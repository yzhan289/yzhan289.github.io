import React, { Component } from 'react';

export default class OnCampus extends Component {
  render() {
    let styles = {
      width: '100px',
      height: '100px'
    };
    return (
      <div>

        <section className="colorlib-about" data-section="oncampus">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">On Campus</span>
                <h2 className="colorlib-heading">Here's what I do for fun</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <img src="images/hophacks.png" style={styles} alt='hophacks'/>
                  <div className="desc">
                  
                  <h3>HopHacks</h3>
                  <p>I am the current director at my school's hackathon organizing group, HopHacks. I manage a team of 20+ other students to run a hackathon attended by over 300 students from around the world. It's been a really fun experience, and I'm excited for the future of HopHacks. Look forward to our next events!</p>
                   
                  <a href="https://www.hophacks.com/" >HopHacks website</a>
                  </div>
                </div>
              </div>
							<div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <img src="images/iac_logo.png" style={styles} alt='iac'/>
                  <div className="desc">
                  
                    <h3>Inter-Asian Council</h3>
                    <p>I am part of Johns Hopkins University's Inter-Asian Council (IAC). We serve as a medium for Asian Pacific groups at Hopkins to collaborate and to work together towards shared goals and causes. 
                      Every semester, we host events that promote the discussion of AAPI/APIA identiy.</p>
                    <a href="https://www.facebook.com/jhuIAC/" >IAC Facebook Page</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <img src="images/husam_logo.png" style={styles} alt='husam'/>
                  <div className="desc">
                    <h3>Hopkins Undergraduate Society for Applied Math</h3>
                    <p>I am a member of HUSAM, which serves as Hopkins' Applied Math Club. 
                      Our group aims to connect students with faculty members in the AMS department to strengthen the Applied Math Program at our institution.
                      We host various social events throughout the semester, as well as speakers series featuring renowned mathematicians.</p>
                      <a href="https://www.facebook.com/husam.at.hopkins/" >HUSAM Facebook Page</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
