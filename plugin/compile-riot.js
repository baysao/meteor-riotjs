var riot = Npm.require('riot-compiler');
function RiotCompiler() {}
RiotCompiler.prototype.processFilesForTarget = function (files) {
  files.forEach(function (file) {
    // process and add the output
    var output = riot.compile(file.getContentsAsString());
    file.addJavaScript({ data: output, path: file.getPathInPackage() + '.js' });
  });
};
Plugin.registerCompiler({
  extensions: ["tag", "tag.html"],
  filenames: []
}, function () {
  var compiler  = new RiotCompiler();
  return compiler;
});

