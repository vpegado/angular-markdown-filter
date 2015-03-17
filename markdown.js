'use strict';

angular.module('markdown', [])
  .provider('markdown', [function () {
    var opts = {};
    return {
      config: function (newOpts) {
        opts = newOpts;
      },
      $get: function () {
        return new window.Showdown.converter(opts);
      }
    };
  }])
  .filter('markdown', ['markdown', function (markdown) {
    return function (text) {
      return markdown.makeHtml(text || '');
    };
  }]);
