import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import postsRestService from '../postsRestService';

import dashboardStyles from '../../../Dashboard.module.scss';
import styles from './SinglePost.module.scss';
import Header from '../../../Header/Header';
import CommentBox from '../CommentBox/CommentBox';
import AuthorInfo from '../AuthorInfo/AuthorInfo';
import Modal from '../../../../Generic/Modal/Modal';

import { formatDate } from '../postsUtils';

const SinglePost = () => {
  const { id } = useParams();

  const [enterDate, setEnterDate] = useState(null);

  const [post, setPost] = useState({});
  const [toggleComment, setToggleComment] = useState(false);
  const [toggleAuthorInfo, setToggleAuthorInfo] = useState(false);

  useEffect(() => {
    if (enterDate === null) {
      const enterDate = new Date().valueOf();
      setEnterDate(enterDate);
    }
    return () => {
      if (enterDate !== null) {
        const leaveDate = new Date().valueOf();
        const time = ((leaveDate - enterDate) / 1000).toFixed(0);
        postsRestService.logTime(id, { time });
      }
    };
  }, [id, enterDate]);

  useEffect(() => {
    postsRestService
      .getPost(id)
      .then(({ data }) => {
        setPost(data.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleCommentButton = () => {
    setToggleComment(true);
  };

  const handleAuthorInfoButton = () => {
    setToggleAuthorInfo(true);
  };

  return (
    <div className={dashboardStyles.dashboardContainer}>
      <Header />
      <div className={styles.container}>
        <h1 className="title is-2">{post.title}</h1>
        <img className={styles.thumbnail} src={post.thumbnail} alt="tumbnail" />
        <div className={styles.infoContainer}>
          <span>{post.date ? formatDate(post.date) : null}</span>
          <button onClick={handleAuthorInfoButton}>i</button>
        </div>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <button className="button" onClick={handleCommentButton}>
          Comment
        </button>
      </div>

      <Modal isActive={toggleComment} closeAction={setToggleComment}>
        <CommentBox id={post.id} closeAction={setToggleComment} />
      </Modal>

      <Modal isActive={toggleAuthorInfo} closeAction={setToggleAuthorInfo}>
        <AuthorInfo
          id={post.authorId}
          isActive={toggleAuthorInfo}
          closeAction={setToggleAuthorInfo}
        />
      </Modal>
    </div>
  );
};

export default SinglePost;
