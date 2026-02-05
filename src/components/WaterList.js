// src/components/WaterList.js

import React from 'react';
import { Link } from 'react-router-dom';
import waterTypes from '../data/waterTypes';
import './WaterList.css';

export default function WaterList({ lang }) {
  return (
    <div className="water-list-container">
      <h2>{lang === 'ko' ? '물 종류' : 'Water Types'}</h2>
      <div className="water-grid">
        {waterTypes.map(w => (
          <Link key={w.id} to={`/types/${w.id}`} className="water-card">
            <img src={w.imageUrl} alt={w.name[lang]} />
            <h4>{w.name[lang]}</h4>
            <p>
              <strong>{w.sourceLabel[lang]}:</strong>{' '}
              {w.source[lang]}
            </p>
            <p>
              <strong>pH:</strong> {w.ph}
            </p>
            <p className="features">
              {w.description[lang]}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
