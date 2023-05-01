import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import CreateAccountPage from "./pages/CreateAccountPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
// import carousel from "./components/carousel";
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
  // cache: mergeBooks.cache, // Trying to squash the browser console warning about the memory cache.
});
function App() {
  return (
    <ApolloProvider client={client}>
    <div className='overflow-hidden'>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product/' element={<ProductPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/signup' element={<CreateAccountPage/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
    </ApolloProvider>
  );
}



export default App;