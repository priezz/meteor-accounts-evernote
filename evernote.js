const serviceName = 'evernote';

Accounts.oauth.registerService(serviceName);

if (Meteor.isClient) {
	Meteor.loginWithEvernote = function(options, callback) {
		// support a callback without options
		if (! callback && typeof options === "function") {
			callback = options;
			options = null;
		}
		// Evernote.requestAuthToken(options, callback);
		var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
		Evernote.requestCredential(options, credentialRequestCompleteCallback);
	};
} else {
  Accounts.addAutopublishFields({
    // publish all fields including access token, which can legitimately
    // be used from the client (if transmitted over ssl or on
    // localhost). https://developers.facebook.com/docs/concepts/login/access-tokens-and-types/,
    // "Sharing of Access Tokens"
    forLoggedInUser: ['services.' + serviceName],
    forOtherUsers: [
        'services.' + serviceName + '.id',
	    'services.' + serviceName + '.username'
    ]
  });
}
