#!/usr/bin/env node

/*
 Copyright (c) Microsoft. All rights reserved.
 Licensed under the MIT license. See LICENSE file in the project root for full license information.
 */

var exec, fork, fs, path, Q, hookTasks;

module.exports = function (context) {
  fs = require('fs');
  path = require('path');
  Q = context.requireCordovaModule('q');
  exec = Q.nfbind(require('child_process').exec);
  fork = require('child_process').fork;

  var deferred = Q.defer();
  console.log("Running gulp task default for Cordova event");
  var child = fork("./node_modules/gulp/bin/gulp.js", ["default"]);
  child.on("error", function (err) {
    deferred.reject(err);
  });
  child.on("exit", function (code, signal) {
    if (code === 0 && signal === null) {
      deferred.resolve();
    } else {
      deferred.reject("Non-zero exit code or signal. Code: " + code + ", Signal: " + signal);
    }
  });
  return deferred.promise;

};
