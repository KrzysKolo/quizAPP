import React from 'react';

import { Root, Content, Spiner  } from './Loading.style';


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