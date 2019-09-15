import React from 'react';
import Layout from '../components/Layout';
import Obfuscate from 'react-obfuscate';
import PageTransition from 'gatsby-plugin-page-transitions';
import SEO from '../components/SEO';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class Resume extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="[resume]"
          description="created from the output of JSONresume into HTML adapted into JSX, this is the live resume of TLH"
        />
        <Card>
          <div id="resume">
            <h1 className="card-title">Thomas Leon Highbaugh</h1>
            <h2 className="card-title-description">
              
              Web Developer &amp;&amp; Freelance IT Professional
            </h2>
            <div id="content" className="card-body offset-2">
              <Row className="row">
                <Col className="col" id="basics">
                  <section id="basics">
                    <div className="col-4">
                      <h2 className="card-subtitle">Contact</h2>
                    </div>
                    <div className="contact">
                      <strong>Website:</strong>
                      <a href="http://thomasleonhighbaugh.me">
                        thomasleonhighbaugh.me
                      </a>
                    </div>
                    <div className="contact">
                      <strong>Email: </strong>
                      <Obfuscate email="thighbaugh@zoho.com" />
                    </div>
                    <div className="contact">
                      <strong>Phone: </strong>
                      <Obfuscate tel="510-907-0654" />
                    </div>
                    <div className="profiles content-block">
                      <h2 className="card-subtitle">Internet Profiles</h2>
                      <a href="http://linkedin.com/in/thomas-leon-highbaugh">
                        LinkedIn
                      </a>

                      <a href="https://github.com/Thomashighbaugh">GitHub</a>
                      <a href="https://dribbble.com/thighbaugh">Dribbble</a>
                      <a href="https://gitlab.com/thighbaugh">GitLab</a>
                      <a href="https://instagram.com/tlh-resurgens">
                        Instagram
                      </a>
                      <a href="https://gitlab.com/thighbaugh">Blog </a>
                      <a href="https://gitlab.com/thighbaugh">Gallery </a>
                    </div>
                  </section>
                </Col>
                <Col className="col" id="summary">
                  <h3 className="card-subtitle">Summary</h3>
                  <p>
                    A self-taught software developer with an eye for design and
                    a passion for Linux, looking for a team to cultivate skills
                    while contributing to.
                  </p>
                </Col>
              </Row>
              <Row className="row" id="work">
                <h2 className="card-title-description">Work</h2>
                <Col className="col">
                  <h3 className="work-name">Freelance</h3>

                  <div className="work-position">Web Developer</div>

                  <div className="work-date">
                    <span className="startDate">2018-03-15</span>
                    <span className="endDate">- present</span>
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
                  <div className="work-website">
                    <a href="https://thomasleonhighbaugh.me">
                      https://thomasleonhighbaugh.me
                    </a>
                  </div>
                </Col>
                <Col className="col">
                  <h3 className="work-name">Freelance</h3>

                  <div className="work-position">
                    Computer Repair Technician
                  </div>

                  <div className="work-date">
                    <span className="startDate">2018-02-18</span>
                    <span className="endDate">- present</span>
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
                  <div className="work-website">
                    <a href="https://thomasleonhighbaugh.me">
                      https://thomasleonhighbaugh.me
                    </a>
                  </div>
                </Col>
                <Col className="col">
                  <h3 className="work-name">Pet Food Express: Blackhawk</h3>

                  <div className="work-position">Assistant Manager</div>

                  <div className="work-date">
                    <span className="startDate">2012-05-13</span>
                    <span className="endDate">- 2018-04-19</span>
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
                  <div className="work-website">
                    <a href="https://petfoodexpress.com">
                      https://petfoodexpress.com
                    </a>
                  </div>
                </Col>
                <Col className="col">
                  <h3 className="work-name">Volunteer</h3>

                  <div className="work-position">South Hayward Parish</div>
                  <div className="work-date">
                    <p>
                      
                      A local, community-run homeless shelter in Hayward,
                      California that leverages volunteer work and community
                      donations to help the needy
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
                  <div className="work-website">
                    <a href="http://southhaywardparish.org/">
                      http://southhaywardparish.org/
                    </a>
                  </div>
                </Col>
              </Row>
              <Row className="row" id="education">
                <h2 className="card-title-description">Education</h2>
                <Col className="col">
                  <div className="institution">Codify Academy</div>

                  <div className="study-date">
                    <span className="startDate">2018-02-14</span>
                    <span className="endDate">- 2018-05-30</span>
                  </div>

                  <ul className="highlights">
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
                </Col>
                <Col className="col">
                  <div className="institution">
                    Las Positas/Chabot Community College
                  </div>

                  <div className="study-date">
                    <span className="startDate">2018-02-14</span>
                    <span className="endDate">- 2018-05-30</span>
                  </div>

                  <ul className="highlights">
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
                </Col>
                <Col className="col">
                  <div className="institution">
                    California State University East Bay (unrelated major)
                  </div>

                  <div className="study-date">
                    <span className="startDate">2009-09</span>
                    <span className="endDate">- 2014-04</span>
                  </div>

                  <ul className="highlights">
                    <li>C++</li>
                    <li>Linux</li>
                    <li>Java</li>
                    <li>Logic</li>
                    <li>Economics (Macro)</li>
                  </ul>
                  <div className="gpa">
                    <span> GPA 3.7</span>
                  </div>
                </Col>

              </Row>
            <Row className="row" id="skills">
              <h2 className="card-title">Skills</h2>
              <Col className="col">
                <h3 className="category">
                  Web Development
                </h3>
                <ul className="highlights">
                  <li>HTML5 &amp; CSS3</li>
                  <li>Javascript, JSX, Node &amp; React</li>
                  <li>PHP, LAMP &amp; MySQL</li>
                  <li>Python &amp; Perl</li>
                  <li>SASS, SCSS &amp; Less</li>
                  <li>BASH, ZSH &amp; Shell Scripting</li>
                </ul>
              </Col>
              <Col className="col">
                <h3 className="category">
                  Linux Systems Administration
                </h3>
                <ul className="highlights">
                  <li>BASH</li>
                  <li>ZSH</li>
                  <li>Linux</li>
                  <li>Ansible</li>
                  <li>SSH</li>
                  <li>Virtualization</li>
                  <li>Containers</li>
                </ul>
              </Col>
              <Col className="col">
                <h3 className="category">
                  Hardware Configuration &amp; Repair
                </h3>
                <ul className="highlights">
                  <li>Windows</li>
                  <li>macOS</li>
                  <li>Linux</li>
                  <li>Server</li>
                  <li>Component Installation</li>
                  <li>Troubleshooting</li>
                </ul>
              </Col>
              <Col className="col">
                <h3 className="category">
                  Linux Development
                </h3>
                <ul className="highlights">
                  <li>BASH Shell Scripting</li>
                  <li>Electron Platform</li>
                  <li>Linux Configuration (aka dotfiles)</li>
                  <li>C++</li>
                </ul>
              </Col>
            </Row>
              <Row className="row" id="misc">
                <Col className="col" id="languages">
                  <h2 className="card-subtitle">Languages</h2>
                  <Row className="languages">
                    <Col>
                      <div className="language">English</div>
                      <div className="level">
                        <em>Native speaker</em>
                      </div>
                    </Col>
                    <Col>
                      <div className="language">Spanish</div>
                      <div className="level">
                        <em>Conversational</em>
                      </div>
                    </Col>
                    <Col>
                      <div className="language">German</div>
                      <div className="level">
                        <em>Basic</em>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col className="col" id="references">
                  <h2 className="card-subtitle">References</h2>
                  <Row className="people">
                    <Col>
                      <div className="name">English</div>
                      <div className="phone">
                        <em>Native speaker</em>
                      </div>
                    </Col>
                    <Col>
                      <div className="name">Spanish</div>
                      <div className="level">
                        <em>Conversational</em>
                      </div>
                    </Col>
                    <Col>
                      <div className="language">German</div>
                      <div className="level">
                        <em>Basic</em>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div></div>
        </Card>
      </Layout>
    );
  }
}

export default Resume;
