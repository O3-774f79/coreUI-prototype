import React, { Component, Fragment } from 'react';

import Select from 'react-select';
export default class BraSelect extends Component {
  state = {
    isClearable: false,
    isDisabled: false,
    isLoading: false,
    isRtl: false,
    isSearchable: true,
    selectedOption: this.props.defaultBasicSelectValue,
    data:[]
  };
  componentDidMount(){
    this.setState({data:[
      { value: 'ocean', label: 'Ocean'},
      { value: 'blue', label: 'Blue'},
      { value: 'purple', label: 'Purple'},
      { value: 'red', label: 'Red'},
      { value: 'orange', label: 'Orange'},
      { value: 'yellow', label: 'Yellow' },
      { value: 'green', label: 'Green' },
      { value: 'forest', label: 'Forest'},
      { value: 'slate', label: 'Slate'},
      { value: 'silver', label: 'Silver' },
      ],
      isLoading: false
    })
  }
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
      selectedOption,
      data
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
          options={data}
          onChange={this.handleChange}
        />
      </Fragment>
    );
  }
}