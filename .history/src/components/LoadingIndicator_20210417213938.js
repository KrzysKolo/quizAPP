import React from 'react';

import { Root, Content, Spiner  } from './LoadingIndicator.css';


function LoadingIndicator() {
  return (
    <Root>
      <Content >
        <Spiner />
      </Content>
    </Root>
  )
}

export default LoadingIndicator;