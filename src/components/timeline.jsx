import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Timeline</span>
                <h2 className="colorlib-heading animate-box">Work experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Incoming Software Development Intern at Datadog <span> New York NY, Fall 2020</span></h2>
                        <p>Will start in August and last until December 2020. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Incoming Software Development Intern at Amazon<span> Seattle WA, Summer 2020</span></h2>
                        <p>Will start in May and last until August 2020.</p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineering Intern at MassMutual <span> Boston MA, Summer 2019</span></h2>
                        <p>Technologies used: Swift, Gitflow, Jira, Confluence, Java</p>
                        <p>Worked as part of MassMutual's Mobile team working on their RetireSmart iOS app to develop screens for their Investment Selections feature.
                          Also developed MassMutual's first iMessage app to calculate retirement trajectory (More information in the Projects section)
                        </p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineering Intern at Eaton <span> Kalamazoo MI, Summer 2018</span></h2>
                        <p>Technologies used: ASP.NET, SQL, C#, Azure DevOps, Entity Framework</p> 
                        <p>Worked as part of Eaton's Vehicle Group to develop a RESTful API that accesses Eaton's truck fleet server. 
                          This API was implemented in ASP.NET and deployed on Azure. 
                          Also built an accompanying SDK library as a platform for accessing the API. Used Entity Framework to connect to Eaton's SQL Server.</p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineering Intern at JHU Applied Physics Lab <span> Laurel MD, Summer 2017</span></h2>
                        <p>Technologies used: Python, MATLAB, Pointwise, </p>
                        <p>Worked as part of the Applied Physics Lab's Force Projection Sector to develop base drag prediction tool in Python and MATLAB. 
                          Analyzed base drag effects due to protuberances on projectiles using computational fluid dynamics and modeled these effects in Pointwise.</p> 
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
