/* Server */

const serviceName = 'evernote'

Accounts.addAutopublishFields({
    /*
        publish all fields including access token, which can legitimately be used from the client
        (if transmitted over ssl or on localhost).
        https://developers.facebook.com/docs/concepts/login/access-tokens-and-types/, "Sharing of Access Tokens"
    */
    forLoggedInUser: ['services.' + serviceName],
    forOtherUsers: [
        'services.' + serviceName + '.id',
        'services.' + serviceName + '.username'
    ]
})
