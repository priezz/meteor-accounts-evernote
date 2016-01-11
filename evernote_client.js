/* Client */

Meteor.loginWithEvernote = (options, callback) => {
	// support a callback without options
	if (! callback && typeof options === "function") {
		callback = options
		options = null
	}
	// Evernote.requestAuthToken(options, callback)
	var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback)
	Evernote.requestCredential(options, credentialRequestCompleteCallback)
}
