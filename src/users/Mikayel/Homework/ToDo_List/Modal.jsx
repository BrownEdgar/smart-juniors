import React from 'react';
import './Modal.scss';

export default function Modal({ isOpen, onClose, onEdit, editText, setEditText }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
              <div class="modal-header">
                  <h2>My To Do List</h2>
                  <span className="modal-close" onClick={onClose}>
                      &times;
                  </span>                
              </div>
        <div className="modal-body">
          <input
            type="text"
            className="editInput"
            value={editText}
            onChange={e => setEditText(e.target.value)}
          />
          <span className="App-btn" onClick={onEdit}>
            Save
          </span>
        </div>
        <div className="modal-footer">
          <h3>Make your changes...</h3>
        </div>
      </div>
    </div>
  );
};
