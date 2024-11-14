import { builder } from "../builder";
import { prisma } from "../db";

/** 
 *   Adds a field to the GraphQL schema's Query type named "users"
 *   Defines a field that resolves to some type in your Prisma schema
 *   Lets Pothos know this field will resolve to an array of your Prisma Client's User type
 *   Sets up a resolver function for this field.
 */

builder.prismaObject("User", {
    fields: t => ({
        id : t.exposeID("id"),
        name : t.exposeString("name"),
        messages: t.relation("messages")
    })
});

builder.queryField("users", (t) =>
    // 2
    t.prismaField({
      // 3
      type: ["User"],
      // 4
      resolve: async (query, root, args, ctx, info) => {
        return prisma.user.findMany({ ...query });
      },
    })
  );