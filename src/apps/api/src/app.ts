import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { makeExecutableSchema } from "@graphql-tools/schema";
import cors from "cors";
import express, { request, response } from "express";

import { getMongoDBConnection, PORT } from "@ykvocab/core";
import { typeDefs, resolvers } from "./graphql";
import { GraphqlContext } from "./graphql/types";

(async () => {
  await getMongoDBConnection();
  
  const app = express();

  app.use(cors());

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers, 
  });

  const server = new ApolloServer<GraphqlContext>({
    schema,
  });

  await server.start();

  app.use(
    "/graphql", 
    cors(), 
    express.json(), 
    expressMiddleware(server, {
      context: async ({ req }): Promise<GraphqlContext> => {
        const userAgent = req.headers["user-agent"] || "unknown";

        return {
          user: null,
          adminUser: null,
          req: {
            ...req,
            userAgent,
          },
        };
      },
    })
  );


  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}/graphql`);
  });
}) ();
