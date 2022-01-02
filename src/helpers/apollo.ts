import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { GROWTHMETRICS_URL } from "../constants/graph";

const client = () =>
  new ApolloClient({
    uri: GROWTHMETRICS_URL,
    cache: new InMemoryCache(),
  });

const apollo = async <T>(queryString: string) => {
  try {
    const data = client().query<T>({
      query: gql(queryString),
    });
    return data;
  } catch (err) {
    console.error("graph ql error: ", err);
  }
};

const extClient = (uri: string) =>
  new ApolloClient({
    uri: uri,
    cache: new InMemoryCache(),
  });

export const apolloExt = async (queryString: string, uri: string) => {
  try {
    const data = await extClient(uri).query({
      query: gql(queryString),
    });
    return data;
  } catch (err) {
    console.error("external graph ql api error: ", err);
  }
};

export default apollo;
