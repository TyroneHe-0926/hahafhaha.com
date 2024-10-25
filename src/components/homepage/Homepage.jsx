import "./Homepage.css"

import Gallery from "../gallery/Gallery";

function Homepage() {
    return (
    <article className="about active" data-page="about">

        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
          <p>
            I'm a Software Engineer interested in DevOps, Site Reliability Engineering, and Distributed Systems.
          </p>
          <p>
            I am currently a 5th-year undergrad Software Engineering student at the University of Waterloo.
          </p>
          <p>
            I am also working as a full-time Site Reliability Engineer at Electronic Arts.
          </p>
          <p>
            Besides school and work, I probably spend 50% of my time gaming. I have wasted around 4000 hrs in DOTA2, written some small mods for Terraria, tried making my own Unity game, and more!
          </p>
          <p>
            I want to share a little bit about myself, as well as posting blogs (tech, game recommendations, and other stuff) on this site, just as somewhat of a journal, and something that I could reflect back on. 
          </p>
        </section>

        <section className="service">

          <h3 className="h3 service-title">Stuff I Enjoy Doing Recently</h3>

          <ul className="service-list">

            <li className="service-item">

              <div className="service-icon-box">
                <img src="images/system-design-icon.svg" alt="design-icon" width="40"/>
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Learning System Design</h4>

                <p className="service-item-text">
                  Intrigued in learning how complex large-scale distributed systems are designed and implemented.
                </p>
              </div>

            </li>

            <li className="service-item">

              <div className="service-icon-box">
                <img src="images/code-square-icon.svg" alt="code-icon" width="45"/>
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Working on Projects</h4>

                <p className="service-item-text">
                  Working on the final year capstone RAG project with my team and some infrastructre related personal projects.
                </p>
              </div>

            </li>

            <li className="service-item">

              <div className="service-icon-box">
                <img src="images/controller-icon.svg" alt="controller-icon" width="45"/>
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Games I'm on</h4>

                <p className="service-item-text">
                  Hades 2, Slay the Spire 2, Cult of the Lamb, Dota2, Dota2 Autochess.
                </p>
              </div>

            </li>

            <li className="service-item">

              <div className="service-icon-box">
                <img src="images/eight-ball-icon.svg" alt="eight-ball-icon" width="40"/>
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Eight-ball and Nine-ball</h4>

                <p className="service-item-text">
                  I love playing pool (8ball and 9ball), also got into pingpong not too long ago.
                </p>
              </div>

            </li>

          </ul>

        </section>

        <Gallery/>

    </article>
    )
}

export default Homepage;