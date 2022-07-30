import { ApolloServer } from 'apollo-server-express';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginDrainHttpServer,
} from 'apollo-server-core';
import { application } from './modules';
import express from 'express';
import http from 'http';
import models from './models';

async function startServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const executor = application.createApolloExecutor();
  const schema = application.schema;
  const server = new ApolloServer({
    schema,
    executor,
    plugins: [
      process.env.NODE_ENV === 'development' ? ApolloServerPluginLandingPageGraphQLPlayground() : ApolloServerPluginLandingPageDisabled(),
      ApolloServerPluginDrainHttpServer({ httpServer }),
    ],
  });

  await server.start();
  server.applyMiddleware({ app });
  (models as any).sequelize.sync({ force: true }).then(async () => {
    console.log('Database connection is successful.');
    await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  });
}

startServer();
