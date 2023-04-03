var request = require("request");

var options = { method: 'POST',
    url: 'https://kpi.eu.auth0.com/oauth/token',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    form:
    {    
        client_id: 'JIvCO5c2IBHlAe2patn6l6q5H35qxti0',
        client_secret: 'ZRF8Op0tWM36p1_hxXTU-B0K_Gq_-eAVtlrQpY24CasYiDmcXBhNS6IJMNcz1EgB',
        audience: 'https://kpi.eu.auth0.com/api/v2',
        grant_type: 'client_credentials' }
    };

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});
