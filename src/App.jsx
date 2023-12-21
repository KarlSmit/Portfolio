import "./assets/scss/App.scss";

function App() {
  return (
    <div>
      <div className="sidebar--bg"></div>
      <div className="sidebar--shadow"></div>
      <div className="sidebar--shadow-overlay"></div>
      <aside className="sidebar">
        <div className="avatar__bg">
          {/* <h1>Karl Smit</h1> */}
        </div>
        <div className="avatar"></div>
        {/* Persoongegevens */}
        <div className="sidebar--data">
          <h2 className="sidebar--title">Personalia</h2>
          <ul className="sidebar--list">
            <li className="sidebar--item sidebar--item-personal">
              <svg
                className="sidebar--item-icon"
                fill="#000000"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                <path d="M0 0h24v24H0z" fill="none"></path>
              </svg>
              <span className="sidebar--label">Adres</span>
              <br />
              Nieuwstraat 96
              <br />
              1381XV Weesp
            </li>
            <li className="sidebar--item sidebar--item-personal">
              <svg
                className="sidebar--item-icon"
                fill="#000000"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
              </svg>
              <span className="sidebar--label">Telefoonnummer</span>
              <br />
              0640176530
            </li>

            <li className="sidebar--item sidebar--item-personal">
              <svg
                className="sidebar--item-icon"
                fill="#000000"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                <path d="M0 0h24v24H0z" fill="none"></path>
              </svg>
              <span className="sidebar--label">E-mailadres</span>
              <br />
              karlsmit@live.nl
            </li>
            <li className="sidebar--item sidebar--item-personal">
              <svg
                className="sidebar--item-icon"
                fill="#000000"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path>
                <path d="M0 0h24v24H0z" fill="none"></path>
              </svg>
              <span className="sidebar--label">Geboortedatum</span>
              <br></br>
              12-03-2000
            </li>
            <li className="sidebar--item sidebar--item-personal">
              <svg
                className="sidebar--item-icon"
                fill="#000000"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                <path d="M0 0h24v24H0z" fill="none"></path>
              </svg>
              <span className="sidebar--label">Geboorteplaats</span>
              <br></br>
              Amsterdam
            </li>
            <li className="sidebar--item sidebar--item-personal">
              <svg
                className="sidebar--item-icon"
                fill="#000000"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0V0z" fill="none"></path>
                <path d="M5.5 22v-7.5H4V9c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v5.5H9.5V22h-4zM18 22v-6h3l-2.54-7.63C18.18 7.55 17.42 7 16.56 7h-.12c-.86 0-1.63.55-1.9 1.37L12 16h3v6h3zM7.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm9 0c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2z"></path>
              </svg>
              <span className="sidebar--label">Geslacht</span>
              <br></br>
              Man
            </li>
            <li className="sidebar--item sidebar--item-personal">
              <svg
                className="sidebar--item-icon"
                fill="#000000"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
              </svg>
              <span className="sidebar--label">Nationaliteit</span>
              <br></br>
              Nederlands
            </li>
            <li className="sidebar--item sidebar--item-personal">
              <svg
                className="sidebar--item-icon"
                fill="#000000"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"></path>
              </svg>
              <span className="sidebar--label">Burgerlijke staat</span>
              <br></br>
              Ongehuwd
            </li>
            <li className="sidebar--item sidebar--item-personal">
              <svg
                className="sidebar--item-icon"
                fill="#000000"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
              </svg>
              <span className="sidebar--label">LinkedIn</span>
              <br></br>
              https://www.linkedin.com/in/karl-smit-418b16110/
            </li>
            {/* ... (herhaal voor andere persoonlijke gegevens) */}
          </ul>
        </div>
        {/* Intresses */}
        <div className="sidebar--data">
          <h2 className="sidebar--title">Interesses</h2>
          <ul className="sidebar--list">
            <li className="sidebar--item sidebar--item-text sidebar--item-interest">
              <i className="sidebar--icon-square"></i>
              Sporten (Tennissen, Golfen en Paddelen)
            </li>
          </ul>
        </div>
        {/* Talen */}
        <div className="sidebar--data">
          <h2 className="sidebar--title">Talen</h2>
          <ul className="sidebar--list">
            <li className="sidebar--item">
              <span className="sidebar--label">Nederlands</span>
              <span className="sidebar--item-align-right">
                <ul className="skills__list">
                  <li className="skills__item active"></li>
                  <li className="skills__item active"></li>
                  <li className="skills__item active"></li>
                  <li className="skills__item active"></li>
                  <li className="skills__item active"></li>
                </ul>
              </span>
            </li>
            <li className="sidebar--item">
              <span className="sidebar--label">Engels</span>
              <span className="sidebar--item-align-right">
                <ul className="skills__list">
                  <li className="skills__item active"></li>
                  <li className="skills__item active"></li>
                  <li className="skills__item active"></li>
                  <li className="skills__item active"></li>
                  <li className="skills__item "></li>
                </ul>
              </span>
            </li>
          </ul>
        </div>
      </aside>
      <section className="sections">
        {/* Opleidingen */}
        <div className="section">
          <div className="section--title">
            <h2>Opleidingen</h2>
          </div>
          <ol className="section--list">
            <li className="section--item">
              <div className="section--heading-group">
                <div className="section--date">sep 2020 - jul 2024</div>
                <div className="section--heading">
                  <h3>HBO-ICT (Software engineer)</h3>
                </div>
                <div className="section--sub-heading">Windesheim, Almere</div>
              </div>
            </li>
            <li className="section--item">
              <div className="section--heading-group">
                <div className="section--date">sep 2016 - dec 2020</div>
                <div className="section--heading">
                  <h3>Bouwkunde, Architectuur</h3>
                </div>
                <div className="section--sub-heading">MBO Utrecht, Utrecht</div>
              </div>
            </li>
          </ol>
        </div>
        {/* Werkervaring */}
        <div className="section">
          <div className="section--title">
            <h2>Werkervaring</h2>
          </div>
          <ol className="section--list">
            <li className="section--item">
              <div className="section--heading-group">
                <div className="section--date">jul 2023 - heden</div>
                <div className="section--heading">
                  <h3>Software Engineer</h3>
                </div>
                <div className="section--sub-heading">
                  MaterialDistrict, Naarden
                </div>
              </div>
            </li>
            <li className="section--item">
              <div className="section--heading-group">
                <div className="section--date">jul 2022 - jan 2023</div>
                <div className="section--heading">
                  <h3>Software Engineer</h3>
                </div>
                <div className="section--sub-heading">DoItBig, Utrecht</div>
              </div>
            </li>
            <li className="section--item">
              <div className="section--heading-group">
                <div className="section--date">2015 - 2023</div>
                <div className="section--heading">
                  <h3>Horica- & Magazijnmedewerker</h3>
                </div>
                <div className="section--sub-heading">
                  Nelis Ijsalon, Dami Living & SolarClarity
                </div>
              </div>
            </li>
          </ol>
        </div>
        {/* Vaardigheden */}
        <div className="section">
          <div className="section--title">
            <h2>Vaardigheden</h2>
          </div>
          <ol className="section--list skills">
            <li className="section--item skills">
              <div className="skills--label">
                <h3>Microsoft Office</h3>
              </div>
              <div className="skills--stars">
                <ul className="skills__list">
                  <li className="skills__item active"></li>
                  <li className="skills__item active"></li>
                  <li className="skills__item active"></li>
                  <li className="skills__item active"></li>
                  <li className="skills__item"></li>
                </ul>
              </div>
            </li>
            <li className="section--item skills">
              <div className="skills--label">
                <h3>Coderen</h3>
                <h3>(Python, JavaScript, Typescript, HTML, CSS)</h3>
              </div>
              <div className="skills--stars">
                <ul className="skills__list">
                  <li className="skills__item active"></li>
                  <li className="skills__item active"></li>
                  <li className="skills__item active"></li>
                  <li className="skills__item "></li>
                  <li className="skills__item "></li>
                </ul>
              </div>
            </li>
          </ol>
        </div>
        {/* Cursussen */}
        <div className="section">
          <div className="section--title">
            <h2>Cursussen</h2>
          </div>
          <ol className="section--list">
            <li className="section--item">
              <div className="section--heading-group">
                <div className="section--date">2017</div>
                <div className="section--heading">
                  <h3>VCA</h3>
                </div>
                <div className="section--sub-heading">www.bhv-vca-ehbo.nl</div>
              </div>
              <div className="section--content">
                <p>
                  Basisveiligheid VCA is van belang om op een bouwterrein te
                  mogen lopen.
                </p>
              </div>
            </li>
          </ol>
        </div>
        {/* Stages */}
        <div className="section">
          <div className="section--title">
            <h2>Stages</h2>
          </div>
          <ol className="section--list">
                      <li className="section--item">
            <div className="section--heading-group">
              <div className="section--date">
                feb 2023 - jun 2023
              </div>
              <div className="section--heading">
                <h3>Software Engineer</h3>
              </div>
              <div className="section--sub-heading">
                Happy Horizon / Material District                                  
              </div>
            </div>
            <div className="section--content">
              <p>Voor het 2e semester van mijn schooljaar 2022/2023 mocht ik weer stage lopen als software engineer. Hiervoor ben ik als Front-end Developer aan de slag gegaan bij Material District in naarden onder begeleiding van mijn collega&#39s bij het software bedrijf Happy Horizon.</p>
            </div>
          </li>

          <li className="section--item">
            <div className="section--heading-group">
              <div className="section--date">
                feb 2022 - jun 2022
              </div>
              <div className="section--heading">
                <h3>Software Engineer</h3>
              </div>
              <div className="section--sub-heading">
                DoItBig, Utrecht                                    
              </div>
            </div>
            <div className="section--content">
              <p>Bij dit bedrijf heb ik met twee andere mede studenten onze Comakership gelopen. Dit houd in dat we alle aspecten van een project hebben uitgevoerd om een vraagstuk te realiseren.</p>
            </div>
          </li>
          
          <li className="section--item">
            <div className="section--heading-group">
              <div className="section--date">
                2017 - 2019
              </div>
              <div className="section--heading">
                <h3>Assistent uitvoerder & Werkvoorbereider</h3>
              </div>
              <div className="section--sub-heading">
                VIOS, Koopmans & BAM                                    
              </div>
            </div>
            <div className="section--content">
              {/* <p>Dit was me eindstage van de Bouwkunde opleiding, die plaats vond in het eerste half jaar van me vierde jaar.</p> */}
            </div>
          </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

export default App;
