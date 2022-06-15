let client;

$(function () {
  // Initialise Apps framework client.
  // See also: https://developer.zendesk.com/apps/docs/developer-guide/getting_started
  client = ZAFClient.init();
  client.invoke("resize", { width: "100%", height: "400px" });
});

// function handling GET request to remote server
async function dataViaQueryParameter() {
  console.log("asdfasdf");
  const settings = {
    // token & subdomain are passed as arguments in the query string
    // only made visible in response after request is successfully made
    url: "https://httpbin.org/get?token={{setting.token}}&subdomain={{setting.subdomain}}",
    secure: true,
    type: "GET",
  };

  try {
    console.log(settings);
    // client.request is the ZAF Client method that dispatches network requests
    const response = await client.request(settings);
    console.log("GET data:", response);
    // displays token and subdomain values in the app UI
    document.getElementById("requestData").style.color = "teal";
    return document.getElementById("requestData").innerHTML = response.args
    ;
  } catch (error) {
    document.getElementById("requestData").style.color = "red";
    document.getElementById("requestData").innerHTML =
      "Unable to make a request at this time.";
    console.log("ERROR: ", error);
  }
}

// function handling POST request to remote server where secure settings data is sent in the request body
async function dataViaRequestBody() {
  const settings = {
    url: "https://httpbin.org/post",
    contentType: "application/json",
    secure: true,
    dataType: "json",
    type: "POST",
    // again this data isn't accessible until after the request is successfully made.
    // you can also test passing setting.token as well in the payload
    data: { name: "{{setting.subdomain}}" },
  };

  try {
    const response = await client.request(settings);
    console.log("POST data:", response);
    // displays subdomain value as "name: subdomain" in the app UI
    document.getElementById("requestData").style.color = "teal";
    return document.getElementById("requestData").innerHTML = response.data;
  } catch (error) {
    document.getElementById("requestData").style.color = "red";
    document.getElementById("requestData").innerHTML =
      "Unable to make a request at this time.";
    console.log("ERROR: ", error);
  }
}
