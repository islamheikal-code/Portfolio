import React from 'react';

export default function Footer({ name }) {
  return (
    <footer className="py-4 text-center border-top text-muted small">
      <div className="container">
        <p className="mb-0">© {new Date().getFullYear()} {name}. Built with React & Bootstrap 5.</p>
      </div>
    </footer>
  );
}