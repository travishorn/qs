(function () {
  'use strict';

  // Array.isArray() polyfill
  if (!Array.isArray) {
    Array.isArray = function (arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    };
  }

  // Main object that will be exported
  var qs = {

    // Function to parse query string and return an object
    get: function () {

      // Capture query string and initialize new object
      var query = window.location.search;
      var obj = {};

      // If no query string, return empty object
      if (query === '') return obj;

      // Remove the '?' at front of query string
      query = query.slice(1);

      // Split the query string into key/value pairs (ampersand-separated)
      query = query.split('&');

      // Loop through each key/value pair
      query.map(function (part) {
        var key;
        var value;

        // Split each key/value pair into their separate parts
        part = part.split('=');
        key = part[0];
        value = part[1];

        // If the key doesn't exist yet, set it
        if (!obj[key]) {
          obj[key] = value;
        } else {

          // If it does already exist...

          // If it's not an array, make it an array
          if (!Array.isArray(obj[key])) {
            obj[key] = [obj[key]];
          }

          // Push the new value to the key's array
          obj[key].push(value);
        }
      });

      // Return the query string object
      return obj;
    },
  };

  // Make sure we're in a browser
  if (window) {

    // Make sure we're not overwriting the qs key
    if (!window.qs) {
      window.qs = qs;
    } else {
      throw new Error('Error bootstrapping qs: window.qs already set.');
    }
  }
})();
