import React, { useState } from 'react';
import styles from './CommentBox.module.scss';

import postsRestService from '../postsRestService';
import { useComments } from '../../../../../context/comments';

const CommentBox = ({ id, closeAction }) => {
  const { comments, setComments } = useComments();

  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [accept, setAccept] = useState(false);

  const handleCloseButton = () => {
    closeAction(false);
  };

  const handleInput = (event, saveAction) => {
    const value = event.target.value.trim();
    saveAction(value);
  };

  const handleSubmit = () => {
    if (accept && name && comment) {
      const newComment = {
        id,
        name,
        comment,
      };
      setComments([...comments, newComment]);
      setError(false);
      postsRestService.postComment(newComment);
      closeAction(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className="subtitle mb-4">Add coment</h2>
      <input
        className="input mb-2"
        type="text"
        placeholder="Your name"
        onChange={(e) => handleInput(e, setName)}
      />
      <textarea
        className="textarea mb-4"
        placeholder="Your comment"
        onChange={(e) => handleInput(e, setComment)}
      ></textarea>
      <label className="checkbox mb-3">
        <input
          type="checkbox"
          value={accept}
          onChange={() => setAccept(!accept)}
        />{' '}
        I accept
      </label>
      <div className={styles.buttonsContainer}>
        <button className="button" onClick={handleSubmit}>
          Submit
        </button>
        <button className="button" onClick={handleCloseButton}>
          Close
        </button>
      </div>
      {error ? (
        <p className={styles.error}>
          You have to provide name, comment and accept checkbox.
        </p>
      ) : null}
    </div>
  );
};

export default CommentBox;
