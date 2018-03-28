import React from 'react';

const BtnGroup = ({ handleClick}) => (
    <ul>
      <li data-click-type='section' onClick={handleClick}>Section</li>
      <li data-click-type='practice' onClick={handleClick}>Practice</li>
      {/* <li data-click-type='download' onClick={handleClick}>Download</li> */}
      {/* <li data-click-type='test' onClick={handleClick}>Test</li> */}
    </ul>
)

export {BtnGroup};
