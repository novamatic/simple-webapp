import React, { useState, useEffect } from 'react';
import styles from '../Grid/GridView.module.scss';
import { useParams } from 'react-router-dom';
import { sortByDict, sortTypeDict } from '../postsUtils';

import postsRestService from './../postsRestService';

import GridPost from '../Grid/GridPost';
import ListPost from '../List/ListPost';

const DataView = ({ view, sortBy, sortType }) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const { page } = useParams();

  const handleCorrectResponse = (data) => {
    setError(false);
    setPosts(data);
  };

  useEffect(() => {
    const ac = new AbortController();
    postsRestService
      .getPosts(page, sortTypeDict[sortType], sortByDict[sortBy])
      .then(({ data }) => {
        !data.data ? setError(true) : handleCorrectResponse(data.data);
      })
      .catch((error) => console.log(error));
    return ac.abort();
  }, [page, error, sortBy, sortType, view]);

  return !error ? (
    view === 'List' ? (
      posts.map((post) => <ListPost key={post.id} {...post} />)
    ) : (
      <div className={styles.container}>
        {posts.map((post) => (
          <GridPost key={post.id} {...post} />
        ))}
      </div>
    )
  ) : (
    <h1 className="title is-1">No Data</h1>
  );
};

export default DataView;
