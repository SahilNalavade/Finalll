import React from 'react';
import { Player } from 'video-react';

export default props => {
  return (
    <Player>
      <source src="/video1.mp4" paddong="50px"  />
    </Player>
  );
};