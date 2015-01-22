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
    .filter('markdown', ['$sce', 'markdown', function ($sce, markdown) {
        return function (text) {
            if(text == null) text = '';
            var html = markdown.makeHtml(text);
            return $sce.trustAsHtml(html);
        };
    }]);
