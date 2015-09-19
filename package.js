var riotVersion = "2.2.4";

Package.describe({
  summary: "A React- like, 2.5K user interface library",
  version: riotVersion + "-1",
  name: "baysao:riotjs",
  git: "https://github.com/baysao/meteor-riotjs.git"
});

Npm.depends({
  "riot": riotVersion
});

Package.registerBuildPlugin({
  name: "compileRiot",
  use: [],
  sources: [
    'plugin/compile-riot.js'
  ],
  npmDependencies: {
    "riot": riotVersion
  }
});

Package.onUse(function (api) {
  api.addFiles (['.npm/package/node_modules/riot/riot.min.js', 'post.js'] , 'client');
  api.addFiles ('riot_server.js', 'server');
  api.export('Riot');
});

