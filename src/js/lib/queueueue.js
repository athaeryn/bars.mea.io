module.exports = function queueueue(length) {
  // generate an array of 0s of the desired length.
  var values = Array(length).fill(0);

  return function get(newVal) {
    if(newVal !== void 0) {
      values = values.slice(1).concat([newVal]);
    }
    return values;
  }
};
