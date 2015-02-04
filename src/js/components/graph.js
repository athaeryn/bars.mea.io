import React from "react";
import Bar from "./bar";

export default React.createClass({
  displayName: "Graph",

  propTypes: {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    size: React.PropTypes.number.isRequired,
    data: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
  },

  getInitialState() {
    return {
      data: this.props.data || new Array(this.props.size).fill(0)
    };
  },

  render() {
    var bars = this.state.data.map(function(val, i) {
      return (
        <Bar
          key={i}
          value={val}
          width={100 / this.props.size}
          index={i}
          min={this.props.min}
          max={this.props.max}
        />
      );
    }.bind(this));

    return (
      <div
        className={"container"}
        data-min={this.props.min}
        data-max={this.props.max}
      >
        {bars}
      </div>
    );
  }
});
