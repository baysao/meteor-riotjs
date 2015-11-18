var riotVersion = "2.3.1";

Package.describe({
  summary: "A React- like, 2.5K user interface library",
  version: riotVersion + "-1",
  name: "baysao:riotjs",
  git: "https://github.com/baysao/meteor-riotjs.git"
});

Npm.depends({
  "riot": riotVersion
});


var pluginInfo = {
  name: "compileRiot",
  use: [],
  sources: [
  'plugin/compile-riot.js'
  ],
  npmDependencies: {
    "riot-compiler": "2.3.11"
  }
};

var path = Npm.require('path');
var fs = Npm.require('fs');
var packagesJsonFile = path.resolve('./riot_packages.json');
try {
  var fileContent = fs.readFileSync(packagesJsonFile);
  var packages = JSON.parse(fileContent.toString());
  for(var i in packages) {
    pluginInfo.npmDependencies[i] = packages[i];
  }
  // console.log(pluginInfo.npmDependencies);
  Package.registerBuildPlugin(pluginInfo);
} catch(ex) {
  console.error('ERROR: packages.json parsing error [ ' + ex.message + ' ]');
}

Package.onUse(function (api) {
  api.use('isobuild:compiler-plugin@1.0.0');
  api.addFiles (['.npm/package/node_modules/riot/riot.min.js', 'post.js'] , ['client']);
  api.export('Riot');
});

