import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter } from "react-router-dom";

const rickAndMortyAPI: string ='https://rickandmortyapi.com/graphql';

const client = new ApolloClient({
  uri: rickAndMortyAPI,
  cache: new InMemoryCache(),
});



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
