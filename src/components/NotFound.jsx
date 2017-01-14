import React from 'react';
import { Link } from 'react-router';

const PageNotFound = (props) => (
  <article>
    <p>Page not found</p>
    <Link to="/">Go home</Link>
  </article>
);

export default PageNotFound;
