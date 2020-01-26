import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li>
              {/* <li style={{backgroundImage: 'url(images/pastel2.jpg)'}}> */}
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Welcome! <br />I'm Andrew</h1>
                          <p><a className="btn btn-primary btn-learn" href="pdf/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume <i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
              {/* <li style={{backgroundImage: 'url(images/pastel2.jpg)'}}> */}
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I love building<br />software</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/yzhan289" target="_blank" rel="noopener noreferrer">View GitHub <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
              {/* <li style={{backgroundImage: 'url(images/pastel2.jpg)'}}> */}
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Connect <br></br>with me</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://www.linkedin.com/in/yzhan289/" target="_blank" rel="noopener noreferrer">View LinkedIn <i className="icon-book" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
