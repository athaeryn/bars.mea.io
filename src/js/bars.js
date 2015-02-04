"use strict";

import React from "react";

import queueueue from "./lib/queueueue";
import Graph from "./components/graph";

require("6to5/polyfill");

window.BARS = {
  mount: function(el) {
    var queue = queueueue(50),
        socket,
        chart,
        config;

    socket = new WebSocket("ws://localhost:9999");
    socket.onmessage = function (msg) {
      try {
        var data = JSON.parse(msg.data);

        // The first time we receive data from the socket,
        // set the config to it and create the Graph.
        if (!config) {
          config = data;

          chart = React.render(
            (<Graph
              data={queue()}
              size={50}
              min={config.min || 0}
              max={config.max || 100}
            />),
            el
          );

          return;
        }

        chart && chart.setState({ data: queue(parseInt(data, 10))});
      } catch(e) { console.error(e.message); }
    };
  }
}
