## Salesforce Advanced Developer Workshop

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

Supporting app for [this workshop module](http://ccoenraets.github.io/salesforce-developer-advanced/Using-the-Salesforce1-Platform-APIs.html).

1. Access the following GitHub repository:

    [https://github.com/ccoenraets/salesforce-conference-demo](https://github.com/ccoenraets/salesforce-conference-demo)

1. Click the **Deploy to Heroku** button
    - For **App Name**, specify a name for your application. For example, if you specify my-conference, your application will be available at http://my-conference.herokuapp.com. Your app name has to be unique on the herokuapp.com domain.
    - For **APP_ID** in the deployment wizard, paste the consumer key of the connected app you created in step 1.
    - Click the **Deploy For Free** button

1. In Salesforce, go back to your Connected App and adjust the URLs based on your Heroku app name:
     - For **Callback URL**, specify: https://my-conference.herokuapp.com/oauthcallback.html

     > Replace **my-conference** with your own app name.