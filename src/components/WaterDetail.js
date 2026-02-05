// src/components/WaterDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import waterTypes from '../data/waterTypes';
import './WaterDetail.css';   // ① CSS 임포트

export default function WaterDetail({ lang }) {
  const { id } = useParams();
  const data = waterTypes.find(w => w.id === id);
  const nav = useNavigate();

  if (!data) {
    return (
      <div className="detail-container">
        <p className="not-found">
          {lang === 'ko' ? '정보를 찾을 수 없습니다.' : 'Data not found.'}
        </p>
        <button
          className="back-button"
          onClick={() => nav(-1)}
        >
          ← {lang === 'ko' ? '뒤로 가기' : 'Back'}
        </button>
      </div>
    );
  }

  return (
    <div className="detail-container"> {/* ② 최상위 래퍼 */}
      <button
        className="back-button"
        onClick={() => nav(-1)}
      >
        ← {lang === 'ko' ? '뒤로 가기' : 'Back'}
      </button>

      <div className="detail"> {/* ③ 이미지+정보 래퍼 */}
        <img
          className="detail-img"
          src={data.imageUrl}
          alt={data.name[lang]}
        />

        <div className="detail-info">
          <h2 className="detail-title">{data.name[lang]}</h2>
          <p className="detail-origin">
            <strong>{data.sourceLabel[lang]}:</strong>{' '}
            {data.source[lang]}
          </p>
          <p className="detail-ph">
            <strong>pH:</strong> {data.ph}
          </p>
          <p className="detail-desc">{data.description[lang]}</p>

          {data.buyLink && (
            <a
              className="buy-link"
              href={data.buyLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {lang === 'ko' ? '구매하기' : 'Buy'}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
