import SchemaBuilder from "@pothos/core";

// 1
import { DateResolver } from "graphql-scalars";

import PrismaPlugin from "@pothos/plugin-prisma";
import type PrismaTypes from "@pothos/plugin-prisma/generated";

import { prisma } from "./db";

export const builder = new SchemaBuilder<{
  Scalars: {
    Date: { Input: Date; Output: Date };
  };
  PrismaTypes: PrismaTypes;
}>({
  plugins: [PrismaPlugin],
  prisma: {client: prisma,},
});

builder.addScalarType("Date", DateResolver, {});

/**
 * This registers a special GraphQL type that holds the definitions for each of your queries and acts as the entry point to your GraphQL API. You define this type in the builder.ts file to ensure the query builder has a Query type defined, that way you can add query fields to it later on.
 */
builder.queryType({});


// 3
//builder.addScalarType("Date", DateResolver, {});