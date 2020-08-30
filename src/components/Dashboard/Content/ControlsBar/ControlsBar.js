import React from 'react';
import Dropdown from '../../../Generic/Dropdown/Dropdown';
import cx from 'classnames';
import styles from './ControlsBar.module.scss';

const ControlsBar = ({
  view,
  sortBy,
  sortType,
  setView,
  setSortBy,
  setSortType,
}) => {
  return (
    <div className={cx('container', styles.controlsContainer)}>
      <div className={styles.leftDropdowns}>
        <Dropdown
          setValue={setSortType}
          options={['Sort A-Z', 'Sort Z-A']}
          title={sortType}
        />
        <Dropdown
          setValue={setSortBy}
          options={['Sort by title', 'Sort by date']}
          title={sortBy}
        />
      </div>
      <div className={styles.rightDropdowns}>
        <Dropdown setValue={setView} options={['List', 'Grid']} title={view} />
      </div>
    </div>
  );
};

export default ControlsBar;
