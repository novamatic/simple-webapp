import React from 'react';
import cx from 'classnames';

const Modal = ({ children, isActive, closeAction }) => {
  return (
    <div className={cx('modal', { 'is-active': isActive })}>
      <div className="modal-background"></div>
      <div className="modal-content">{children}</div>
      <button
        onClick={() => closeAction(false)}
        className="modal-close is-large"
        aria-label="close"
      ></button>
    </div>
  );
};

export default Modal;
