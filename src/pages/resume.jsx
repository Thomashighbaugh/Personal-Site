import React from 'react';
import Layout from '../components/Layout';
import Obfuscate from 'react-obfuscate';
import PageTransition from 'gatsby-plugin-page-transitions';
class Resume extends React.Component {
  render() {
    return (
      <PageTransition>
      <Layout>
        <div id="resume">
          <div className="card-resume">
              <section>
            <div className="resume-head col-10 mt-5 offset-1">
              <h1 className="card-title font-weight-bold col-9">
                Thomas Leon Highbaugh
              </h1>
              <h2 className="card-subtitle ml-4 col-11">
                Software Engineer &amp; Freelance IT Professional
              </h2>
            </div>
            <div id="content" className="card-body offset-2">
              <section id="basics">
                <div className="contact card-title">
                  <h2 className="card-subtitle">Contact</h2>

                  <div className="contact">
                    <strong>Website: </strong>
                    <a href="http://thomasleonhighbaugh.me">thomasleonhighbaugh.me</a>
                  </div>
                  <div className="contact">
                    <strong>Email: </strong>
                    <Obfuscate email="thighbaugh@zoho.com" />
                  </div>
                  <div className="contact">
                    <strong>Phone: </strong>
                    <Obfuscate tel="510-907-0654" />
                  </div>
                </div>
                <div className="summary">
                  <h3>About</h3>
                  <p>
                    A self-taught software developer with an eye for design and
                    a passion for Linux.
                  </p>
                </div>
              </section>
                <section className="btn-group" id="profiles">
                  <h2 className="card-subtitle">Internet Profiles & Personal Sites</h2>
                  <a
                    className="nav-btn"
                    href="http://linkedin.com/in/thomas-leon-highbaugh"
                  >
                    LinkedIn
                  </a>

                  <a
                    className="nav-btn"
                    href="https://github.com/Thomashighbaugh"
                  >
                    GitHub
                  </a>
                  <a className="nav-btn" href="https://dribbble.com/thighbaugh">
                    Dribbble
                  </a>
                  <a className="nav-btn" href="https://gitlab.com/thighbaugh">
                    GitLab
                  </a>
                  <a className="nav-btn" href="https://instagram.com/tlh-resurgens">
                  Instagram
                  </a>
                  <a className="nav-btn" href="https://gitlab.com/thighbaugh">
Blog                  </a>
                  <a className="nav-btn" href="https://gitlab.com/thighbaugh">
Gallery                  </a>

              </section>

              <section className="col-10" id="work">
                <h2 className="card-title font-weight-bold resume-head">
                  Work
                </h2>
                <div className="item">
                  <h3 className="work_name">Freelance</h3>

                  <div className="work_position">Web Developer</div>

                  <div className="work_date">
                    <span className="startDate">2018-03-15</span>
                    <span className="endDate">- present</span>
                  </div>

                  <div className="work_website">
                    <a className="nav-btn" href="https://thomasleonhighbaugh.me">
                      https://thomasleonhighbaugh.me
                    </a>
                  </div>

                  <ul className="highlights">
                    <li>
                      Designing and coding websites for customers from the
                      ground up
                    </li>
                    <li>
                      Developing customer relationships and responding to
                      customer inquiries
                    </li>
                    <li>
                      Keeping ahead of industry trends while continuing
                      education about web-related technologies
                    </li>
                    <li>
                      Vigilant market research and analysis of the competition
                    </li>
                  </ul>
                </div>
                <hr />
                <div className="item">
                  <h3 className="work_name">Freelance</h3>

                  <div className="work_position">
                    Computer Repair Technician
                  </div>

                  <div className="work_date">
                    <span className="startDate">2018-02-18</span>
                    <span className="endDate">- present</span>
                  </div>

                  <div className="work_website">
                    <a className="nav-btn" href="https://thomasleonhighbaugh.me">
                      https://thomasleonhighbaugh.me
                    </a>
                  </div>

                  <ul className="highlights">
                    <li>
                      Troubleshooting PCs that are not performing as expected
                    </li>
                    <li>
                      Educating customers about routine PC maintanence and
                      security
                    </li>
                    <li>
                      Designing and implementing PC builds based on customer
                      budgets and desired use cases
                    </li>
                    <li>
                      Marketing and customer relationship development to
                      maintain stream of work
                    </li>
                    <li>
                      Learning and keeping tabs on personal and commercial
                      electronic markets
                    </li>
                    <li>
                      Market research to keep abilities in sync with customer
                      needs
                    </li>
                  </ul>
                </div>
                <hr />
                <div className="item">
                  <h3 className="work_name">Pet Food Express: Blackhawk</h3>

                  <div className="work_position">Assistant Manager IV</div>

                  <div className="work_date">
                    <span className="startDate">2012-05-13</span>
                    <span className="endDate">- 2018-04-19</span>
                  </div>

                  <div className="work_website">
                    <a className="nav-btn" href="https://petfoodexpress.com">
                      https://petfoodexpress.com
                    </a>
                  </div>

                  <ul className="highlights">
                    <li>
                      Educating customers about holistic pet foods and how to
                      appropriately use them
                    </li>
                    <li>
                      Staff development and consultation to ensure corporate
                      standards are complied with
                    </li>
                    <li>
                      Setting mood of the staff and maintaining a customer-first
                      atmosphere
                    </li>
                    <li>
                      Assisting store manager in daily cash and store operations
                    </li>
                    <li>Ensuring store is tidy and stocked at all times</li>
                    <li>
                      Managing customer comments and concerns with sensitivity
                      and promptness
                    </li>
                  </ul>
                </div>
              </section>
              <hr className="hr offset-2 col-8" />
              <section className="col-10" id="volunteer">
                <h2 className="card-title font-weight-bold resume-head">
                  Volunteer
                </h2>
                <div className="item">
                  <h3 className="company">South Hayward Parish</h3>

                  <div className="work_position">Volunteer</div>
                  <div className="summary">
                    <p>
                      A small homeless shelter in Hayward, California that
                      leverages volunteer work and community donations to help
                      the needy
                    </p>
                  </div>
                  <ul className="highlights">
                    <li>
                      Assisted in rehabilitating old PCs for resident use in job
                      seeking
                    </li>
                    <li>
                      Stocking kitchen with fresh donations from local grocery
                      stores
                    </li>
                    <li>Assisting residents in using PCs to find jobs</li>
                    <li>
                      Talking to residents and relaying positive messages to
                      keep them motivated
                    </li>
                  </ul>
                </div>
              </section>
              <hr className="hr offset-2 col-8" />
              <section className="col-10" id="education">
                <h2 className="card-title font-weight-bold resume-head">
                  Education
                </h2>
                <div className="item">
                  <div className="institution">Codify Academy</div>

                  <div className="study_date">
                    <span className="startDate">2018-02-14</span>
                    <span className="endDate">- 2018-05-30</span>
                  </div>

                  <ul className="courses">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Javascript</li>
                    <li>Vue</li>
                    <li>Restful APIs</li>
                    <li>Front End Design</li>
                    <li>Git</li>
                    <li>Web Development Workflows</li>
                  </ul>
                  <div className="gpa">
                    <span>GPA 4.0</span>
                  </div>
                </div>
                <hr />
                <div className="item">
                  <div className="institution">
                    Las Positas/Chabot Community College
                  </div>

                  <div className="study_date">
                    <span className="startDate">2018-02-14</span>
                    <span className="endDate">- 2018-05-30</span>
                  </div>

                  <ul className="courses">
                    <li>HTML5/CSS3</li>
                    <li>Linux</li>
                    <li>C++</li>
                    <li>Java</li>
                    <li>Javascript</li>
                    <li>Ethical Hacking</li>
                  </ul>
                  <div className="gpa">
                    <span> GPA 4.0</span>
                  </div>
                </div>
                <hr />
                <div className="item">
                  <div className="institution">
                    California State University East Bay (unrelated major)
                  </div>

                  <div className="study_date">
                    <span className="startDate">2009-09</span>
                    <span className="endDate">- 2014-04</span>
                  </div>

                  <ul className="courses">
                    <li>C++</li>
                    <li>Linux</li>
                    <li>Java</li>
                    <li>Logic</li>
                    <li>Economics (Macro)</li>
                  </ul>
                  <div className="gpa">
                    <span> GPA 3.7</span>
                  </div>
                </div>
              </section>
              <hr className="hr offset-2 col-8" />
              <section id="skills" className="flex-column col-10">
                <h2 className="card-title font-weight-bold resume-head">
                  Skills
                </h2>
                <div className="item">
                  <div className="card-title font-weight-bold">
                    Web Development
                  </div>
                  <ul className="keywords">
                    <li>HTML5 &amp; CSS3</li>
                    <li>Javascript, JSX, Node &amp; React</li>
                    <li>PHP, LAMP &amp; MySQL</li>
                    <li>Python &amp; Perl</li>
                    <li>SASS, SCSS &amp; Less</li>
                    <li>BASH, ZSH &amp; Shell Scripting</li>
                  </ul>
                </div>
                <div className="item">
                  <div className="card-title font-weight-bold">
                    Linux Systems Administration
                  </div>
                  <ul className="keywords">
                    <li>BASH</li>
                    <li>ZSH</li>
                    <li>Linux</li>
                    <li>Ansible</li>
                    <li>SSH</li>
                    <li>Virtualization</li>
                    <li>Containers</li>
                  </ul>
                </div>
                <div className="item">
                  <div className="card-title font-weight-bold">
                    Hardware Configuration &amp; Repair
                  </div>
                  <ul className="keywords">
                    <li>Windows</li>
                    <li>macOS</li>
                    <li>Linux</li>
                    <li>Server</li>
                    <li>Component Installation</li>
                    <li>Troubleshooting</li>
                  </ul>
                </div>{' '}
                <div className="item">
                  <div className="card-title font-weight-bold">
                    {' '}
                    Linux Development{' '}
                  </div>
                  <ul className="keywords">
                    <li>BASH Shell Scripting</li>
                    <li>Electron Platform</li>
                    <li>Linux Configuration (aka dotfiles)</li>
                    <li>C++</li>
                  </ul>
                </div>
              </section>
              <hr className="col-8 offset-2 d-block hr" />

              <section id="languages" className="flex-column col-10">
                <h2 className="card-title font-weight-bold resume-head">
                  Languages
                </h2>
                <div className="item">
                  <div className="language card-title">English</div>
                  <div className="level">
                    <em>Native speaker</em>
                  </div>
                </div>
                <div className="item">
                  <div className="language card-title">Spanish</div>
                  <div className="level">
                    <em>Conversational</em>
                  </div>
                </div>
                <div className="item">
                  <div className="language card-title">German</div>
                  <div className="level">
                    <em>Basic</em>
                  </div>
                </div>
              </section>
              <hr className="col-9 hr" />

              <section className="col-10 flex-column" id="interests">
                <h2 className="card-title font-weight-bold resume-head">
                  Interests
                </h2>
                <div className="item">
                  <div className="card-title font-weight-bold">
                    Photography &amp; Digital Art
                  </div>
                  <ul className="keywords">
                    <li>Neon Noir</li>
                    <li>Cityscapes</li>
                    <li>Unrecognized Beauty</li>
                  </ul>
                </div>
                <div className="item">
                  <div className="card-title font-weight-bold">
                    Self Education
                  </div>
                  <ul className="keywords">
                    <li>Technology</li>
                    <li>Self Improvement</li>
                    <li>Self Led Learning</li>
                  </ul>
                </div>
              </section>


              <section id="references" className="col-10 flex-column">
                <h2 className="card-title font-weight-bold resume-head">
                  References
                </h2>
                <div className="item">
                  <div className="card-title font-weight-bold">
                    Kenneth Gary - Peer
                  </div>

                  <blockquote><Obfuscate  className="reference" tel="1-510-875-9086"/></blockquote>
                </div>
                <div className="item">
                  <div className="card-title font-weight-bold">
                    Tim Weiland - Customer
                  </div>
                  <blockquote className="reference"><Obfuscate  className="reference" tel="1-650-773-4744"/></blockquote>
                </div>
                <div className="item last-item">
                  <div className="card-title font-weight-bold">
                    Austin Blaylock - Employee
                  </div>
                  <blockquote>
                    <Obfuscate  className="reference" tel="1-925-337-2712" /></blockquote>
                </div>
              </section>
              <br className="col-8 offset-2 d-block hr" />
            </div>
              </section>
          </div>
        </div>
      </Layout>
      </PageTransition>
    );
  }
}

export default Resume;
