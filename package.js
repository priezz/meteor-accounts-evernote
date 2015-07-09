Package.describe({
	name: 'priezz:accounts-evernote',
	summary: "Login service for Evernote accounts",
	version: "0.2.3",
	//git: "https://github.com/priezz/meteor-accounts-evernote.git"
});

Npm.depends({
	 "evernote": "1.25.8"
	// "url": "1.1.0"
});

Package.onUse(function(api) {
	api.versionsFrom('METEOR@1.0.1')

	api.use('accounts-base', ['client', 'server']);
	api.imply('accounts-base', ['client', 'server']);
	api.use('accounts-oauth', ['client', 'server']);
	//api.imply('accounts-oauth', ['client', 'server']);
	api.use('priezz:evernote@0.2.3', ['client', 'server']);

	api.addFiles('evernote_login_button.css', 'client');

	api.addFiles("evernote.js");
});
