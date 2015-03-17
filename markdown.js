angular.module('markdown', [])
    .provider('markdown', function () {
        var opts = {};
        return {
            config: function (newOpts) {
                opts = newOpts;
            },
            $get: function () {
                return new Showdown.converter(opts);
            }
        };
    })
    .filter('markdown', ['$sce', 'markdown', function (markdown) {
        return function (text) {
            text = text || '';
            return markdown.makeHtml(text);
        };
    }]);
