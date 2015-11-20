var path = Npm.require('path');
var fs = Npm.require('fs');
var riotVersion = "2.3.1";
Package.describe({
  summary: "Riot PreProcessor",
  version: riotVersion + "-16",
  name: "baysao:riot-preprocessor",
});
Npm.depends({
  "riot": riotVersion
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
  // Npm.depends(packages);
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
  api.addFiles(['.npm/package/node_modules/riot/riot.min.js', 'post.js'], ['client'])
  api.export('Riot');
});