"use strict";

module.export = function uniqueValue(value) {
  const arr = [];

  if (typeof value == 'number' || typeof value == 'sting' || Object.getPrototypeOf(value) === Object.prototype) {
      throw new Error('Value must be an array')
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