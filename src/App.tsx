import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/MainPage/Main'
import Result from './components/SearchResults/Main'
import AddLink from './components/AddLink/Main'

function App() {
  return (
    <div>
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/search/:query' element={<Result />}/>
            <Route path='/search' element={<Result />}/>
            <Route path='/add' element={<AddLink />}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
