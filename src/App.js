import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import WaterList from './components/WaterList';
import WaterDetail from './components/WaterDetail';
import BrandList from './components/BrandList';
import BrandDetail from './components/BrandDetail';
import QuizMenu from './components/QuizMenu';
import HealthQuiz from './components/HealthQuiz';
import TasteQuiz from './components/TasteQuiz';
import ResultPage from './components/ResultPage';

function App() {
  const [lang, setLang] = useState('ko');

  return (
    <>
      <Header lang={lang} onChangeLang={setLang} />
      <main>
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="types" element={<WaterList lang={lang} />} />
          <Route path="types/:id" element={<WaterDetail lang={lang} />} />
          <Route path="brands" element={<BrandList lang={lang} />} />
          <Route path="brands/:id" element={<BrandDetail lang={lang} />} />
          <Route path="quiz" element={<QuizMenu lang={lang} />} />
          <Route path="quiz/health" element={<HealthQuiz lang={lang} />} />
          <Route path="quiz/taste" element={<TasteQuiz lang={lang} />} />
          <Route path="quiz/result/:version/:type" element={<ResultPage lang={lang} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;