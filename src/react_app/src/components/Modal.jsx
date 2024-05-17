import React from 'react';


const Modal = ({ isOpen, onClose, title, children }) => {
    const modalClassName = isOpen ? 'modal fade show' : 'modal fade';
    const modalStyle = isOpen ? 'block' : 'none';

    return (
        <div className={modalClassName} style={{display: modalStyle}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={onClose}
                        />
                    </div>
                    <div className="modal-body">{children}</div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="modal-close-button btn btn-default"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;