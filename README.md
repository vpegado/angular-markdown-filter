angular-markdown-filter
=======================

Markdown filter for Angular

## Installation
```bash
# As a bower component:
$ bower install angular-markdown-filter

# As a npm package:
$ npm install angular-markdown-filter
```
It's recomended to also use [ngSanitize](https://docs.angularjs.org/api/ngSanitize) if you plan to bind the output using [ngBindHtml](https://docs.angularjs.org/api/ng/directive/ngBindHtml) to pervent [XSS](https://www.owasp.org/index.php/Cross-site_Scripting_%28XSS%29).
```bash
$ bower install angular-sanitize
```

## Import dependencies
```html
<script src="bower_components/showdown/compressed/showdown.js"></script>
<script src="bower_components/angular-markdown-filter/markdown.js"></script>
<!-- Optional: -->
<script src="bower_components/angular-sanitize/angular-sanitize.js"></script>
```
```javascript
angular.module('myApp', [
  'ngSanitize', // Optional
  'markdown'
]);
```

## Configuration
The underlying Showdown converter can be configured through the `markdown` provider
```javascript
angular.module('markdown')
  .config(function(markdownProvider) {
    markdownProvider.config({
      extensions: ['table']
    });
  });
``` 
see the [Showdown documentation](https://github.com/showdownjs/showdown#creating-markdown-extensions)
for details on how to create extensions.

## Usage
```javascript
angular.module('myApp')
  // Optional Config
  .config(function ($compileProvider) {
    // Add optional support for custom schema links: "herp://" and "derp://"
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(herp|derp):/);
  })
  .controller('MainCtrl', function ($scope) {
    $scope.text = '# Heading 1\n- [Link](http://example.com)\n- [Custom Link 1](herp://is.this.working?)\n- [Custom Link 2](derp://is.this.working?)';
  });
```
```html
<div class="container" ng-bind-html="text | markdown"></div>
```
