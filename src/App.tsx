import React from 'react';
import './App.css';
import {CountPage} from './pages/CountPage'
import {PostsPage} from './pages/PostsPage'
import {Route, Routes} from 'react-router-dom'
import {Navigation} from './components/Navigation/Navigation'

function App() {
  return (
    <>
    <Navigation />
      <Routes>
        <Route path='/' element={ <CountPage />} />
        <Route path='posts' element={ <PostsPage />} />
      </Routes>
    </>
  );
}

export default App;
