# Mock PIQ integration

Yo yo yo, I've made a mock PIQ integration to get better visibilty on what merchants actually receive from PaymentIQ!

### Prerequisites

`Note that steps 1 and 2 can be skipped if you use docker`

1. Install [NodeJs](https://nodejs.org/en/) and make sure it's working (simply write node --version in a console/terminal)
2. Make sure NPM was also installed with node, so run `npm --version`. If it isn't installed, install it. Heres a [guide](https://blog.teamtreehouse.com/install-node-js-npm-mac)
3. Install (ngrok)[https://ngrok.com/]
4. Cd into the "mock-piq-integration" directory. `cd my/path/to/mock-piq-integration`
5. Run `npm install`
6. Use ngrok to tunnel port 3000 -> `./ngrok http 3000` (note that you'll need to cd to the dir where ngrok was unzipped on mac)
7. Open the /src directory and the file `config.json`, paste in the HTTPS URL that ngrok gave by changing the current URL that's there
8. Run `yarn start` in the mock-piq-integration directory -> This will then start the application
9. Now go to your MID in PaymentIQ --> Admin --> Configuration --> MerchantConfig. Here you will need to change the `integrationService` value
 to `standardMerchantIntegrationService` and add <apiIntegrationUrl>{YOUR_NGROK_HTTPS_URL_HERE}/api/{action}</apiIntegrationUrl>, example:

```xml
  <apiIntegrationUrl>https://0094-185-139-247-194.ngrok.io/api/{action}</apiIntegrationUrl>
  <integrationService>standardMerchantIntegrationService</integrationService>
```

#### With docker

With docker all you need to install is ngrok.

1. Go into the mock-piq-integraiton directory `cd my/path/to/mock-piq-integration`
2. Use ngrok to tunnel port 3000 -> `./ngrok http 3000`. If you haven't already you can install it [here](https://ngrok.com/)
3. Open the /src directory and the file `config.json`, paste in the HTTPS URL that ngrok gave by changing the current URL that's there
3. Run `docker compose up` if you haven't installed it already you can do that [here](https://www.docker.com/products/docker-desktop)
4. Now go to your MID in PaymentIQ --> Admin --> Configuration --> MerchantConfig. Here you will need to change the `integrationService` value
 to `standardMerchantIntegrationService` and add <apiIntegrationUrl>{YOUR_NGROK_HTTPS_URL_HERE}/api/{action}</apiIntegrationUrl>, example:

```xml
  <apiIntegrationUrl>https://0094-185-139-247-194.ngrok.io/api/{action}</apiIntegrationUrl>
  <integrationService>standardMerchantIntegrationService</integrationService>
```

**You're now ready to go!**

### Configuring diffirent users

Following the template, you can add more users in the mockUsers.json file located in the src directory. You can add any valid JSON in the users, but make sure PIQ would allow that info.

### Important notes

- Transfer is only accepted, but the user will NOT actually be updated. This was so that we don't need to have a DB and make the program lighter. It is possible with docker but it's unnececary complication and requires more horsepower and space which everyone might not have on their machines

**Mock PaymentIQ integration** [Eddie Englund](https://github.com/TitusEntertainment).
Authored by Eddie Englund.

> GitHub [@TitusEntertainment](https://github.com/TitusEntertainment)