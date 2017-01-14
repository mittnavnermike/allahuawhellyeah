import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setVisibilityFilter } from '../ducks/filters';

import FilterLink from '../components/FilterLink';

const Filter = (props) => {
  return (
  <div>
    {props.filters.map((filter, index) =>
      <FilterLink
        key={index}
        filter={filter.key}
        active={props.active === filter.key}
        onClick={() => props.setVisibilityFilter(filter.key)}
      >
        {filter.name}
      </FilterLink>
    )}
  </div>
)};

const mapStateToProps = (state, props) => ({
  filters: state.filters.options,
  active: state.filters.active,
})

const mapDispatchToProps =  (dispatch) => bindActionCreators({
  setVisibilityFilter,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter);
