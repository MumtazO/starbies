const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
const bodyParser = require("body-parser");
const cors = cors();
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000/homepage",
    clientId: "81ff2f0dc507455993f54ab71e8cc8bb",
    clientSecret: "0ac8cca968c9428bae369486e260b781",
  });
  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch(() => {
      res.statusCode(400);
    });
});

app.listen(PORT);
