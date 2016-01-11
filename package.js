Package.describe({
	name: 'priezz:accounts-evernote',
	summary: "Login service for Evernote accounts",
	version: "0.4.0",
	git: "https://github.com/priezz/meteor-accounts-evernote.git"
})

//Npm.depends({
//	 "evernote": "1.25.8"
//	// "url": "1.1.0"
//})

Package.onUse(function(api) {
	api.versionsFrom('1.2')

	api.use('ecmascript')
	api.use('accounts-base', ['client', 'server'])
	api.imply('accounts-base', ['client', 'server'])
	api.use('accounts-oauth', ['client', 'server'])
	api.use('priezz:evernote@0.4.0', 'client')

	api.addFiles("evernote_common.js", ['client', 'server'])
	api.addFiles('evernote_server.js', 'server')
	api.addFiles('evernote_client.js', 'client')

	api.addFiles('evernote_login_button.css', 'client')
})
