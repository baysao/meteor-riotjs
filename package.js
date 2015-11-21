var riotVersion = "2.3.1";
Package.describe({
  summary: "riotjs preprocessor",
  version: "2.3.1-32",
  name: "baysao:riotjs",
  git: "https://github.com/baysao/meteor-riotjs-preprocessor.git"
});
Npm.depends({
  "riot": riotVersion
});

Package.registerBuildPlugin({
  name: "riotjs-package-initialize",
  use: [
  'underscore@1.0.2'
  ],
  sources: [
  'plugin/init_npm.js'
  ],
  npmDependencies: {
    'mkdirp': '0.5.0',
    'node-echo': '0.1.1',
    'js-beautify': '1.5.5'
  }
});

Package.onUse(function (api, where) {
  api.imply('meteorhacks:async@1.0.0');
  api.addFiles (['.npm/package/node_modules/riot/riot.min.js', 'post.js'] , 'client');
  api.addFiles ('riot_server.js', 'server');
  api.export('Riot');
});
