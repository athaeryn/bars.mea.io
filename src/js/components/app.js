import React from "react";

import Favicon from "./favicon";
import Graph from "./Graph";

export default React.createClass({
  displayName: "App",

  getInitialState() {
    return {
      data: this.props.data || new Array(this.props.size).fill(0)
    };
  },

  render() {
    // don't even worry about it
    return (
      <html>
        <head>
          <title>bars</title>
          <link rel={"stylesheet"} href={"/css/bars.css"} />
          <Favicon
            data={this.state.data}
            min={this.props.min}
            max={this.props.max}
          />
        </head>
        <body>
          <Graph
            data={this.state.data}
            size={this.props.size}
            min={this.props.min}
            max={this.props.max}
          />
        </body>
      </html>
    );
  }
});
