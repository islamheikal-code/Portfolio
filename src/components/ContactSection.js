import React, { useState } from 'react';

export default function ContactSection({ email, showToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill out all fields.');
      return;
    }
    showToast('Thank you! Your message has been sent successfully.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-5 border-top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-4">
            <h2 className="display-6 fw-bold">Let's Build Something Together</h2>
            <p className="card-text flex-grow-1" style={{ color: '#111111' }}>Feel free to reach out for positions, collaborations, or inquiries.</p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form onSubmit={handleSubmit} className="glass-card p-4 p-md-5 border">
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="nameInput" className="form-label fw-medium">Your Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="nameInput"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="emailInput" className="form-label fw-medium">Your Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="emailInput"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="messageInput" className="form-label fw-medium">Message</label>
                  <textarea 
                    className="form-control" 
                    id="messageInput" 
                    rows="4"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <div className="col-12 text-end">
                  <button type="submit" className="btn btn-primary px-4 py-2 fw-semibold">
                    Send Message <i className="bi bi-send ms-1"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}