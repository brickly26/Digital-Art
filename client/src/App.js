import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import Footer from './components/footer';
import NewsLetter from './components/NewsLetter';
import Team from './components/Team';
import ProductList from './components/ProductList'
import Category from './components/Category';
import Hero from './components/Hero'

import { StoreProvider } from './utils/GlobalState';
import CategoryPage from './pages/CategoryPage';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <StoreProvider>
          <div className="flex-column justify-flex-start min-100-vh">
            <NavMenu />
            <Route exact path="/">
              <Home />
              <Hero />
              <Category />
              <Team />
              <NewsLetter />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/categories">
              <CategoryPage />
            </Route>
            <Route exact path="/categories/:category">
              <ProductList />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Footer />
          </div>
        </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
