// src/components/ResultPage.js

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import waterTypes from '../data/waterTypes';
import brands from '../data/brands';
import './Result.css';

export default function ResultPage({ lang }) {
  const { version, type } = useParams();
  const nav = useNavigate();
  const wType = waterTypes.find(w => w.id === type);
  const recBrands = brands.filter(b => b.type === type);
  const topBrand = recBrands[0];

  const otherVersion = version === 'health' ? 'taste' : 'health';
  const otherLabel = version === 'health'
    ? (lang === 'ko' ? '맛 취향 버전 해보기' : 'Try Taste Quiz')
    : (lang === 'ko' ? '건강 버전 해보기' : 'Try Health Quiz');

  if (!wType) {
    return <p>{lang === 'ko' ? '결과를 찾을 수 없습니다.' : 'Result not found.'}</p>;
  }

  return (
    <div className="result-container">
      <h2>
        {lang === 'ko'
          ? (version === 'health' ? '건강 추천 물' : '맛 취향 추천 물') + `: ${wType.name.ko}`
          : (version === 'health' ? 'Health result' : 'Taste result') + `: ${wType.name.en}`
        }
      </h2>

      <img
        src={wType.imageUrl}
        alt={wType.name[lang]}
        className="result-img"
      />

      <p>{wType.description[lang]}</p>

      <button
        onClick={() => nav(`/types/${type}`)}
      >
        {lang === 'ko' ? '자세히 보기' : 'View Details'}
      </button>

      <button
        onClick={() => topBrand && nav(`/brands/${topBrand.id}`)}
        disabled={!topBrand}
      >
        {lang === 'ko' ? '추천 브랜드' : 'View Brand'}
      </button>

      <button
        onClick={() => nav(`/quiz/${otherVersion}`)}
      >
        {otherLabel}
      </button>
    </div>
  );
}
