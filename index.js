const express = require('express');
const app = express();
const request = require('request-promise');
const querystring = require('querystring');
const path = require('path');

const HUB_ENDPOINT = 'https://forms.hubspot.com/uploads/form/v2/3452256/205a6073-77cf-4f19-9132-2dd39d259ccd';

app.post('/api/form', (req, res) => {


  return res.status(200).send();

// let postData = querystring.stringify({
//     'email': req.body.email,
//     'firstname': req.body.firstname,
//     'lastname': req.body.lastname,
//     'hs_context': JSON.stringify({
//         "hutk": req.cookies.hubspotutk,
//         "ipAddress": req.headers['x-forwarded-for'] || req.connection.remoteAddress,
//         "pageUrl": "http://www.example.com/form-page",
//         "pageName": "Example Title"
//     })
// });

// let options = {
// 	hostname: 'forms.hubspot.com',
// 	path: '/uploads/form/v2/3452256/205a6073-77cf-4f19-9132-2dd39d259ccd',
// 	method: 'POST',
// 	headers: {
// 		'Content-Type': 'application/x-www-form-urlencoded',
// 		'Content-Length': postData.length
// 	},
//   body: postData
// }

//   return request(options)
//   .catch((error) => console.error);
})


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, () => {
  console.log('Server has started...')
})