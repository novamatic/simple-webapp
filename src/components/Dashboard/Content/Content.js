import React, { useState } from 'react';

import ControlsBar from './ControlsBar/ControlsBar';
import DataView from './Posts/DataView/DataView';
import Pagination from './Pagination/Pagination';
import styles from './Content.module.scss';
import cx from 'classnames';

const Content = () => {
  const [view, setView] = useState('List');
  const [sortBy, setSortBy] = useState('Sort by title');
  const [sortType, setSortType] = useState('Sort A-Z');

  return (
    <div className={cx(styles.contentContainer, 'container')}>
      <ControlsBar
        view={view}
        sortBy={sortBy}
        sortType={sortType}
        setView={setView}
        setSortBy={setSortBy}
        setSortType={setSortType}
      />
      <div className={styles.postsContainer}>
        <DataView sortBy={sortBy} sortType={sortType} view={view} />
      </div>
      <Pagination />
    </div>
  );
};

export default Content;
