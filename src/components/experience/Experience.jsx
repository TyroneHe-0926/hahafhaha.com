import "./Experience.css"

function Experience() {
    return (
    <article className="resume" data-page="experience">

        <header>
          <h2 className="h2 article-title">Experience</h2>
        </header>

        <section className="timeline">

          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="briefcase-outline"></ion-icon>
            </div>

            <h3 className="h3">Work</h3>
          </div>

          <ol className="timeline-list">

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">Electronic Arts</h4>

              <span>Oct 2024 - Present</span>

              <p className="timeline-text">
                Started my first full-time job as a Site Reliability Engineer while finishing my last year of school. 
                Currently working as a part of EA's Production Infrastructure & Engineering team.
              </p>

            </li>

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">Trend Micro</h4>

              <span>May 2024 - Aug 2024</span>

              <p className="timeline-text">
                Site Reliability Engineer internship.
                Worked on various projects such as Slack notification and alerting for AWS service metrics, Jenkins to GitHub Action migration, an internal Kubernetes tutorial, x86 to ARM64 migration, and more.
              </p>

            </li>

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">RBC</h4>

              <span>Jan 2024 - Apr 2024</span>

              <p className="timeline-text">
                IAM Infrastructure internship.
                Designed and implemented a new CIAM auditing system with Okta and Ansible. Gained a lot of knowledge about windows server and Stonebranch scheduling as well.
              </p>

            </li>

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">BaixingAI</h4>

              <span>May 2023 - Aug 2023</span>

              <p className="timeline-text">
                Backend and Site Reliability Engineer internship. Worked on a LLM centralization and chatbot creation platform. Configured the infrastructure in a serverless k8s cluster. Designed and implemented chat protocal with SSE. Implemented a solution for developers to host their LLMs on the platform.
              </p>

            </li>

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">Big Shooter Golf</h4>

              <span>Sept 2022 - Dec 2022</span>

              <p className="timeline-text">
                Fullstack Developer internship.
                Worked on the cross-platform mobile app for a VR and blockchain based startup. Worked with React/StencilJS, and StorybookJS for the frontend stack. Worked with Flask and Quick Admin for the backend stack. 
              </p>

            </li>

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">Baixing.com (Former Kijiji China)</h4>

              <span>Jan 2021 - Dec 2021</span>

              <p className="timeline-text">
                Software Engineering internship. I created and maintained a media search engine.                Worked on building physical servers for ML. Built a media ETL pipline ingests millions of videos to our internal data lake. Overall a really cool experience to start off my journey and learned a lot!
              </p>

            </li>

          </ol>

        </section>

        <section className="timeline">

          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="school-outline"></ion-icon>
            </div>

            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">University of Waterloo</h4>

              <span>2019 — 2025</span>

              <p className="timeline-text">
                Software Engineering undergrad. SE at uWaterloo is a 5-year program with 3 years of taking academic courses and 2 years of internships. The 2 years of internships are further broken down into six 4-month terms. I took a gap year after my first year of school and extended my internship, also needed to relax and readjust a bit for school. Can't say I liked school, but loved the internship opportunities Waterloo provided.
              </p>

            </li>

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">Elgin Park Secondary</h4>

              <span>2016-2019</span>

              <p className="timeline-text">
                Finished my Highschool Diploma in Surrey, BC. Took AP pyschology, computer science A, micro and macro economics at the same time. Also founder of the Elgin Robotics club and competed in the FTC league. Best record was second place at a provincial tournament.
              </p>

            </li>
            
            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">WFLMS</h4>

              <span>2013 — 2015</span>

              <p className="timeline-text">
                World Forigen Language Middle School in Shanghai, China. Studied there for two years before moving to Vancouver.
              </p>

            </li>

          </ol>

        </section>

    </article>
    )
}

export default Experience;
