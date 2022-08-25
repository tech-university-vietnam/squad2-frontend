import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  HttpLink,
  ApolloLink,
  concat,
} from "@apollo/client";
import { getCookie } from "cookies-next";
import { COOKIES } from "../config/constants";

const httpLink = new HttpLink({
  uri: "https://flyby-gateway.herokuapp.com/",
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
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});
