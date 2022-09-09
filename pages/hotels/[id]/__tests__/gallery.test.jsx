import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import Gallery from "../gallery";
import { globalStore } from "../../../../src/store/store";
import { client } from "../../../../src/services";

const mockData = {
  hotel: {
    id: 5,
    name: "4",
    price: 322,
    address: "sdfsfd",
    images: ["https://source.unsplash.com/random"],
    phone: "096713489",
    facilities: [],
    description: "sdfsdf",
    reviews: [
      {
        id: "1",
        point: "8",
        content: "Ok",
        user: {
          id: 1,
          lastName: "Hoàng Sơn",
          firstName: "Tùng",
          __typename: "User",
        },
        createdAt: "1662587649253",
        __typename: "Review",
      },
      {
        id: "2",
        point: "8",
        content: "Ok",
        user: {
          id: 1,
          lastName: "Hoàng Sơn",
          firstName: "Tùng",
          __typename: "User",
        },
        createdAt: "1662587652411",
        __typename: "Review",
      },
      {
        id: "3",
        point: "8",
        content: "Ok",
        user: {
          id: 1,
          lastName: "Hoàng Sơn",
          firstName: "Tùng",
          __typename: "User",
        },
        createdAt: "1662587653985",
        __typename: "Review",
      },
      {
        id: "4",
        point: "8",
        content: "Ok",
        user: {
          id: 1,
          lastName: "Hoàng Sơn",
          firstName: "Tùng",
          __typename: "User",
        },
        createdAt: "1662587660273",
        __typename: "Review",
      },
      {
        id: "5",
        point: "8",
        content: "Ok",
        user: {
          id: 1,
          lastName: "Hoàng Sơn",
          firstName: "Tùng",
          __typename: "User",
        },
        createdAt: "1662587664977",
        __typename: "Review",
      },
      {
        id: "6",
        point: "8",
        content: "Ok",
        user: {
          id: 1,
          lastName: "Hoàng Sơn",
          firstName: "Tùng",
          __typename: "User",
        },
        createdAt: "1662587666187",
        __typename: "Review",
      },
      {
        id: "7",
        point: "8",
        content: "Ok",
        user: {
          id: 1,
          lastName: "Hoàng Sơn",
          firstName: "Tùng",
          __typename: "User",
        },
        createdAt: "1662587666930",
        __typename: "Review",
      },
    ],
    __typename: "Hotel",
  },
};

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

describe("Gallery Page", () => {
  let galleryPage;
  let store;

  beforeEach(() => {
    const useRouter = jest.spyOn(require("next/router"), "useRouter");
    const useQuery = jest.spyOn(require("@apollo/client"), "useQuery");

    useQuery.mockImplementation(() => {
      return { data: mockData };
    });
    useRouter.mockImplementation(() => ({
      route: "/",
      pathname: "",
      query: {
        id: 2,
      },
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    }));

    galleryPage = render(
      <Provider store={globalStore}>
        <ApolloProvider client={client}>
          <Gallery />
        </ApolloProvider>
      </Provider>
    );
  });

  it("Render gallery page layout", () => {
    const heading = screen.getByText("Gallery Hotel Photos");
    expect(heading).toBeInTheDocument();
  });

  it("Render images on gallery", () => {
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });
});
