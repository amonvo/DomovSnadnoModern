import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/styles.css"

const IndexPage = () => {
  // Funkce pro přesun na sekci "companies"
  const scrollToSection = () => {
    const section = document.getElementById("companies")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    const section = document.getElementById("home")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Zobrazení tlačítka při posunutí dolů
  React.useEffect(() => {
    const handleScroll = () => {
      const btn = document.getElementById("scrollToTopBtn")
      const firstSection = document.getElementById("home")
      const firstSectionHeight = firstSection.offsetHeight

      // Podmínka pro zobrazení tlačítka
      if (window.scrollY > firstSectionHeight - 200) {
        btn.style.display = "block"
      } else {
        btn.style.display = "none"
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main>
      <header>
        <ul className="navbar">
          <li>
            <a href="#home">Domů</a>
          </li>
          <li>
            <a href="#companies">Firmy</a>
          </li>
          <li>
            <a href="#about">O nás</a>
          </li>
          <li>
            <a href="#realizations">Realizace</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
      </header>

      <Layout>
        <section id="home" className="section background-section">
          {/* SVG prvky */}
          <div className="svg-container">
            <img src="/img/Domek-Final.svg" alt="Domek" class="domek" />
            <img src="/img/SolaryNew.png" alt="Solary" class="solary" />
            <img src="/img/strom.svg" alt="Strom" class="strom" />
            <img
              src="/img/bagr.svg"
              alt="Bagr"
              className="bagr-first-section"
            />{" "}
            {/* Přidání jedinečné třídy */}
            <img src="/img/kameny.svg" alt="Kameny" class="kameny" />
            <img src="/img/okno1.svg" alt="Okno1" class="okno1" />
            <img src="/img/okno2.svg" alt="Okno2" class="okno2" />
            <img src="/img/dollar.svg" alt="Dollar" class="dollar" />
          </div>
          <div class="fog-overlay">
            <img src="/img/Mlha.svg" alt="Mlha" class="fog-image" />
          </div>

          {/* Středový obsah s textem a tlačítkem vedle domku */}
          <div className="center-content">
            <h1>
              Najděte
              <br />
              spolehlivé
              <br />
              řemeslníky.
            </h1>
            <button
              className="button"
              onClick={() =>
                document
                  .getElementById("second-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Hledat
            </button>
          </div>
        </section>
      </Layout>

      <section id="second-section" className="section background-section">
        {/* Druhá sekce s pozadím */}
        <div className="svg-container2">
          <img src="/img/Domek-Final.svg" alt="Domek" className="domek" />
          <img src="/img/SolaryNew.png" alt="Solary" className="solary" />
          {/* Obal kolem stromku a vizitky */}
          {/* Obal kolem stromku a vizitky */}
          <div className="strom-wrapper">
            <img src="/img/strom.svg" alt="Strom" className="strom" />
            <div className="strom-vizitka animate__animated animate__fadeIn">
              <img src="/img/SkritekStromVizitka.png" alt="Vizitka Strom" />
            </div>
          </div>

          {/* Obal kolem bagru a vizitky */}
          <div className="bagr-wrapper">
            <img
              src="/img/bagr.svg"
              alt="Bagr"
              className="bagr-second-section"
            />
            <div className="bagr-vizitka animate__animated animate__fadeIn">
              <img src="/img/KnizekBagrVizitka.png" alt="Vizitka Bagr" />
            </div>
          </div>

          <img src="/img/kameny.svg" alt="Kameny" className="kameny" />
          <img src="/img/okno1.svg" alt="Okno1" className="okno1" />
          <img src="/img/okno2.svg" alt="Okno2" className="okno2" />
          <img src="/img/dollar.svg" alt="Dollar" className="dollar" />
        </div>
      </section>

      {/* Třetí sekce */}
      <section id="companies" className="section company-list">
        <h2 className="company-heading">SEZNAM FIREM</h2>
        <div className="company-columns">
          <div className="company-column">
            <div className="company-item">Černý stavební s.r.o.</div>
            <div className="company-item">RS WoodWorks</div>
            <div className="company-item">Dlaždičkáři s.r.o.</div>
          </div>
          <div className="company-column">
            <div className="company-item">Pepa</div>
            <div className="company-item">Jakub Eliáš</div>
            <div className="company-item">Mlok System</div>
          </div>
          <div className="company-column">
            <div className="company-item">XY</div>
            <div className="company-item">XY</div>
            <div className="company-item">XY</div>
          </div>
        </div>
      </section>

      {/* Třetí sekce */}
      <section id="about" className="section about-section">
        <div className="about-text">
          <h2>O NÁS</h2>
          <p>
            Spojujeme firmy, jež sdílejí nejen vzájemnou podporu a spolupráci,
            ale i skutečnou vášeň pro svou práci. Naším cílem je vytvářet
            prostor, kde se kvalitní služby potkávají s odborností a nasazením,
            které posouvají každodenní spolupráci na novou úroveň.
          </p>
        </div>
        <img src="/img/Onas.png" alt="O nás" className="about-image" />
      </section>

      {/* Čtvrtá sekce */}
      <section id="projects" className="section projects-section">
        <div className="projects-container">
          <img
            src="/img/ProcVyuzitDomovSnadno.png"
            alt="Proč využít Domov Snadno"
            className="projects-image"
          />
          <div className="projects-text">
            <h2>PROČ VYUŽÍT DOMOV SNADNO?</h2>
            <hr />
            <div className="projects-list">
              <div className="projects-column">
                <p>
                  Známe se.
                  <br />A spolupracujeme spolu na projektech
                </p>
                <p>Jsme odborníky v našich oborech.</p>
              </div>
              <div className="projects-column">
                <p>
                  Dokážeme se domluvit
                  <br />a tím ušetřit Váš čas.
                </p>
                <p>
                  Všechny projekty řešíme s důrazem na kvalitu provedení a
                  design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pátá sekce */}
      <section id="realizations" className="section projects-section">
        <h2 className="realizations-heading">Realizace</h2>
        <div className="project-list">
          <div className="project-item">
            <img
              src="/img/RealizaceRodinneDomy1.png"
              alt="Rodinný dům Třemošná"
              className="project-image"
            />
            <div className="project-info">
              <h3>Rodinný dům Třemošná</h3>
              <p>Realizace 2023</p>
            </div>
          </div>
          <div className="project-item">
            <img
              src="/img/RealizaceRodinneDomy2.png"
              alt="Rodinný dům Šťáhlavy"
              className="project-image"
            />
            <div className="project-info">
              <h3>Rodinný dům Šťáhlavy</h3>
              <p>Realizace 2024</p>
            </div>
          </div>
          <div className="project-item">
            <img
              src="/img/RealizaceRodinneDomy3.png"
              alt="Rodinný dům Plzeň Doubravka"
              className="project-image"
            />
            <div className="project-info">
              <h3>Rodinný dům Plzeň Doubravka</h3>
              <p>Realizace 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Šestá sekce */}
      <section id="contact" className="section contact-section">
        <div className="contact-container">
          <img
            src="/img/KontaktujteNas.png"
            alt="Kontaktujte nás"
            className="contact-image"
          />
          <div className="contact-info">
            <h2 className="contact-heading">KONTAKTUJTE NÁS</h2>
            <div className="contact-details">
              <p>
                <strong>Hlavní kontakt</strong>
              </p>
              <p>Tel: (123) 456-7890</p>
              <p>Email: info@domovsnadno.cz</p>
              <p>Social: @domovsnadno</p>
            </div>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/FacebookIco.png"
                  alt="Facebook"
                  className="social-icon"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/TwitterLogo.png"
                  alt="Twitter"
                  className="social-icon"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/InstagramIco.png"
                  alt="Instagram"
                  className="social-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Tlačítko pro posun nahoru */}
      <button onClick={scrollToTop} id="scrollToTopBtn" title="Nahoru">
        <img src="/img/ReturnICO.svg" alt="Nahoru" className="scroll-icon" />
      </button>
    </main>
  )
}
export const Head = () => <Seo title="Domov Snadno" />
export default IndexPage
