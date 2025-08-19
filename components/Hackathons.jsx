import React, { useState } from "react";
import "../src/styling/Hackathon.css";

const hackathons = [
  {
    id: 1,
    title: "ARDETHON",
    organizer: "Organized by college clubs",
    description: "Built a virtual tour booking system using HTML, CSS, and JavaScript.",
    year: "2023",
    certificate: "/assets/cert-1.jpeg",
  },
  {
    id: 2,
    title: "VIHAAN",
    organizer: "Organized by DTU, Delhi",
    description: "Selected in Round 1 — developed a Women Safety Web App.",
    year: "2024",
    certificate: "/assets/cert-2.jpeg",
  },
  {
    id: 3,
    title: "GDG Hackathon",
    organizer: "Organized by Google Developer Group",
    description: "24-hour hackathon — received participation certificate and guidance from mentors.",
    year: "2024",
    certificate: "/assets/cert-3.jpeg",
  }
];

const Hackathons = () => {
  const [fullscreenImg, setFullscreenImg] = useState(null);

  return (
    <section className="hackathons-section" id="hack">
      <h1 className="hackathons-title">Hackathons Participated</h1>
      <div className="hackathons-container">
        {hackathons.map((hack) => (
          <div key={hack.id} className="hackathon-card">
            <img
              src={hack.certificate}
              alt={`${hack.title} Certificate`}
              className="certificate-img"
              onClick={() => setFullscreenImg(hack.certificate)}
            />
            <h2>{hack.title}</h2>
            <span className="hack-year">{hack.year}</span>
            <p className="organizer">{hack.organizer}</p>
            <p className="achievement">{hack.description}</p>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {fullscreenImg && (
        <div className="fullscreen-overlay" onClick={() => setFullscreenImg(null)}>
          <img src={fullscreenImg} alt="Certificate Fullscreen" className="fullscreen-img" />
          <span className="close-btn" onClick={() => setFullscreenImg(null)}>✕</span>
        </div>
      )}
    </section>
  );
};

export default Hackathons;
