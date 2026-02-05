// src/components/TasteQuiz.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tasteQuestions from '../data/tasteQuestions';
import './Quiz.css';
import Loading from './Loading';

export default function TasteQuiz({ lang }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const qCount = tasteQuestions.length;
  const nav = useNavigate();

  const handleSelect = (qId, value) => {
    setAnswers(a => ({ ...a, [qId]: value }));
  };

  const next = () => step < qCount - 1 && setStep(s => s + 1);
  const prev = () => step > 0 && setStep(s => s - 1);

  const finish = () => {
    setLoading(true);
    setTimeout(() => {
      const tally = {};
      Object.entries(answers).forEach(([qId, val]) => {
        const q = tasteQuestions.find(x => x.id === qId);
        const opt = q.options.find(o => o.value === val);
        tally[opt.type] = (tally[opt.type]||0) + 1;
      });
      const resultType = Object.entries(tally).sort((a,b)=>b[1]-a[1])[0][0];
      nav(`/quiz/result/taste/${resultType}`);
    }, 1500);
  };

  if (loading) return <Loading lang={lang} />;

  const q = tasteQuestions[step];
  const selectedValue = answers[q.id] || '';

  return (
    <div className="quiz-container">
      <h3>{lang==='ko'?`질문 ${step+1} / ${qCount}`:`Question ${step+1} of ${qCount}`}</h3>
      <p>{q.text[lang]}</p>

      <div className="options">
        {q.options.map(opt => {
          const id = `${q.id}-${opt.value}`;
          return (
            <label
              key={opt.value}
              htmlFor={id}
              className={selectedValue===opt.value?'selected':''}
            >
              <input
                id={id}
                type="radio"
                name={q.id}
                value={opt.value}
                checked={selectedValue===opt.value}
                onChange={() => handleSelect(q.id, opt.value)}
              />
              {opt.label[lang]}
            </label>
          );
        })}
      </div>

      <div className="quiz-nav">
        <button onClick={prev} disabled={step===0}>
          {lang==='ko'?'뒤로':'Back'}
        </button>
        {step<qCount-1 ? (
          <button onClick={next} disabled={!selectedValue}>
            {lang==='ko'?'다음':'Next'}
          </button>
        ) : (
          <button onClick={finish} disabled={Object.keys(answers).length<qCount}>
            {lang==='ko'?'결과보기':'See Results'}
          </button>
        )}
      </div>
    </div>
  );
}
