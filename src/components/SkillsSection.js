import React from 'react';

export default function SkillsSection({ skills }) {
  return (
    <section id="skills" className="py-5 border-top">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">Technical Skills</h2>
          <p className="text-muted">Core technologies and frameworks I work with daily</p>
        </div>

        <div className="row g-4">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="glass-card p-4 border h-100">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="fw-bold fs-5 d-flex align-items-center gap-2">
                    <i className={`bi ${skill.icon} text-primary`}></i>
                    {skill.name}
                  </span>
                  <span className="badge bg-primary bg-opacity-10 text-primary">{skill.level}%</span>
                </div>
                <small className="text-muted d-block mb-3">{skill.category}</small>
                <div className="progress" style={{ height: '8px' }}>
                  <div 
                    className="progress-bar bg-primary" 
                    role="progressbar" 
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level} 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}