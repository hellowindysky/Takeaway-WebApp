import { encapsulatePromise } from './common.js';

export function seller() {
  var url = '/api/:seller';
  return encapsulatePromise(url);
};

export function goods() {
  var url = '/api/:goods';
  return encapsulatePromise(url);
};
