import React from 'react';
import styles from './GridView.module.scss';
import { useHistory } from 'react-router-dom';

const GridPost = ({ id, title, thumbnail }) => {
  const history = useHistory();

  const handleRedirect = () => history.push(`/post/${id}`);

  return (
    <div className={styles.postContainer} onClick={handleRedirect}>
      <h2 className={styles.title}>{title}</h2>
      <img className={styles.thumbnail} src={thumbnail} alt="thumbnail" />
    </div>
  );
};

export default GridPost;
