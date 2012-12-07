module.exports = function( _, anvil ) {
	anvil.plugin( {
		name: "{{{pluginName}}}",
		description: "{{{description}}}",
		activity: "{{{activity}}}",
		dependencies: {{{dependencies}}},
		config: {},

		// the config argument is the anvil.config file
		// the command object contains all command line options
		configure: function( config, command, done ) {
			// perform your plugin's configuration here
			// note that this.config will have already imported
			// any specific settings from the build file

			// you MUST call done or the build will hang
			done();
		},

		// the activity variable tells your plugin what
		// activity it's currently being run under
		run: function( done, activity ) {
			// this is where your plugin does it's thing

			// you MUST call done or the build will hang
			done();
		}

	} );	
};