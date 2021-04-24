import styled, { createGlobalStyle } from 'styled-components';

import BGImage from './images/question-mark-2492009_1920.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100vh;

  }

    body {
      background-image: url(${BGImage});
      background-size: cover;
      margin: 0;
      padding: 0 20px;
    }
`;