import styles from "./App.module.css";

function App() {
  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <section className={styles.sidebarTop}>
          <img
            className={styles.avatar}
            aria-hidden
            alt=""
            src="/foto.webp"
          ></img>
          <h1 className={styles.name}>Jor Sanders</h1>
          <p className={styles.title}>Web developer</p>
        </section>

        <section className={styles.sidebarBlock}>
          <h2 className={styles.sidebarHeading}>Contact</h2>
          <p className={styles.contactLine}>
            <a className={styles.link} href="tel:+31622725596">
              +31 6 22 72 55 96
            </a>
          </p>
          <p className={styles.contactLine}>
            <a className={styles.link} href="mailto:me@jor.dev">
              me@jor.dev
            </a>
          </p>
          <p className={styles.contactLine}>
            <a className={styles.link} href="https://github.com/JorSanders/">
              github.com/JorSanders
            </a>
          </p>
          <p className={styles.contactLine}>
            <a
              className={styles.link}
              href="https://www.linkedin.com/in/jor-sanders/"
            >
              linkedin.com/in/jor-sanders
            </a>
          </p>
        </section>

        <section className={styles.sidebarBlock}>
          <h2 className={styles.sidebarHeading}>Skills</h2>
          <ul className={styles.skillsList}>
            <li className={styles.skillsItem}>TypeScript, Next.js, React</li>
            <li className={styles.skillsItem}>
              Java, Spring Boot, Ruby on Rails
            </li>
            <li className={styles.skillsItem}>
              OpenShift, Kubernetes, Kustomize, Docker Swarm
            </li>
            <li className={styles.skillsItem}>
              GitHub Actions, GitLab CI/CD, Tekton, Jenkins
            </li>
            <li className={styles.skillsItem}>MySQL, MSSQL</li>
          </ul>
        </section>
      </div>

      <div className={styles.right}>
        <section className={styles.contentBlock}>
          <h2 className={styles.contentHeading}>Personal Summary</h2>
          <p className={styles.body}>
            A team-oriented developer, always available to help with or answer
            any questions. I also love diving into complex problems and finding
            a practical solution for our team to use.
          </p>
        </section>

        <section className={styles.contentBlock}>
          <h2 className={styles.contentHeading}>Experience</h2>
          <ol className={styles.experienceList}>
            <li className={styles.experienceItem}>
              <p className={styles.roleLine}>
                Frontend developer & DevOps | NOS (8/2022 - current).
              </p>
              <p className={styles.body}>
                At NOS I am part of the frontend team that works on the main
                website{" "}
                <a className={styles.link} href="https://nos.nl">
                  nos.nl
                </a>
                . This team converts the designs and backend endpoints into a
                functional, accessible and awesome website. For this team I am
                responsible for the CI/CD setup, such as OpenShift deployments
                and pipelines.
              </p>
            </li>
            <li className={styles.experienceItem}>
              <p className={styles.roleLine}>
                Backend developer | Capgemini (11/2019 - 5/2022).
              </p>
              <p className={styles.body}>
                I worked on DigiD for Logius, which is one of Capgemini&apos;s
                customers. Here I worked on a variety of items such as
                containerizing, splitting the monolith application into
                microservices, and connecting to eIDAS (European electronic
                identification).
              </p>
            </li>
            <li className={styles.experienceItem}>
              <p className={styles.roleLine}>
                Backend developer | Perfect Web Team (2/2017 - 8/2019).
              </p>
              <p className={styles.body}>
                During my studies I worked as a part-time backend developer. The
                work mostly consisted of making custom Joomla! components using
                PHP, jQuery, and MySQL. As my graduation internship I set up a
                CI/CD environment for Perfect Web Team.
              </p>
            </li>
          </ol>
        </section>

        <section className={styles.contentBlock}>
          <h2 className={styles.contentHeading}>Education</h2>
          <p className={styles.roleLine}>
            HBO-ICT | Windesheim Flevoland (8/2015 - 6/2019).
          </p>
          <p className={styles.body}>
            During the first year of my bachelor&apos;s we learned a foundation
            of IT skills. From the second year onwards we got to apply that
            knowledge at internships. I have done five internships, each
            spanning half a year, which gave me a lot of experience working with
            different technologies, companies, and people. My minor, as part of
            this bachelor&apos;s, I chose to do abroad, studying for half a year
            at Wenzhou University in China.
          </p>
        </section>
      </div>
    </main>
  );
}

export default App;
