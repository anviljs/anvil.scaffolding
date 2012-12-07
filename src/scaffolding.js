var path = require( "path" );
var scaffolds = function( _, anvil ) {

	var root = path.resolve( __dirname, "../" );

	anvil.scaffold( {
		type: "npmExt",
		description: "",
		prompt: [
			{
				name: "extName",
				description: "Extension name",
				required: true
			},
			{
				name: "license",
				description: "Which license? (MIT, BSD, GPL, MPL, MSPL, APACHE)",
				required: false
			}
		],
		output: {
			"{{{extName}}}": {
				"README.md": anvil.scaffold.file( root + "/templates/README.md" ),
				".gitignore": anvil.scaffold.file( root + "/templates/gitignore" ),
				"header.js": anvil.scaffold.file( root + "/templates/header.js" ),
				"LICENSE-{{{license}}}": function( data, done ) {
					anvil.fs.read( root + "/licenses/LICENSE-" + data["license"], done );
				},
				src: {
					"{{{extName}}}.js": anvil.scaffold.file( root + "/templates/extension.js" )
				},
				lib: {}
			}
		}
	} );

	anvil.scaffold( {
		type: "plugin",
		description: "creates a plugin file for the current extension",
		prompt: [
			{
				name: "pluginName",
				description: "name",
				required: true
			},
			{
				name: "description",
				description: "description",
				required: true
			},
			{
				name: "activity",
				description: "activity",
				required: true
			},
			{
				name: "dependencies",
				description: "any dependencies?",
				type: "array",
				required: false
			}
		],
		output: {
			"src/{{{pluginName}}}.js": anvil.scaffold.file( root + "/templates/plugin.js" )
		}
	} );

	anvil.scaffold( {
		type: "command",
		description: "creates a command file for the current extension",
		prompt: [
			{
				name: "commandName",
				description: "name",
				required: true
			},
			{
				name: "description",
				description: "description",
				required: true
			},
			{
				name: "command",
				description: "command specification",
				required: true
			}
		],
		output: {
			"src/{{{commandName}}}.js": anvil.scaffold.file( root + "/templates/command.js" )
		}
	} );

	anvil.scaffold( {
		type: "task",
		description: "creates a task file for the current extension",
		prompt: [
			{
				name: "taskName",
				description: "name",
				required: true
			},
			{
				name: "description",
				description: "description",
				required: true
			}
		],
		output: {
			"src/{{{taskName}}}.js": anvil.scaffold.file( root + "/templates/task.js" )
		}
	} );

};

module.exports = scaffolds;