import React, { useState, useEffect } from 'react';
import styles from './AuthorInfo.module.scss';
import postRestService from '../postsRestService';

const AuthorInfo = ({ isActive, id, closeAction }) => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    if (isActive) {
      postRestService
        .getAuthor(id)
        .then(({ data }) => {
          setAuthor(data.data);
        })
        .catch((error) => console.log(error));
    }
  }, [id, isActive]);

  return author ? (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <h2 className={styles.name}>{author.name}</h2>
        <img className={styles.thumbnail} src={author.avatar} alt="thumbnail" />
      </div>
      <p>{author.description}</p>
      <button className={styles.button} onClick={() => closeAction(false)}>
        Close
      </button>
    </div>
  ) : null;
};

export default AuthorInfo;
