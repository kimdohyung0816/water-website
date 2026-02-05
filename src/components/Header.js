import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header({ lang, onChangeLang }) {
  return (
    <header className="header">
      <div className="container">
        {/* 로고 클릭 시 홈으로 */}
        <Link to="/" className="logo">마실 水 있는 정보</Link>

        {/* 중앙 네비게이션 (홈 삭제, 퀴즈 → 물MBTI 변경) */}
        <nav className="nav">
          <Link to="/types">{lang === 'ko' ? '물 종류' : 'Water Types'}</Link>
          <Link to="/quiz">{lang === 'ko' ? '물MBTI' : 'Water MBTI'}</Link>
          <Link to="/brands">{lang === 'ko' ? '브랜드' : 'Brands'}</Link>
        </nav>

        {/* 오른쪽 언어 스위치 */}
        <div className="lang-switch">
          <button
            className={lang === 'ko' ? 'active' : ''}
            onClick={() => onChangeLang('ko')}
          >
            한국어
          </button>
          <button
            className={lang === 'en' ? 'active' : ''}
            onClick={() => onChangeLang('en')}
          >
            English
          </button>
        </div>
      </div>
    </header>
);
}
