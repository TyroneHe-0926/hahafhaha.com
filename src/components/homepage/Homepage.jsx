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
            I'm a Software Engineer interested in DevOps, SRE, and Distributed Systems.
          </p>
          <p>
            I am a Software Engineering alumni of the University of UWaterloo.
          </p>
          <p>
            I am currently working as a full-time Site Reliability Engineer at Electronic Arts.
          </p>
          <p>
            Besides school and work, I probably spend all of my time playing video games and messing around with tech stuff. I have wasted around 4000 hrs in DOTA2, 1000 hours in Terraria, currently got 500 hours in Baldur's Gate 3.
          </p>
          <p>
            I am pretty addicted to keyboards right now, check out my <a style={{display: "inline-block", color: "hsl(45, 100%, 72%)"}} href="https://www.notion.so/Keyboards-247da849867580dd8288d6930d0d48c8">keyboard collection</a>. I am also looking for inspirations and planning for a future basement homelab.
          </p>
          <p>
            hahafhaha.com is meant to be my portfolio website and I ocassionally update my blog posts here as well (random stuff). I do feel like blogs are great record keepers, I could always have something to reflect back on from time to time, they are also pretty fun to write,
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
                <h4 className="h4 service-item-title">Researching and Building My Homelab</h4>

                <p className="service-item-text">
                  Ah, there goes my money.
                </p>
              </div>

            </li>

            <li className="service-item">

              <div className="service-icon-box">
                <img src="icons/code-square-icon.svg" alt="code-icon" width="45"/>
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Vibe Coding</h4>

                <p className="service-item-text">
                  Building tons of useless projects with Claude Code :)
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
                  Baldur's Gate 3, Dota 2, Warhammer 40K Rouge Trader.
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
                  I enjoy playing pool (8-ball) and ping pong quite a bit, unfortunately trash at both.
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