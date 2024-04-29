import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { users } from "./data";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

startStandaloneServer(server, {
  listen: { port: process.env.PORT ? +process.env.PORT : 4000 },
  context: async ({ req }) => {
    const userId = req.headers.authorization;
    if (userId && !users.has(userId)) {
      users.set(userId, []);
    }

    return { userId };
  },
}).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});
