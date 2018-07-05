onmessage = function(e) {
  // gets data
  var result = e.data[0] * e.data[1];

  // sends result to listeners
  postMessage(result);
};
