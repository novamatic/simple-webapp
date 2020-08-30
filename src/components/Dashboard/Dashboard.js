import React from 'react';
import Header from './Header/Header';
import Content from './Content/Content';

import styles from './Dashboard.module.scss';

export const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Header />
      <Content />
    </div>
  );
};
export default Dashboard;
