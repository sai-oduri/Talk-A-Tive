import "./App.css"

import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/chats" element={<ChatPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App