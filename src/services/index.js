import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  concat,
} from "@apollo/client";
import { getCookie } from "cookies-next";
import { API_URL, COOKIES } from "../config/constants";

const httpLink = new HttpLink({
  uri: API_URL,
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: getCookie(COOKIES.ACCESS_TOKEN) || null,
    },
  });

  return forward(operation);
});

export const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          hotels: {
            // Don't cache separate results based on
            // any of this field's arguments.
            keyArgs: false,

            // Concatenate the incoming list items with
            // the existing list items.
            merge(existing, incoming, { args }) {
              console.log(1234,args)
              if (!existing) return incoming;
              return {
                ...existing,
                ...incoming,
                items: [...existing.items, ...incoming.items],
              };
            },
          },
        },
      },
    },
  }),
  link: concat(authMiddleware, httpLink),
});
