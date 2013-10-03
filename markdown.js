angular.module('markdown', [])
    .filter('markdown', function () {
        var converter = new Showdown.converter();
        return function (text) {
            var markdown = text || '';
            var html = converter.makeHtml(markdown);
            return html;
        };
    });
