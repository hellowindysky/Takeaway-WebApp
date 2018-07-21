import axios from 'axios';

export function encapsulatePromise(url, request) {
  var promise = new Promise(function(resolve, reject) {
    axios.post(url, request).then(function(res) {
      if (res.data.code === 0) {
        resolve(res.data.data);
      }
    }, function(err) {
      console.log('then里的error', err);
      reject(err);
    }).catch(function(err) {
      console.log('catch里的error', err);
      reject(err);
    });
  });
  return promise;
};
