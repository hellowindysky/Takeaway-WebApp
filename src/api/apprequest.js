import { encapsulatePromise } from './common.js';

export function seller() {
  var url = ':seller';
  return encapsulatePromise(url);
};
