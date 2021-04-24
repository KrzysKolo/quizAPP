import React from 'react';

import { Root, Content, Spiner  } from './LoadingIndicator.css';


const Loading = () => {
  return (
    <Root>
      <Content >
        <Spiner />
      </Content>
    </Root>
  )
}

export default Loading;