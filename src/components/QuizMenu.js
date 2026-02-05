import React from 'react';
import { useNavigate } from 'react-router-dom';
import './QuizMenu.css';

export default function QuizMenu({ lang }) {
  const nav = useNavigate();
  return (
    <div className="quiz-menu">
      <h2>{lang === 'ko' ? '물 MBTI 퀴즈' : 'Water MBTI Quiz'}</h2>
      <p>
        {lang === 'ko'
          ? '건강 목적과 맛 취향 중 원하는 버전을 선택하세요.'
          : 'Select the quiz version: Health or Taste.'}
      </p>
      <div className="quiz-cards">
        <div className="quiz-card health-card">
          <div className="card-icon">💪</div>
          <h3>{lang === 'ko' ? '건강 버전' : 'Health Version'}</h3>
          <p>
            {lang === 'ko'
              ? '건강 목표에 맞는 물을 추천받아요'
              : 'Get water recommendations for your health goals'}
          </p>
          <button
            className="card-select"
            onClick={() => nav('/quiz/health')}
          >
            {lang === 'ko' ? '선택하기' : 'Select'}
          </button>
        </div>

        <div className="quiz-card taste-card">
          <div className="card-icon">✨</div>
          <h3>{lang === 'ko' ? '맛 취향 버전' : 'Taste Version'}</h3>
          <p>
            {lang === 'ko'
              ? '내 입맛에 딱 맞는 물을 찾아요'
              : 'Find the perfect water for your taste'}
          </p>
          <button
            className="card-select"
            onClick={() => nav('/quiz/taste')}
          >
            {lang === 'ko' ? '선택하기' : 'Select'}
          </button>
        </div>
      </div>
    </div>
);
}