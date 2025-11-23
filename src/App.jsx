import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home.jsx';
import LearnMode from '../Pages/LearnMode.jsx';
import QuizMode from '../Pages/QuizMode.jsx';
import Search from '../Pages/Search.jsx';
import { createPageUrl } from '../utils.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={createPageUrl('Home')} element={<Home />} />
        <Route path={createPageUrl('LearnMode')} element={<LearnMode />} />
        <Route path={createPageUrl('QuizMode')} element={<QuizMode />} />
        <Route path={createPageUrl('Search')} element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;

