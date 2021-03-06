# Backend

## Dependencies

- [Sequelize](https://sequelize.org/master/manual/getting-started.html)
- [Serverless](https://www.serverless.com/framework/docs/getting-started/)
  - [Dotenv](https://www.serverless.com/plugins/serverless-dotenv-plugin)
  - [Webpack](https://www.serverless.com/plugins/serverless-webpack/)
  - [Offline](https://www.serverless.com/plugins/serverless-offline/)
- [Node Fetch](https://www.npmjs.com/package/node-fetch)

## Development

### Local Server

For the use case of working on the Canvas LTI you will need a local instance of the backend running. Luckily servereless provides this using Serverless-Offline. Run the following command to start the local lambda server.

```
npm run dev
```

### Invoking

In the case you want to invoke a single function, for the case of initalizing the DB tables.
Then you can run the following command. `hello` is the name of your function.

```
npx serverless invoke local --function hello
```

## Deployment

```
npm run deploy
```

## Resouces

- [TS with Serverless](https://lesscodeismore.dev/serverless-typescript/)
