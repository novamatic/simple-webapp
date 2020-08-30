import React from 'react';
import { Link, useParams } from 'react-router-dom';

import cx from 'classnames';

const Pagination = () => {
  const { page } = useParams();

  const prevPage = Number(page) - 1;
  const nextPage = Number(page) + 1;

  const generateLink = (pageId) => `/dashboard/${pageId}`;

  const mediumPagePicked = (
    <>
      <li>
        <span className="pagination-ellipsis">&hellip;</span>
      </li>
      <li>
        <Link
          to={generateLink(prevPage)}
          className="pagination-link"
          aria-label="Goto page 45"
        >
          {prevPage}
        </Link>
      </li>
      <li>
        <Link to={generateLink(page)} className="pagination-link is-current">
          {page}
        </Link>
      </li>
      <li>
        <Link to={generateLink(nextPage)} className="pagination-link">
          {nextPage}
        </Link>
      </li>
      <li>
        <span className="pagination-ellipsis">&hellip;</span>
      </li>
    </>
  );

  const startPagePicked = (
    <>
      <li>
        <Link
          to="/dashboard/2"
          className={cx('pagination-link', { 'is-current': page === '2' })}
        >
          2
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard/3"
          className={cx('pagination-link', { 'is-current': page === '3' })}
        >
          3
        </Link>
      </li>
      <li>
        <span className="pagination-ellipsis">&hellip;</span>
      </li>
    </>
  );

  const endPagePicked = (
    <>
      <li>
        <span className="pagination-ellipsis">&hellip;</span>
      </li>
      <li>
        <Link
          to="/dashboard/8"
          className={cx('pagination-link', { 'is-current': page === '8' })}
        >
          8
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard/9"
          className={cx('pagination-link', { 'is-current': page === '9' })}
        >
          9
        </Link>
      </li>
    </>
  );

  const setPaginationContent = () => {
    if (page <= 2) {
      return startPagePicked;
    } else if (page > 2 && page < 9) {
      return mediumPagePicked;
    } else if (page >= 9) {
      return endPagePicked;
    }
    return null;
  };

  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <ul className="pagination-list">
        <li>
          <Link
            to="/dashboard/1"
            className={cx('pagination-link', { 'is-current': page === '1' })}
          >
            1
          </Link>
        </li>
        {setPaginationContent()}
        <li>
          <Link
            to="/dashboard/10"
            className={cx('pagination-link', { 'is-current': page === '10' })}
          >
            10
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
