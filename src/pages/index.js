import * as React from "react"
import { useState, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/styles.css"

const IndexPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Funkce pro scrollování do sekcí
  const scrollToSection = (id) => {
    const section = document.getElementById(id)
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

  useEffect(() => {
    const handleScroll = () => {
      const btn = document.getElementById("scrollToTopBtn")
      const firstSection = document.getElementById("home")
      if (firstSection) {
        const firstSectionHeight = firstSection.offsetHeight
        if (window.scrollY > firstSectionHeight - 200) {
          btn.style.display = "block"
        } else {
          btn.style.display = "none"
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main>
      {/* Hlavní navigační lišta */}
      <header>
        {/* Desktopová navigace */}
        <div className="desktop-nav">
          <ul className="navbar">
            <li><a href="#home">Domů</a></li>
            <li><a href="#companies">Firmy</a></li>
            <li><a href="#about">O nás</a></li>
            <li><a href="#projects">Projekty</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>
        </div>
        {/* Mobilní navigace – hamburger menu */}
        <div className="mobile-nav">
          <button className="hamburger" onClick={toggleMobileMenu}>
            ☰
          </button>
          {mobileMenuOpen && (
            <ul className="mobile-menu">
              <li><a href="#home" onClick={toggleMobileMenu}>Domů</a></li>
              <li><a href="#companies" onClick={toggleMobileMenu}>Firmy</a></li>
              <li><a href="#about" onClick={toggleMobileMenu}>O nás</a></li>
              <li><a href="#projects" onClick={toggleMobileMenu}>Projekty</a></li>
              <li><a href="#contact" onClick={toggleMobileMenu}>Kontakt</a></li>
            </ul>
          )}
        </div>
      </header>

      <Layout>
        {/* PRVNÍ SEKCE – Home */}
        <section id="home" className="section background-section">
          {/* Dekorativní SVG prvky – zobrazení pouze v desktopové verzi */}
          <div className="svg-container">
            <img src="/img/Domek-Final.svg" alt="Domek" className="domek" />
            <img src="/img/SolaryNew.png" alt="Solary" className="solary" />
            <img src="/img/strom.svg" alt="Strom" className="strom" />
            <img src="/img/bagr.svg" alt="Bagr" className="bagr-first-section" />
            <img src="/img/kameny.svg" alt="Kameny" className="kameny" />
            <img src="/img/okno1.svg" alt="Okno1" className="okno1" />
            <img src="/img/okno2.svg" alt="Okno2" className="okno2" />
            <img src="/img/dollar.svg" alt="Dollar" className="dollar" />
          </div>
          <div className="fog-overlay">
            <img src="/img/Mlha.svg" alt="Mlha" className="fog-image" />
          </div>
          {/* Středový obsah – desktop: titulek a tlačítko */}
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
              onClick={() => scrollToSection("second-section")}
            >
              Hledat
            </button>
          </div>
        </section>
      </Layout>

      {/* DRUHÁ SEKCE – pouze pro desktop */}
      <section id="second-section" className="section background-section">
        <header className="section-navbar">
          <ul className="navbar">
            <li
              data-number="1"
              onMouseEnter={() => {
                document.querySelectorAll(".okno-zvyrazneni").forEach(el => {
                  el.classList.add("visible")
                })
              }}
              onMouseLeave={() => {
                document.querySelectorAll(".okno-zvyrazneni").forEach(el => {
                  el.classList.remove("visible")
                })
              }}
            >
              <span>Okna</span>
            </li>
            <li
              data-number="2"
              onMouseEnter={() => {
                document.querySelectorAll(".dvere-zvyrazneni").forEach(el => {
                  el.classList.add("visible")
                })
              }}
              onMouseLeave={() => {
                document.querySelectorAll(".dvere-zvyrazneni").forEach(el => {
                  el.classList.remove("visible")
                })
              }}
            >
              <span>Dveře</span>
            </li>
            <li
              data-number="3"
              onMouseEnter={() => {
                document.querySelectorAll(".kameni-zvyrazneni").forEach(el => {
                  el.classList.add("visible")
                })
              }}
              onMouseLeave={() => {
                document.querySelectorAll(".kameni-zvyrazneni").forEach(el => {
                  el.classList.remove("visible")
                })
              }}
            >
              <span>Kamenictví</span>
            </li>
            <li
              data-number="4"
              onMouseEnter={() => {
                document.querySelectorAll(".strecha-zvyrazneni").forEach(el => {
                  el.classList.add("visible")
                })
              }}
              onMouseLeave={() => {
                document.querySelectorAll(".strecha-zvyrazneni").forEach(el => {
                  el.classList.remove("visible")
                })
              }}
            >
              <span>Střechy</span>
            </li>
            <li data-number="5"><span>Pergoly</span></li>
            <li data-number="6"><span>Automatizace domácnosti</span></li>
            <li data-number="7"><span>Ostatní</span></li>
          </ul>
        </header>
        <div className="svg-container2">
          <img src="/img/Domek-Final.svg" alt="Domek" className="domek" />
          <img src="/img/SolaryNew.png" alt="Solary" className="solary" />
          <div className="strom-wrapper">
            <img src="/img/strom.svg" alt="Strom" className="strom" />
          </div>
          <div className="bagr-wrapper">
            <img src="/img/bagr.svg" alt="Bagr" className="bagr-second-section" />
          </div>
          <img src="/img/kameny.svg" alt="Kameny" className="kameny" />
          <img src="/img/okno1.svg" alt="Okno1" className="okno1" />
          {/* Overlay pro okna – pozicováno přesně přes bílý kruh s číslem 1 */}
          <div className="okno-zvyrazneni">
            <span>OKNA</span>
          </div>
          <img src="/img/okno2.svg" alt="Okno2" className="okno2" />
          <div className="okno-zvyrazneni">
            <span>OKNA</span>
          </div>
          <img src="/img/dollar.svg" alt="Dollar" className="dollar" />
          {/* Overlay pro dveře, kamenictví a střechy – necháváme je beze změny */}
          <div className="dvere-zvyrazneni">
            <span>DVEŘE</span>
          </div>
          <div className="kameni-zvyrazneni">
            <span>KAMENÍ</span>
          </div>
          <div className="strecha-zvyrazneni">
            <span>STŘECHY</span>
          </div>
          <div className="okno-kruh">
            <span>1</span>
          </div>
          <div className="dvere-kruh">
            <span>2</span>
          </div>
          <div className="kameni-kruh">
            <span>3</span>
          </div>
          <div className="strecha-kruh">
            <span>4</span>
          </div>
        </div>
      </section>

      {/* Zbytek sekcí – Firmy, O nás, Projekty, Kontakt (desktop) */}
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

      <section id="about" className="section about-section">
        <div className="about-text">
          <h2>O NÁS</h2>
          <p>
            Spojujeme firmy, jež sdílejí nejen vzájemnou podporu a spolupráci, ale i vášeň pro svou práci.
          </p>
        </div>
        <img src="/img/Onas.png" alt="O nás" className="about-image" />
      </section>

      <section id="projects" className="section projects-section">
        <div className="projects-container">
          <img src="/img/ProcVyuzitDomovSnadno.png" alt="Proč využít Domov Snadno" className="projects-image" />
          <div className="projects-text">
            <h2>PROČ VYUŽÍT DOMOV SNADNO?</h2>
            <hr />
            <div className="projects-list">
              <div className="projects-column">
                <p>Známe se. A spolupracujeme spolu na projektech</p>
                <p>Jsme odborníky v našich oborech.</p>
              </div>
              <div className="projects-column">
                <p>Dokážeme se domluvit a tím ušetřit Váš čas.</p>
                <p>Všechny projekty řešíme s důrazem na kvalitu provedení a design.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-container">
          <img src="/img/KontaktujteNas.png" alt="Kontaktujte nás" className="contact-image" />
          <div className="contact-info">
            <h2 className="contact-heading">KONTAKTUJTE NÁS</h2>
            <div className="contact-details">
              <p><strong>Hlavní kontakt</strong></p>
              <p>Tel: (123) 456-7890</p>
              <p>Email: info@domovsnadno.cz</p>
              <p>Social: @domovsnadno</p>
            </div>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/img/FacebookIco.png" alt="Facebook" className="social-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/img/TwitterLogo.png" alt="Twitter" className="social-icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/img/InstagramIco.png" alt="Instagram" className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <button onClick={scrollToTop} id="scrollToTopBtn" title="Nahoru">
        <img src="/img/ReturnICO.svg" alt="Nahoru" className="scroll-icon" />
      </button>
    </main>
  )
}

export const Head = () => <Seo title="Domov Snadno" />
export default IndexPage
