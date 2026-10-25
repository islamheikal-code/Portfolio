import React from 'react';

export default function ExperienceSection({ experience }) {
  return (
    <section id="experience" className="py-5 border-top">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">Experience & Background</h2>
          <p className="card-text flex-grow-1" style={{ color: '#111111' }}>My professional journey in software engineering</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="position-relative ps-4 border-start border-2 border-primary">
              {experience.map((exp, idx) => (
                <div key={idx} className="mb-5 position-relative">
                  <div 
                    className="position-absolute bg-primary rounded-circle"
                    style={{ width: '14px', height: '14px', left: '-31px', top: '4px' }}
                  ></div>
                  <span className="badge bg-primary bg-opacity-10 text-primary mb-2">{exp.period}</span>
                  <h3 className="h5 fw-bold mb-1">{exp.role}</h3>
                  <h4 className="card-text flex-grow-1" style={{ color: '#111111' }}>{exp.company}</h4>
                  <p className="card-text flex-grow-1" style={{ color: '#111111' }}>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}