System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "ignore": ["github:*", "npm:*"],
    "stage": 0,
    "optional": []
  },
  paths: {
    "github:*": "https://cdn.rawgit.com/jdanyow/aurelia-bundle/v1.0.3/jspm_packages/github/*",
    "npm:*": "https://cdn.rawgit.com/jdanyow/aurelia-bundle/v1.0.3/jspm_packages/npm/*",
    "aurelia-bundle": "https://cdn.rawgit.com/jdanyow/aurelia-bundle/v1.0.3/dist/aurelia-bundle"
  },

  bundles: {
    "aurelia-bundle": [
      "zzzz",
      "npm:aurelia-binding@1.0.0-beta.1.2.2",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.1.4",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5",
      "npm:aurelia-fetch-client@1.0.0-beta.1.1.1",
      "npm:aurelia-framework@1.0.0-beta.1.1.4",
      "npm:aurelia-http-client@1.0.0-beta.1.1.2",
      "npm:aurelia-history@1.0.0-beta.1.1.1",
      "npm:aurelia-history-browser@1.0.0-beta.1.1.4",
      "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "npm:aurelia-loader-default@1.0.0-beta.1.1.3",
      "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "npm:aurelia-logging-console@1.0.0-beta.1.1.4",
      "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "npm:aurelia-path@1.0.0-beta.1.1.1",
      "npm:aurelia-polyfills@1.0.0-beta.1.0.1",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.1.3",
      "npm:aurelia-router@1.0.0-beta.1.1.3",
      "npm:aurelia-templating@1.0.0-beta.1.1.4",
      "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
      "npm:aurelia-templating-binding@1.0.0-beta.1.1.2",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.2",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3",
      "github:systemjs/plugin-css@0.1.20",
      "github:github/fetch@0.11.0",
      "npm:moment@2.11.2",
      "npm:numeral@1.5.3",
      "github:systemjs/plugin-text@0.0.7",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.1.4/aurelia-bootstrapper",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1/aurelia-event-aggregator",
      "npm:aurelia-binding@1.0.0-beta.1.2.2/aurelia-binding",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5/aurelia-dependency-injection",
      "npm:aurelia-fetch-client@1.0.0-beta.1.1.1/aurelia-fetch-client",
      "npm:aurelia-framework@1.0.0-beta.1.1.4/aurelia-framework",
      "npm:aurelia-http-client@1.0.0-beta.1.1.2/aurelia-http-client",
      "npm:aurelia-history@1.0.0-beta.1.1.1/aurelia-history",
      "npm:aurelia-history-browser@1.0.0-beta.1.1.4/aurelia-history-browser",
      "npm:aurelia-loader@1.0.0-beta.1.1.1/aurelia-loader",
      "npm:aurelia-loader-default@1.0.0-beta.1.1.3/aurelia-loader-default",
      "npm:aurelia-logging@1.0.0-beta.1.1.2/aurelia-logging",
      "npm:aurelia-logging-console@1.0.0-beta.1.1.4/aurelia-logging-console",
      "npm:aurelia-metadata@1.0.0-beta.1.1.6/aurelia-metadata",
      "npm:aurelia-path@1.0.0-beta.1.1.1/aurelia-path",
      "npm:aurelia-polyfills@1.0.0-beta.1.0.1/aurelia-polyfills",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.1.3/aurelia-route-recognizer",
      "npm:aurelia-task-queue@1.0.0-beta.1.1.1/aurelia-task-queue",
      "npm:aurelia-router@1.0.0-beta.1.1.3/aurelia-router",
      "npm:aurelia-templating-binding@1.0.0-beta.1.1.2/aurelia-templating-binding",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.2/aurelia-templating-router",
      "npm:aurelia-templating@1.0.0-beta.1.1.4/aurelia-templating",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/aurelia-templating-resources",
      "github:systemjs/plugin-css@0.1.20/css",
      "github:github/fetch@0.11.0/fetch",
      "npm:numeral@1.5.3/numeral",
      "github:systemjs/plugin-text@0.0.7/text",
      "npm:moment@2.11.2/moment",
      "npm:aurelia-pal-browser@1.0.0-beta.1.1.4",
      "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.2/router-view",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.2/route-loader",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.2/route-href",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/compose",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/if",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/with",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/repeat",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/show",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/hide",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/sanitize-html",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/replaceable",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/focus",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/compile-spy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/view-spy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/dynamic-element",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/css-resource",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/binding-mode-behaviors",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/html-sanitizer",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/throttle-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/debounce-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/signal-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/binding-signaler",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/update-trigger-binding-behavior",
      "npm:aurelia-pal@1.0.0-beta.1.1.1/aurelia-pal",
      "npm:aurelia-pal-browser@1.0.0-beta.1.1.4/aurelia-pal-browser",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/repeat-strategy-locator",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/repeat-utilities",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/analyze-view-factory",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/null-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/array-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/map-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/set-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/number-repeat-strategy"
    ]
  },

  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-beta.1.1.2",
    "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.2",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.1.4",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5",
    "aurelia-dialog": "npm:aurelia-dialog@0.5.7",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1.1.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.1.4",
    "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.1.4",
    "aurelia-http-client": "npm:aurelia-http-client@1.0.0-beta.1.1.2",
    "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.1.3",
    "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.1.4",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
    "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.0.1",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.1.3",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.3",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
    "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.4",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.1.2",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.1.3",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.1.2",
    "aurelia-validation": "npm:aurelia-validation@0.6.3",
    "babel": "npm:babel-core@5.8.35",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "core-js": "npm:core-js@2.0.3",
    "css": "github:systemjs/plugin-css@0.1.20",
    "fetch": "github:github/fetch@0.11.0",
    "font-awesome": "npm:font-awesome@4.5.0",
    "moment": "npm:moment@2.11.2",
    "numeral": "npm:numeral@1.5.3",
    "text": "github:systemjs/plugin-text@0.0.7",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "github:components/jquery@2.2.1"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.0-beta.1.1.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.4"
    },
    "npm:aurelia-binding@1.0.0-beta.1.2.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1.1.4": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.1.4",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.1.4",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.1.3",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.1.4",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.0.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.3",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.4",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.1.2",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.1.3",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.1.2"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-dialog@0.5.7": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.4"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2"
    },
    "npm:aurelia-framework@1.0.0-beta.1.1.4": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.4"
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.1.4": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-http-client@1.0.0-beta.1.1.2": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.1.3": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-loader@1.0.0-beta.1.1.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1.1.4": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-metadata@1.0.0-beta.1.1.6": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1.1.4": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-polyfills@1.0.0-beta.1.0.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1.1.3": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-router@1.0.0-beta.1.1.3": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.1.3"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.1.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.2",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.4"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.1.3": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.4"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.1.2": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.3",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.4"
    },
    "npm:aurelia-templating@1.0.0-beta.1.1.4": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-validation@0.6.3": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.4"
    },
    "npm:babel-runtime@5.8.35": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@2.0.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:font-awesome@4.5.0": {
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:moment@2.11.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:numeral@1.5.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});