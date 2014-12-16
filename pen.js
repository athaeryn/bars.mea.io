// JS

void function(w) {
  "use strict";

  w.graph = function graph(el, min, max) {
    el.dataset.min = min;
    el.dataset.max = max;

    return {
      plot: plot
    };

    function plot(data) {
      var width = 100 / data.length;
      clear(el);
      data.forEach(function(d, i) {
        var slice = createSlice(remap(d), width, i);
        slice.title = d;
        el.appendChild(slice);
      });
    }

    function remap(value) {
      return Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));
    }
  };

  function clear(el) {
    el.innerHTML = null;
  }

  function createSlice(height, width, index) {
    var s = document.createElement("b");
    s.style.height = height + "%";
    s.style.width  = width  + "%";
    s.style.left   = (width * index) + "%";
    return s;
  }

}(window);
