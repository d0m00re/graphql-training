// 1
import { createServer } from 'http'
import { createYoga } from "@graphql-yoga/node";
import { schema } from "./schema";
// 2
const port = Number(process.env.API_PORT) || 4000
// 3
const serverGraphql = createYoga({
  schema
});

const server = createServer(serverGraphql)

// 4
server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000/graphql')
});
/*
server.start().then(() => {
  console.log(`🚀 GraphQL Server ready at http://localhost:${port}/graphql`);
});
*/