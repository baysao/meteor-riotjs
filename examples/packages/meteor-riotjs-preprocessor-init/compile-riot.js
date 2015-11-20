var compiler = Npm.require('riot-compiler');

function RiotCompiler() {}
RiotCompiler.prototype.processFilesForTarget = function(files) {
  files.forEach(function(file) {
    var fileBasename = file.getBasename();
    var content = file.getContentsAsString();
    var output;
    var ext = '.js';
    var opts = {};
    if (/\.tag\.jade$/.test(fileBasename)) {
      opts.template = "jade";
    }
    try {
      output = compiler.compile(content, opts);
      file.addJavaScript({
        data: output,
        path: file.getPathInPackage() + ext
      });
    } catch (e) {}
  });
};
Plugin.registerCompiler({
  extensions: [
    "tag", "tag.html", "tag.jade"
  ],
  filenames: []
}, function() {
  var compiler = new RiotCompiler();
  return compiler;
});