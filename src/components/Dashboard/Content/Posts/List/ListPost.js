import React, { useState } from 'react';
import { formatDate } from '../postsUtils';
import { useHistory } from 'react-router-dom';
import Modal from '../../../../Generic/Modal/Modal';
import AuthorInfo from '../AuthorInfo/AuthorInfo';

import styles from './ListView.module.scss';
import cx from 'classnames';

const ListPost = ({ id, thumbnail, date, title, excerpt, authorId }) => {
  const [toggle, setToggle] = useState(false);
  const [authorInfoToggle, setAuthorInfoToggle] = useState(false);

  const history = useHistory();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleRedirect = () => history.push(`/post/${id}`);

  const openAuthorInfoModal = () => {
    setAuthorInfoToggle(!authorInfoToggle);
  };

  return (
    <div className={styles.post}>
      <div className={styles.visiblePart}>
        <div className={styles.infoPart}>
          <img className={styles.thumbnail} src={thumbnail} alt="Logo" />
          <div className={styles.titleContainer}>
            <span>{formatDate(date)}</span>
            <h2
              className={cx('subtitle', styles.subtitle)}
              onClick={handleRedirect}
            >
              {title}
            </h2>
          </div>
        </div>
        <div>
          <button onClick={handleToggle}>e</button>
          <button onClick={openAuthorInfoModal}>i</button>
        </div>
      </div>

      {toggle ? (
        <div>
          <p>{excerpt}</p>
          <button>Close</button>
        </div>
      ) : null}

      <Modal isActive={authorInfoToggle} closeAction={setAuthorInfoToggle}>
        <AuthorInfo
          id={authorId}
          isActive={authorInfoToggle}
          closeAction={setAuthorInfoToggle}
        />
      </Modal>
    </div>
  );
};

export default ListPost;
