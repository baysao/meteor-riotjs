var riotVersion = "2.3.1";
Package.describe({
  summary: "A React- like, 2.5K user interface library",
  version: riotVersion + "-22",
  name: "baysao:riotjs",
  git: "https://github.com/baysao/meteor-riotjs.git"
});

Npm.depends({
  "riot": riotVersion
});

Package.registerBuildPlugin({
  name: "initializing-npm-support",
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
  api.addFiles(['.npm/package/node_modules/riot/riot.min.js', 'post.js'], ['client']);
  api.export('Riot');
  api.export('riot');
});
