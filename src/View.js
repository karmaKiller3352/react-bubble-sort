import './View.scss';
import React from 'react';
function View({ arr }) {
  return (
    <div className='sort-wrapper'>
      {arr.map((item, i) => (
        <span key={i} style={{ height: item.height }}></span>
      ))}
    </div>
  );
}
export default View;
