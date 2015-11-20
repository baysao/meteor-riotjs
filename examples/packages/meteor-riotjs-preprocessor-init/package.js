var path = Npm.require('path');
var fs = Npm.require('fs');
Package.describe({
  summary: "Riot PreProcessor",
  version: "0.1.0-1",
  name: "baysao:riotjs-preprocessor-init",
});
var pluginInfo = {
  name: "compileRiot",
  use: [],
  sources: ['compile-riot.js'],
  npmDependencies: {
    "riot-compiler": "2.3.11"
  }
};
var packagesJsonFile = path.resolve('./riot_packages.json');
try {
  var fileContent = fs.readFileSync(packagesJsonFile);
  var packages = JSON.parse(fileContent.toString());
  for (var i in packages) {
    pluginInfo.npmDependencies[i] = packages[i];
  }
  Package.registerBuildPlugin(pluginInfo);
} catch (ex) {
  console.error('ERROR: riot_packages.json parsing error [ ' + ex.message + ' ]');
}
Package.onUse(function(api) {
  api.use('isobuild:compiler-plugin@1.0.0');
  if (api.addAssets) {
    api.addAssets('../../riot_packages.json', 'server');
  } else {
    api.addFiles('../../riot_packages.json', 'server', {
      isAsset: true
    });
  }
});