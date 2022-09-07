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
  cache: new InMemoryCache({}),
  link: concat(authMiddleware, httpLink),
});
