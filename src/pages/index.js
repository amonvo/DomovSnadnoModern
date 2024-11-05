import * as React from "react"
import Layout from "../components/layout";
import Seo from "../components/seo";
import "../styles/styles.css"

const IndexPage = () => {
  return (
    <main>
      <header>
        <ul className="navbar">
          <li><a href="#home">Domů</a></li>
          <li><a href="#companies">Firmy</a></li>
          <li><a href="#about">O nás</a></li>
          <li><a href="#projects">Realizace</a></li>
          <li><a href="#contact">Kontakt</a></li>
        </ul>
      </header>

      <Layout>
        <section id="home" className="section background-section">
          {/* SVG prvky */}
          <div class="svg-container">
            <img src="/img/Domek-Final.svg" alt="Domek" class="domek" />
            <img src="/img/okno1.svg" alt="Okno 1" class="okno1" />
            <img src="/img/okno2.svg" alt="Okno 2" class="okno2" />
            <img src="/img/solary.svg" alt="Solary" class="solary" />
            <img src="/img/strom.svg" alt="Strom" class="strom" />
            <img src="/img/bagr.svg" alt="Bagr" class="bagr" />
            <img src="/img/kameny.svg" alt="Kameny" class="kameny" />
          </div>
          {/* Středový obsah s textem a tlačítkem vedle domku */}
          <div className="center-content">
            <h1>Najděte spolehlivé řemeslníky.</h1>
            <button className="button">Hledat</button>
          </div>
        </section>
      </Layout>

      <section className="section background-section">
        {/* Druhá sekce s pozadím */}
      </section>

      {/* Druhá sekce */}
      <section id="companies" className="section company-list">
        <h2>SEZNAM FIREM</h2>
        <div className="company-columns">
          <div className="company-column">
            <p>Černý stavební s.r.o.</p>
            <p>RS WoodWorks</p>
            <p>Dlaždičkáři s.r.o.</p>
          </div>
          <div className="company-column">
            <p>Pepa</p>
            <p>Jakub Eliáš</p>
            <p>Mlok System</p>
          </div>
          <div className="company-column">
            <p>XY</p>
            <p>XY</p>
            <p>XY</p>
          </div>
        </div>
      </section>

      {/* Třetí sekce */}
      <section id="about" className="section about-section">
        <div className="about-text">
          <h2>O NÁS</h2>
          <p>Use this page to share your company's mission, vision, or background with your potential clients. Set yourself apart from your competition with a strong brand persona that cares for your clients.</p>
        </div>
        <img src="/img/about-image.jpg" alt="O nás" className="about-image" />
      </section>

      {/* Čtvrtá sekce */}
      <section id="projects" className="section">
        <img src="/img/reasons-image.jpg" alt="Proč využít Domov Snadno" className="reasons-image" />
        <div className="reasons-text">
          <h2>PROČ VYUŽÍT DOMOV SNADNO?</h2>
          <div className="reasons-list">
            <p>Známe se. A spolupracujeme spolu na projektech</p>
            <p>Dokážeme se domluvit a tím ušetřit Váš čas.</p>
            <p>Jsme odborníky v našich oborech.</p>
            <p>Všechny projekty řešíme s důrazem na kvalitu provedení a design.</p>
          </div>
        </div>
      </section>

      {/* Pátá sekce */}
      <section id="realizations" className="section projects-section">
        <h2>Realizace</h2>
        <div className="project-list">
          <div className="project-item">
            <img src="/img/project1.jpg" alt="Rodinný dům Třemošná" />
            <div className="project-info">
              <h3>Rodinný dům Třemošná</h3>
              <p>Realizace 2023</p>
            </div>
          </div>
          <div className="project-item">
            <img src="/img/project2.jpg" alt="Rodinný dům Šťáhlavy" />
            <div className="project-info">
              <h3>Rodinný dům Šťáhlavy</h3>
              <p>Realizace 2024</p>
            </div>
          </div>
          <div className="project-item">
            <img src="/img/project3.jpg" alt="Rodinný dům Plzeň Doubravka" />
            <div className="project-info">
              <h3>Rodinný dům Plzeň Doubravka</h3>
              <p>Realizace 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Šestá sekce */}
      <section id="contact" className="section contact-section">
        <div className="contact-buttons">
          <button className="contact-btn">SEZNAM FIREM</button>
          <button className="contact-btn">PROJEKTY</button>
        </div>
        <div className="contact-content">
          <img src="/img/contact-image.jpg" alt="Kontaktujte nás" className="contact-image" />
          <div className="contact-info">
            <h2>KONTAKTUJTE NÁS</h2>
            <div className="contact-details">
              <div>
                <p><strong>Hlavní kontakt</strong></p>
              </div>
              <div>
                <p>Tel: (123) 456-7890</p>
                <p>Email: info@domovsnadno.cz</p>
                <p>Social: @domovsnadno</p>
              </div>
            </div>
            <div className="social-icons">
              <a href="#"><img src="/img/facebook-icon.png" alt="Facebook" /></a>
              <a href="#"><img src="/img/twitter-icon.png" alt="Twitter" /></a>
              <a href="#"><img src="/img/instagram-icon.png" alt="Instagram" /></a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
export const Head = () => <Seo title="Domov Snadno" />;
export default IndexPage
