import React, { useState } from 'react';
import styles from './Dropdown.module.scss';
import cx from 'classnames';

const Dropdown = ({ options, title, setValue }) => {
  const [pickedOption, setPickedOption] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleToggle = (event) => {
    event.stopPropagation();
    setToggle(!toggle);
  };

  const handleOptionClick = (event) => {
    const value = event.target.getAttribute('value');
    setPickedOption(value);
    setValue(value);
    setToggle(!toggle);
  };

  return (
    <div className={cx('dropdown', { 'is-active': toggle })}>
      <div className="dropdown-trigger">
        <button
          className={cx('button', styles.dropdown)}
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={handleToggle}
        >
          <span>{pickedOption || title}</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <ul className="dropdown-content">
          {options.map((option) => (
            <li
              key={option}
              value={option}
              className={cx('dropdown-item', styles.dropdownItem)}
              onClick={handleOptionClick}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
