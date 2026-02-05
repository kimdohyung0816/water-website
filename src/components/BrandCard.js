import React from 'react';

export default function BrandCard({ data, lang }) {
  return (
    <article className="card brand-card">
      <img src={data.imageUrl} alt={data.name[lang]} />
      <div className="content">
        <h3>{data.name[lang]}</h3>
        <p>
          <strong>{data.originLabel[lang]}:</strong> {data.origin[lang]}
        </p>
        <p>
        <strong>{data.contentLabel[lang]}:</strong> {data.content[lang]}
        </p>
        <p>
          <strong>pH:</strong> {data.ph}
        </p>
        <p>
          <strong>{lang === 'ko' ? '가격' : 'Price'}:</strong> {data.price[lang]}
        </p>
        <p>{data.features[lang]}</p>
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
