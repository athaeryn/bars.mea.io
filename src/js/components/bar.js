import React from "react";

export default React.createClass({
  displayName: "Bar",

  propTypes: {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    value: React.PropTypes.number.isRequired,
    index: React.PropTypes.number.isRequired,
    width: React.PropTypes.number.isRequired
  },

  getDefaultProps() {
    return {
      min: 0,
      max: 100
    };
  },

  remap(value) {
    return Math.max(
      0,
      Math.min(
        100,
        (value - this.props.min)
        / (this.props.max - this.props.min)
        * 100
      )
    );
  },

  render() {
    var styles = {
      height: this.remap(this.props.value) + "%",
      width: this.props.width + "%",
      left: (this.props.width * this.props.index) + "%"
    };
    return (<b style={styles}></b>);
  }
});

