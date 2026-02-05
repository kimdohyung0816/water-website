// src/components/HealthQuiz.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import healthQuestions from '../data/healthQuestions';
import './Quiz.css';
import Loading from './Loading';

export default function HealthQuiz({ lang }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const qCount = healthQuestions.length;
  const nav = useNavigate();

  const handleSelect = (qId, value) => {
    setAnswers(a => ({ ...a, [qId]: value }));
  };

  const next = () => step < qCount - 1 && setStep(s => s + 1);
  const prev = () => step > 0 && setStep(s => s - 1);

  const finish = () => {
    setLoading(true);
    setTimeout(() => {
      // tally
      const tally = {};
      Object.entries(answers).forEach(([qId, val]) => {
        const q = healthQuestions.find(x => x.id === qId);
        const opt = q.options.find(o => o.value === val);
        tally[opt.type] = (tally[opt.type]||0) + 1;
      });
      const resultType = Object.entries(tally).sort((a,b)=>b[1]-a[1])[0][0];
      nav(`/quiz/result/health/${resultType}`);
    }, 1500);  // 1.5초 로딩
  };

  if (loading) return <Loading lang={lang} />;

  const q = healthQuestions[step];
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
