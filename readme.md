# Mock PIQ integration

Yo yo yo, I've made a mock PIQ integration to get better visibilty on what merchants actually receive from PaymentIQ!

### Prerequisites

1. Install [NodeJs](https://nodejs.org/en/) and make sure it's working (simply write node --version in a console/terminal)
2. Make sure NPM was also installed with node, so run `npm --version`. If it isn't installed, install it. Heres a [guide](https://blog.teamtreehouse.com/install-node-js-npm-mac)
3. Install yarn via `npm i -g yarn`
4. Install (ngrok)[https://ngrok.com/]
5. Cd into the "mock-piq-integration" directory. `cd my/path/to/mock-piq-integration`
6. Run `yarn install`
7. Use ngrok to tunnel port 3000 -> `./ngrok http 3000` (note that you'll need to cd to the dir where ngrok was unzipped)
8. Open the /src directory and the file `config.json`, paste in the HTTPS URL that ngrok gave by changing the current URL that's there
8. Run `yarn start` in the mock-piq-integration directory -> This will then start the application
9. Now go to your MID in PaymentIQ --> Admin --> Configuration --> MerchantConfig. Here you will need to change the `integrationService` value
 to `standardMerchantIntegrationService` and add <apiIntegrationUrl>{YOURNGROKHTTPSURLHERE}/api/{action}</apiIntegrationUrl>, example:

```xml
   <apiIntegrationUrl>https://0094-185-139-247-194.ngrok.io/api/{action}</apiIntegrationUrl>
  <integrationService>standardMerchantIntegrationService</integrationService>
```

**You're now ready to go!**

### Configuring diffirent users

Following the template, you can add more users in the mockUsers.json file located in the src directory. You can add any valid JSON in the users, but make sure PIQ would allow that info.

**Mock PaymentIQ integration** © [Titus](https://github.com/TitusEntertainment).
Authored by TitusEntertainment.

> GitHub [@TitusEntertainment](https://github.com/TitusEntertainment)