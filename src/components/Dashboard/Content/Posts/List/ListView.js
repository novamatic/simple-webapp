import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { sortByDict, sortTypeDict } from '../postsUtils';

import postsRestService from '../postsRestService';
import ListPost from './ListPost';

const ListView = ({ sortBy, sortType }) => {
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
  }, [page, error, sortBy, sortType]);

  return !error ? (
    posts.map((post) => <ListPost key={post.id} {...post} />)
  ) : (
    <h1 className="title is-1">No Data</h1>
  );
};

export default ListView;
