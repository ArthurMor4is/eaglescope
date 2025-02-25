import React from 'react';

function Title(props) {
  // _icon
  const _icon = props.expanded ? 'fa fa-angle-down' : 'fa fa-angle-right';
  // style={'cursor: pointer;'}
  // style={'width:1.5rem;text-align:center;'}
  return (
    <span onClick={props.clicked}>
      <i className={_icon} />
      {props.title}
    </span>
  );
}

export default Title;
