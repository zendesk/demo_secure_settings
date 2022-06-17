# Demo App Test Secure Settings Feature

In the Zendesk App Framework, you're able to set secure settings within your app.Secure settings are used to conceal sensitive information within an app's settings while making AJAX requests. A setting is defined as secure by applying the value **true** to the secure property when **first** creating a setting parameter. This application creates two secure settings within the Zendesk application and then displays making calls to a remote web page with those settings. 

The first request showcases a GET request to a remote server passing the secure setting data as arguments within the query string. 

The second request showcases a POST request to a remote server where secure setting data is passed in the request body. 

You'll see that once secure settings are entered they are not redisplayed in the app's settings page. This demonstration is meant to supplement Zendesk's Developer Documentation on [Using Secure Settings](https://developer.zendesk.com/documentation/apps/app-developer-guide/using-the-apps-framework/#using-secure-settings).

## Getting started

Follow these steps to get a local copy up and running.

### Prerequisites

- Zendesk Command Line (ZCLI)

[Using Zendesk Command Line](https://developer.zendesk.com/documentation/apps/app-developer-guide/zcli/#installing-and-updating-zcli)

### Installation

**1. Clone the repo**

```
git clone https://github.com/zendesk/demo_secure_settings.git
```

**2. Install the app**

Run `zcli apps:create` and enter your admin and test instance information

When prompted in the terminal, enter a value for setting.`token` & setting.`subdomain`. Currently, in the manifest.json you'll find that default values have been set. Feel free to reuse or enter new values. For the testing purposes of this application, it is recommended to use 5 characters or less for the `token` and `subdomain` values.

**3. Test application**

Because it's a ticket_sidebar app, select any ticket in your Support instance to open the application. Once opened, click the app's 'Call Remote Server' button.

You should see the values you entered for `token` and `subdomain` appear in the app window.



<!-- Links to relevant resources such as help center articles or dev docs -->

### Notes

- The remote server used is https://httpbin.org

- For your own remote server, include the subdomain in the domainWhitelist value of your manifest.json

- Secure Settings has a known issue for local testing which is why this application needs to be installed to work properly

- For more details, please see the documented Github issue [here](https://github.com/zendesk/zcli/issues/63)

## Additional Resources

- [Using Secure Settings](https://developer.zendesk.com/apps/docs/developer-guide/using_sdk#using-secure-settings)
- [ZAF Client API](https://developer.zendesk.com/api-reference/apps/apps-core-api/client_api/)
- [Zendesk Apps Guide](https://developer.zendesk.com/documentation/apps/)
- [Apps Support API documentation](https://developer.zendesk.com/api-reference/apps/apps-support-api/introduction/)

<!-- Issue reporting with link to repo issues page -->

## Issues

You can [create an issue on Github](https://github.com/zendesk/demo_secure_settings/issues/new),
reach out in our [Developer Community](https://support.zendesk.com/hc/en-us/community/topics),
or report the issue in the [Zendesk Developers Slack group](https://docs.google.com/forms/d/e/1FAIpQLScm_rDLWwzWnq6PpYWFOR_PwMaSBcaFft-1pYornQtBGAaiJA/viewform).


