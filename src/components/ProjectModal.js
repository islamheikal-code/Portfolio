import React from 'react';

export default function ProjectModal({ project, onClose, theme }) {
  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className={`modal-content border-0 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-white text-dark'}`}>
          <div className="modal-header border-bottom-0">
            <h3 className="modal-title h5 fw-bold">{project.title}</h3>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body py-4">
            <span className="badge bg-primary mb-3">{project.category}</span>
            <p className="lead fs-6 mb-4">{project.description}</p>
            
            <div className="p-3 bg-secondary bg-opacity-10 rounded-3 mb-4">
              <h4 className="h6 fw-bold mb-1"><i className="bi bi-graph-up-arrow me-2 text-success"></i>Performance Metric</h4>
              <p className="small mb-0 text-muted">{project.metrics}</p>
            </div>

            <h4 className="h6 fw-bold mb-2">Technologies Used:</h4>
            <div className="d-flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="modal-footer border-top-0">
            <button type="button" className="btn btn-secondary btn-sm" onClick={onClose}>Close</button>
            <a href={project.githubUrl} className="btn btn-outline-primary btn-sm">GitHub Repository</a>
            <a href={project.liveUrl} className="btn btn-primary btn-sm">Live Demo</a>
          </div>
        </div>
      </div>
    </div>
  );
}