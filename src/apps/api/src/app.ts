import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { getMongoDBConnection, PORT } from "@ykvocab/core";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import jwt from "jsonwebtoken";

import { typeDefs, resolvers } from "./graphql";
import { AdminUser, GraphqlContext } from "./graphql/types";

dotenv.config({ path: "./src/.env.local" });

(async () => {
  await getMongoDBConnection();

  const app = express();

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
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    }),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }): Promise<GraphqlContext> => {
        const userAgent = req.headers["user-agent"] || "unknown";
        const token = req.headers.authorization?.split(" ")[1];

        console.log("Token?: ", token);

        let admin: AdminUser | null = null;

        if (token && process.env.JWT_SECRET) {
          try {
            admin = jwt.verify(token, process.env.JWT_SECRET) as AdminUser;
          } catch (e: any) {
            console.error("Invalid or expired token:", e.message);
            admin = null; 
          }
        }

        return {
          adminUser: admin,
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
})();
