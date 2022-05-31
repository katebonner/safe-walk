// POST API FOR MESSAGE ALERTS"

var request = require("request");
var options = {
  method: "POST",
  url: "https://http-api.d7networks.com/send?username=cywf3599&password=sGAowHn6&dlr-method=POST &dlr-url=https://4ba60af1.ngrok.io/receive&dlr=yes&dlr-level=3&from=smsinfo &content=This is the sample content sent to test &to=5164048703",
  headers: {},
  formData: {},
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
