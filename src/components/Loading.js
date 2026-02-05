import React from 'react';
import './Loading.css';

export default function Loading({ lang }) {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>{lang === 'ko' ? '두구두구… 결과를 기다리는 중' : 'Drum roll… waiting for results'}</p>
    </div>
  );
}
