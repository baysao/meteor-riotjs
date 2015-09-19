var riot = Npm.require('riot');

Plugin.registerSourceHandler("tag", {isTemplate: true, archMatching: 'web'}, function (compileStep) {
    var source = compileStep.read().toString('utf8');
    try {
	var js = riot.compile(source, { compact:true});
    } catch (e) {
	compileStep.error({
	    message: "Riot compiler error: " + e.message,
	    sourcePath: e.filename || compileStep.inputPath,
	    line: e.line,
	    column: e.column + 1
	});
	return;
    }

    compileStep.addJavaScript({
	path: compileStep.inputPath + ".js",
	data: js,
	sourcePath: compileStep.inputPath,
    });
});;

// Backward compatibility with Meteor 0.7
Plugin.registerSourceHandler("riotimport", function () {});

