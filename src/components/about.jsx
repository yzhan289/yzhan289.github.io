import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                      Welcome to my website! My name is Andrew, and I'm currently a junior studying computer science at Johns Hopkins University graduating Spring 2021.
                      You can typically spot me at the Brody Learning Commons procrastinating or trying the (limited) selection of boba in Baltimore!
                      </p><p>
                      I'm a big fan of software development. I've played with a variety of different languages, but I've just started learning web dev using React. 
                      This portfolio site is my first attempt at web dev. Let me know how this website looks! 
                      </p><p>
                      Catch me in Seattle this summer! I am an incoming software development intern at Amazon for Summer 2020.
                      After that, I will be in NYC interning at Datadog for Fall 2020!
                      </p>
                    </div>
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
