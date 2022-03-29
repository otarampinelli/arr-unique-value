"use strict";

module.exports = function uniqueValue(value) {
  const arr = [];

  if (typeof value == 'number' || typeof value == 'string' || Object.getPrototypeOf(value) === Object.prototype) {
      throw new Error('Must be an array')
  }

  value.forEach((el) => {
    if (Array.isArray(el)) {
      el = new Set(el);
      arr.push([...uniqueValue(el)]);
    } else {
      arr.push(el);
    }
  });

  return [...new Set(arr)];
};

