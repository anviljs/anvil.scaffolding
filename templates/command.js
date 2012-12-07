module.exports = function( _, anvil ) {
	anvil.command( {
		name: "{{{commandName}}}",
		description: "{{{description}}}",
		commander: {
			"{{{command}}}": {
				action: "{{{command}}}",
				description: "{{{description}}}"
			}
		},
		config: {},

		// the config argument is the anvil.config file
		// the command object contains all command line options
		configure: function( config, command, done ) {
			// perform your command's configuration here
			// note that this.config will have already imported
			// any specific settings from the build file

			// you MUST call done or the build will hang
			done();
		},

		// this is the function that will be invoked if the
		// matching command is called
		// any arguments added to the command definition should
		// be added to the beginning of this function's arguments
		// the options object represents any options that were passed
		// to the command
		"{{{command}}}": function( options, done ) {

			// you MUST call done
			done();
		}

	} );	
};