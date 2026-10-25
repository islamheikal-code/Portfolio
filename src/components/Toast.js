import React from 'react';

export default function Toast({ message }) {
  return (
    <div className="toast-notification bg-primary text-white p-3 rounded-3 shadow-lg d-flex align-items-center gap-2">
      <i className="bi bi-check-circle-fill fs-5"></i>
      <span>{message}</span>
    </div>
  );
}