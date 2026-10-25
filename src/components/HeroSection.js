import React from 'react';

export default function HeroSection({ info }) {
  return (
    <section id="home" className="py-5 my-lg-5 fade-in">
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-lg-7">
            <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3 rounded-pill fw-semibold">
              Available for Opportunities
            </span>
            <h1 className="display-3 fw-bold mb-2">
              Hi, I'm <span className="gradient-text">{info.name}</span>
            </h1>
            <h2 className="h3 text-muted mb-4">{info.title}</h2>
            <p className="lead mb-4 me-lg-4">{info.bio}</p>

            <div className="d-flex flex-wrap gap-3 mb-5">
              <a href="#projects" className="btn btn-primary btn-lg px-4 rounded-3 fw-semibold">
                View My Work <i className="bi bi-arrow-down-short ms-1"></i>
              </a>
              <a href="#contact" className="btn btn-outline-secondary btn-lg px-4 rounded-3 fw-semibold">
                Get In Touch
              </a>
            </div>

            <div className="row g-3 border-top pt-4">
              {info.stats.map((stat, idx) => (
                <div key={idx} className="col-6 col-sm-3">
                  <h3 className="h2 fw-bold mb-0 gradient-text">{stat.value}</h3>
                  <small className="fw-bold" style={{ color: '#111111' }}>{stat.label}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5 text-center">
            <div className="glass-card p-4 border shadow-sm">
              <div className="rounded-circle overflow-hidden mx-auto mb-3 border border-primary border-2 shadow-sm" style={{ width: "220px", height: "220px" }}>
                <img 
                  src="https://user47887.na.imgto.link/public/20261025/75799b161bb640c4e296c4ee-whatsapp-image-2026-10-25-at-19-25-23.avif" 
                  alt={info.name} 
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
              <h4 className="fw-bold mb-1">{info.name}</h4>
              <p className="text-muted mb-3">{info.location}</p>
              <div className="d-flex justify-content-center gap-3 fs-5">
                <a href={info.github} target="_blank" rel="noreferrer" className="text-body" aria-label="GitHub Profile">
                  <i className="bi bi-github"></i>
                </a>
                <a href={info.linkedin} target="_blank" rel="noreferrer" className="text-body" aria-label="LinkedIn Profile">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl" target="_blank" rel="noreferrer" className="text-body" aria-label="Send Email">
                  <i className="bi bi-envelope-fill"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}