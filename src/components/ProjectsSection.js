import React from 'react';

export default function ProjectsSection({ categories, activeTab, setActiveTab, projects, onSelectProject }) {
  return (
    <section id="projects" className="py-5 border-top">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="display-6 fw-bold">Featured Projects</h2>
          <p className="text-muted">Explore my recent frontend architectures and applications</p>
        </div>

        <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn btn-sm px-4 rounded-pill fw-semibold ${
                activeTab === category ? 'btn-primary' : 'btn-outline-secondary'
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4 fade-in">
              <div className="glass-card card h-100 border overflow-hidden">
                <div className="card-body p-4 d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <span className="badge bg-info bg-opacity-10 text-info">{project.category}</span>
                    <i className="bi bi-folder-symlink fs-4 text-primary"></i>
                  </div>
                  <h3 className="h5 card-title fw-bold mb-3">{project.title}</h3>
                  <p className="card-text flex-grow-1" style={{ color: '#111111' }}>{project.description}</p>
                  
                  <div className="d-flex flex-wrap gap-1 mb-3">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="badge bg-secondary bg-opacity-10 text-secondary">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button 
                    className="btn btn-outline-primary btn-sm w-100 fw-semibold mt-auto"
                    onClick={() => onSelectProject(project)}
                  >
                    Details & Performance
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}