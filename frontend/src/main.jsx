import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './App';

import { BrowserRouter } from 'react-router-dom'

import ChatProvider from "./Context/ChatProvider";

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <ChakraProvider>
    <BrowserRouter>
      <ChatProvider>
        <App />
      </ChatProvider>
    </BrowserRouter>
  </ChakraProvider>
)