import React from 'react';
import Button from '../primitives/Button';

const FilterLink = (props) => {
  return (
    <Button
      small
      secondary
      onClick={props.onClick}
      disabled={props.active}
    >
      {props.children}
    </Button>
  )
}

export default FilterLink;
