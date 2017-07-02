const express = require('express');
const app = express();
const request = require('request-promise');
const path = require('path');
const bodyParser = require('body-parser')

const HUB_ENDPOINT = 'https://forms.hubspot.com/uploads/form/v2/3452256/205a6073-77cf-4f19-9132-2dd39d259ccd';

app.use(bodyParser.urlencoded({
  extended: false
}))

app.post('/api/form', (req, res) => {

  let postData = {
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    hs_context: {
      //"hutk": req.cookies.hubspotutk,
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      pageUrl: "http://www.example.com/form-page",
      pageName: "Example Title"
    }};

  let options = {
    uri: HUB_ENDPOINT,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': postData.length
    },
    form: postData
  }

  request(options)
  .then((response) => {
    return res.send();
  })
  .catch((error) => res.status(500).send(error));

})


app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log('Server has started...')
})