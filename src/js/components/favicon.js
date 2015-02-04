import React from "react";

export default React.createClass({
  displayName: "Favicon",

  getInitialState() {
    var canvas, context, img;

    canvas = document.createElement("canvas");
    canvas.width = 16;
    canvas.height = 16;

    context = canvas.getContext("2d");
    img = new Image;

    return {
      canvas, context, img
    };
  },

  remap(value) {
    return Math.max(
      0,
      Math.min(
        16,
        (value - this.props.min)
        / (this.props.max - this.props.min)
        * 16
      )
    );
  },

  render() {
    var href;
    this.state.context.fillStyle = "#000";
    this.state.context.fillRect(0, 0, 16, 16);
    this.state.context.fillStyle = "#488387";
    this.props.data.slice(45).forEach(function(val, i) {
      var amp = this.remap(val);
      this.state.context.fillRect((3 * i) + 1, 16 - amp, 2, amp);
    }.bind(this));

    href = this.state.canvas.toDataURL("image/x-icon");

    return (
      <link type={"image/x-icon"} rel={"shortcut icon"} href={href}/>
    );
  }
});
