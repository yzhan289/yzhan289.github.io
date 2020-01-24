import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/andrew.jpg)'}} />
              <h1 id="colorlib-logo"><a>Andrew Zhang</a></h1>
            </div>
            <br></br>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                  <li><a href="#oncampus" data-nav-section="oncampus">On Campus</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                </ul>
              </div>
            </nav>
            
            <div className="colorlib-footer">
              <p>Welcome to my site! </p>
            </div>

            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/yzhan289/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /> LinkedIn</a></li>
                <li><a href="https://github.com/yzhan289" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i> GitHub</a></li>
                <li><a href="mailto:yzhan289@jhu.edu" target="_blank" rel="noopener noreferrer"><i className="icon-mail"></i> Email</a></li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}
