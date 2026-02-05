// src/components/Home.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';  // 슬라이더 전용 스타일

const images = [
  '/pic/pic1.png',
  '/pic/pic2.png',
  '/pic/pic3.png',
  '/pic/pic4.png',
  '/pic/pic5.png'
];

export default function Home({ lang }) {
  const [current, setCurrent] = useState(0);
  const nav = useNavigate();

  // 5초마다 슬라이드 전환
  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page">
      <div className="hero-slider">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Slide ${idx + 1}`}
            className={`slide ${idx === current ? 'active' : ''}`}
          />
        ))}
      </div>

      <div className="home-content">
        <h2>{lang === 'ko' ? '마실 水 있는 정보란?' : 'What Is Drinkable Water?'}</h2>
        <p>
          {lang === 'ko'
            ? '다양한 물의 종류와 브랜드 정보를 한눈에 보고, 올바른 선택을 도와드립니다.'
            : 'Explore types of water and brands at a glance, and make informed choices.'}
        </p>
        <div className="btn-group">
          <button onClick={() => nav('/types')}>
            {lang === 'ko' ? '물 종류 보기' : 'View Types'}
          </button>
          <button onClick={() => nav('/quiz')}>
            {lang === 'ko' ? '물 MBTI 테스트' : 'View Water MBTI'}
          </button>
          <button onClick={() => nav('/brands')}>
            {lang === 'ko' ? '브랜드 보기' : 'View Brands'}
          </button>
        </div>
      </div>
    </div>
  );
}
