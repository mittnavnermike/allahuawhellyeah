import { injectGlobal } from 'styled-components';
import vars from './variables';

/* eslint-disable */

injectGlobal`
  html {
    text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif;
    padding: 0;
    line-height: 1.4;
    font-size: 16px;
    padding: 2rem;
  }

  a {
    color: ${vars.colors.secondary};
  }
`;
