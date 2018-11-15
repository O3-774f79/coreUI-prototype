import React, { Component, Fragment } from 'react';

import Select from 'react-select';
export default class CompSelect extends Component {
  state = {
    isClearable: true,
    isDisabled: false,
    isLoading: false,
    isRtl: false,
    isSearchable: true,
    selectedOption: null
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    const {selectValue}= this.props
    // console.log(`Option selected:`, selectedOption.value);
    selectValue(selectedOption);
  }
  render() {
    const {
      isClearable,
      isSearchable,
      isDisabled,
      selectedOption 
    } = this.state;
    return (
      <Fragment>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={this.props.defaultBasicSelectValue}
          isDisabled={isDisabled}
          isLoading={this.props.loading}
          value={selectedOption}
          isClearable={isClearable}
          isSearchable={isSearchable}
          name="color"
          options={this.props.data}
          onChange={this.handleChange}
        />
      </Fragment>
    );
  }
}