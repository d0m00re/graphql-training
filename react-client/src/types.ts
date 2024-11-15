import type { GetUsersQuery } from "./graphql/generated";

export type Message = NonNullable<NonNullable<NonNullable<GetUsersQuery["users"]>[number]["messages"]>[number]>;
export type User = NonNullable<NonNullable<GetUsersQuery["users"]>[number]>;

/*
export type Message = GetUsersQuery["users"][0]["messages"][0];
export type User = GetUsersQuery["users"][0];
*/
/*
export type Message = {
    body: string  
}

export type User = {
    name: string
    messages: Message[]
}
*/
