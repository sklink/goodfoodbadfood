// Apollo (GraphQL with Redux support)
// import { ApolloClient, createNetworkInterface } from 'apollo-client';

// Redux
import { combineReducers } from 'redux-immutable';

// Constants
import { GRAPHQL_API_URI } from '../constants';

// Setup GraphQL
// const networkInterface = createNetworkInterface({ uri: GRAPHQL_API_URI })
// export const apollo = new ApolloClient({ networkInterface });

// List of the reducers used throughout the app...
export const rootReducer = combineReducers({
  // apollo: apollo.reducer()
});
