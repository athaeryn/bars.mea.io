import React from "react";
import Bar from "./bar";

export default React.createClass({
  displayName: "Graph",

  render() {
    var bars = this.props.data.map(function(val, i) {
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
