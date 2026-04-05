import React from "react";

const comicCSS = `
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&display=swap');

.about-comic-container {
  font-family: 'Comic Neue', cursive;
  background: #f5f5f0;
}

.about-comic-box {
  max-width: 1200px;
  margin: auto;
  border: 4px solid black; /* reduce */
  background: #fff;
  box-shadow: 6px 6px 0 black; /* reduce */
  overflow: hidden;
}

/* HEADER */
.about-header {
  background: #e60023;
  color: yellow;
  padding: 18px;
  border-bottom: 4px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.about-title {
  font-family: 'Bangers';
  font-size: 2.8rem; /* slightly reduce */
  text-shadow: 2px 2px 0 black;
}

.about-badge {
  background: yellow;
  border: 2px solid black;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-family: 'Bangers';
}

/* GRID */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.about-panel {
  border: 3px solid black;
  padding: 24px;
}

/* VANAKKAM */
.about-vanakkam {
  font-family: 'Bangers', cursive;
  font-size: 4.2rem; /* reduce */
  color: #FFE600;
  text-shadow: 3px 3px 0 black;
}

/* STAT */
.about-stat {
  background: yellow;
  border: 2px solid black;
  padding: 10px;
  font-family: 'Bangers';
  transition: transform 0.15s ease;
}
.about-stat:hover {
  transform: translate(-2px,-2px); /* lighter */
}

/* BOTTOM */
.about-bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

/* TAG */
.about-tag {
  border: 2px solid black;
  padding: 5px 10px;
  margin: 5px;
  display:inline-block;
  font-weight: bold;
  background:#d9ff57;
  transition: transform 0.15s ease;
}
.about-tag:hover {
  transform: translate(-2px,-2px);
}

/* CTA */
.about-cta {
  background: #005eff;
  color: white;
  padding: 16px;
  border: 2px solid black;
}

/* BUTTON */
.about-button {
  margin-top: 10px;
  padding: 10px 16px;
  border: 2px solid black;
  background: white;
  font-family: 'Bangers';
  cursor: pointer;
  transition: transform 0.15s ease;
}
.about-button:hover {
  transform: translate(-2px,-2px);
}
`;

export const About = () => {
  return (
    <>
      <style>{comicCSS}</style>

      <section className="about-comic-container py-10">
        <div className="about-comic-box">

          {/* HEADER */}
        <div className="about-header relative">

  <div>
    <div className="about-title">ABOUT ME!</div>
    <small>The origin story of Jayaprem V</small>
  </div>

  <div className="about-badge">#01</div>

  {/* 🔥 IMAGE ADD */}
  <img 
    src="/jayapremv.jpg"
    alt="profile"
    className="absolute right-4 top-1/2 -translate-y-1/2 w-20 h-20 object-cover border-4 border-black rounded-full shadow-[3px_3px_0px_#111] hover:scale-105 transition"
  />

</div>

          {/* TOP */}
          <div className="about-grid">

            <div className="about-panel">
              <p>👋 Hey there! I'm Jayaprem V</p>

              <div className="about-vanakkam">
                VANAKKAM!
              </div>

              <p>
                UI/UX Designer & Frontend Developer from India —
                building digital experiences that convert!
              </p>
            </div>

            <div className="about-panel">
              <p>Check out my POWER STATS! 💪</p>

              <div style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
                <div className="about-stat">30+ Projects</div>
                <div className="about-stat">99% Retention</div>
                <div className="about-stat">❤️ Passion</div>
              </div>

              <p style={{marginTop:'10px'}}>
                Speeding checkout funnels, crafting mobile flows,
                making portfolios POP!
              </p>
            </div>

          </div>

          {/* BOTTOM */}
          <div className="about-bottom">

            <div className="about-panel">
              <h3>WHO I HELP!</h3>
              <div>
                {["Education","Medical","Fashion","Corporate","Restaurants","Gyms","Startups"].map((i)=>(
                  <span className="about-tag" key={i}>{i}</span>
                ))}
              </div>
            </div>

            <div className="about-panel">
              <h3>NEXT MISSION?</h3>

              <div className="about-cta">
                ☕ Let's discuss your idea and SAVE YOUR BUSINESS!
              </div>

              <button 
                className="about-button"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth"
                  });
                }}
              >
                BOOK A CALL ⚡
              </button>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};