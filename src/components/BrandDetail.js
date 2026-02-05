import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import brands from '../data/brands';
import './BrandDetail.css';

export default function BrandDetail({ lang }) {
  const { id } = useParams();
  const data = brands.find(b => b.id === id);
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
    <div className="detail-container">
      <button
        className="back-button"
        onClick={() => nav(-1)}
      >
        ← {lang === 'ko' ? '뒤로 가기' : 'Back'}
      </button>

      <div className="detail">
        <img
          className="detail-img"
          src={data.imageUrl}
          alt={data.name[lang]}
        />

        <div className="detail-info">
          <h2 className="detail-title">{data.name[lang]}</h2>

          <p className="detail-origin">
            <strong>{data.originLabel[lang]}:</strong> {data.origin[lang]}
          </p>

          <p className="detail-content">
            <strong>{data.contentLabel[lang]}:</strong> {data.content[lang]}
          </p>

          <p className="detail-ph">
            <strong>pH:</strong> {data.ph}
          </p>

          <p className="detail-price">
            <strong>{lang === 'ko' ? '가격' : 'Price'}:</strong> {data.price[lang]}
          </p>

          <p className="detail-features">{data.features[lang]}</p>

          {data.buyLink ? (
            <a
              className="buy-link"
              href={data.buyLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {lang === 'ko' ? '구매하기' : 'Buy'}
            </a>
          ) : (
            <button className="buy-link disabled" disabled>
              {lang === 'ko' ? '구매 불가' : 'Not Available'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
