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
            Besides school and work, I probably spend 50% of my time playing video games and messing around with stuffs. I have wasted around 4000 hrs in DOTA2, written some small mods for Terraria, trying to build my homelab, and more!
          </p>
          <p>
            I want to share a little bit about myself, as well as posting blogs (tech, game recommendations, and some other stuff) on this site, just as somewhat of a journal, and something that I could reflect back on. 
          </p>
        </section>

        <section className="service">

          <h3 className="h3 service-title">Stuff I Enjoy Doing Recently</h3>

          <ul className="service-list">

            <li className="service-item">

              <div className="service-icon-box">
                <img src="icons/system-design-icon.svg" alt="design-icon" width="40"/>
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
                <img src="icons/code-square-icon.svg" alt="code-icon" width="45"/>
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Building Infogrep</h4>

                <p className="service-item-text">
                  Infogrep is an open source RAGaaS (Retrieval Augmented Generation as a Service) project.
                </p>
              </div>

            </li>

            <li className="service-item">

              <div className="service-icon-box">
                <img src="icons/controller-icon.svg" alt="controller-icon" width="45"/>
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Games I'm on</h4>

                <p className="service-item-text">
                  Dota2, Diablo 4, Slay the Spire. Trying to start BG3.
                </p>
              </div>

            </li>

            <li className="service-item">

              <div className="service-icon-box">
                <img src="icons/eight-ball-icon.svg" alt="eight-ball-icon" width="40"/>
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Pool and Ping Pong</h4>

                <p className="service-item-text">
                  I enjoy playing pool (8-ball) and ping pong quite a bit, unfortunately not really too good at either of it though.
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