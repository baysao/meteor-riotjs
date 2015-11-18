var compiler = Npm.require('riot-compiler');
function RiotCompiler() {}
RiotCompiler.prototype.processFilesForTarget = function (files) {
  files.forEach(function (file) {
  	// console.log(file.getBasename());
  	var fileBasename = file.getBasename();
  	var content = file.getContentsAsString();
  	var output;
    var opts = {};
  	if(/\.tag\.jade$/.test(fileBasename)) {
      opts = {template: "jade"};
    }
    if(/\.tag\.coffee$/.test(fileBasename)) {
      opts = {type: "coffee"};
    } 
    if(/\.tag\.es6$/.test(fileBasename)) {
      opts = {type: "es6"};
    } 
    if(/\.tag\.ls$/.test(fileBasename)) {
      opts = {type: "livescript"};
    } 
    if(/\.tag\.babel$/.test(fileBasename)) {
      opts = {type: "babel"};
    } 

    if(/\.tag\.sass$/.test(fileBasename)) {
      opts = {style: "sass"};
    } 
    if(/\.tag\.scss$/.test(fileBasename)) {
      opts = {style: "scss"};
    } 
     if(/\.tag\.less$/.test(fileBasename)) {
      opts = {style: "less"};
    } 
     if(/\.tag\.styl$/.test(fileBasename)) {
      opts = {style: "stylus"};
    } 
    output = compiler.compile(content, opts);
    // console.log(output);
    file.addJavaScript({ data: output, path: file.getPathInPackage() + '.js' });
  });
};
Plugin.registerCompiler({
  extensions: ["tag", "tag.html", "tag.jade", 
  	"tag.coffee",
  	"tag.es6",
  	"tag.ls",
  	"tag.ts",
  	"tag.babel",
  	"tag.sass",
  	"tag.scss",
  	"tag.less",
  	"tag.styl"
  	],
  filenames: []
}, function () {
  var compiler  = new RiotCompiler();
  return compiler;
});

