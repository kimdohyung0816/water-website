import React from 'react';

export default function WaterCard({ data, lang }) {
  return (
    <article className="card water-card">
      <img src={data.imageUrl} alt={data.name[lang]} />
      <div className="content">
        <h3>{data.name[lang]}</h3>
        <p>
          <strong>{data.sourceLabel[lang]}:</strong> {data.source[lang]}
        </p>
        <p>
          <strong>pH:</strong> {data.ph}
        </p>
        <p>{data.description[lang]}</p>
        {data.buyLink && (
          <a
            href={data.buyLink}
            className="buy-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {lang === 'ko' ? '구매하기' : 'Buy'}
          </a>
        )}
      </div>
    </article>
  );
}
