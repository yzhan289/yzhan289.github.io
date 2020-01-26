import React, { Component } from 'react';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Projects</span>
                <h2 className="colorlib-heading">Here are some of my projects</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-code" />
                  </span>
                  <div className="desc">
                    <h3>Project 1</h3>
										<p>Blah Blah</p>
                  </div>
                </div>
              </div>
							<div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-flag" />
                  </span>
                  <div className="desc">
                    <h3>Project 2</h3>
                    <p>Blah blah</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                  <span className="icon">
                    <i className="icon-power" />
                  </span>
                  <div className="desc">
                    <h3>Project 3</h3>
                    <p>Blah Blah</p>
                  </div>
                </div>
              </div>

							<div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                  <span className="icon">
                    <i className="icon-power" />
                  </span>
                  <div className="desc">
                    <h3>Project 4</h3>
                    <p>Blah Blah</p>
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
