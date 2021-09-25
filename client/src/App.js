import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Info from './components/Info';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Cart from './components/Cart';
import { StoreProvider } from './utils/GlobalState';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <StoreProvider>
        <Router>
          <NavMenu />
          <Switch>
            <Route path="/about"></Route>
            <Route path="/contact"></Route>
            <Route path="/projects"></Route>
            <Route path="/"></Route>
          </Switch>
        </Router>
        <Info />
        <SignupForm />
        <LoginForm />
        <Cart />
      </StoreProvider>
    </ApolloProvider>
  );
}
