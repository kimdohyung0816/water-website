// src/components/BrandList.js

import React from 'react';
import { Link } from 'react-router-dom';
import brands from '../data/brands';
import './BrandList.css';

export default function BrandList({ lang }) {
  // 국내 브랜드 ID 목록
  const domesticIds = [
    'samdasoo','icis8','baeksansu','pulmuone',
    'maeil','idong','puriss','pulmuone',
    'maeil','idong'
  ];
  // 국내/해외 분리
  const domestic = brands.filter(b => domesticIds.includes(b.id));
  const international = brands.filter(b => !domesticIds.includes(b.id));

  const renderCards = list => (
    <div className="brand-grid">
      {list.map(b => (
        <Link key={b.id} to={`/brands/${b.id}`} className="brand-card">
          <img src={b.imageUrl} alt={b.name[lang]} />
          <h4>{b.name[lang]}</h4>
          <p><strong>{b.originLabel[lang]}:</strong> {b.origin[lang]}</p>
          <p><strong>{b.contentLabel[lang]}:</strong> {b.content[lang]}</p>
          <p><strong>pH:</strong> {b.ph}</p>
          <p><strong>{lang==='ko'?'가격':'Price'}:</strong> {b.price[lang]}</p>
          <p className="features">{b.features[lang]}</p>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="brand-list-container">
      <h2>{lang==='ko' ? '국내 브랜드' : 'Domestic Brands'}</h2>
      {renderCards(domestic)}
      <h2>{lang==='ko' ? '해외 브랜드' : 'International Brands'}</h2>
      {renderCards(international)}
    </div>
  );
}
