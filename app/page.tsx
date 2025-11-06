import React from 'react';

const LINKS: { label: string; href: string; desc: string }[] = [
  {
    label: 'Men ? Popular winter jackets (? ?2000)',
    href:
      'https://www.myntra.com/men-jackets?sort=popularity&rf=Price%3A0.0_2000.0',
    desc: 'Sorted by popularity with price filter applied',
  },
  {
    label: 'Women ? Popular winter jackets (? ?2000)',
    href:
      'https://www.myntra.com/women-jackets?sort=popularity&rf=Price%3A0.0_2000.0',
    desc: 'Sorted by popularity with price filter applied',
  },
  {
    label: 'Unisex ? Popular winter jackets (? ?2000)',
    href: 'https://www.myntra.com/jackets?sort=popularity&rf=Price%3A0.0_2000.0',
    desc: 'All jackets under ?2000 sorted by popularity',
  },
  {
    label: 'Men ? Highest rated picks (? ?2000)',
    href:
      'https://www.myntra.com/men-jackets?sort=rating&rf=Price%3A0.0_2000.0',
    desc: 'Sort by rating to find top-rated items',
  },
  {
    label: 'Women ? Highest rated picks (? ?2000)',
    href:
      'https://www.myntra.com/women-jackets?sort=rating&rf=Price%3A0.0_2000.0',
    desc: 'Sort by rating to find top-rated items',
  },
];

export default function Page() {
  return (
    <main className="container">
      <section className="card">
        <h1>Best Winter Jackets under ?2000 on Myntra</h1>
        <p className="subtitle">
          Tap a button to open Myntra with the price filter pre-applied. Start
          with popularity, then switch to ratings to decide quickly.
        </p>

        <div className="links">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="linkButton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="label">{link.label}</span>
              <span className="desc">{link.desc}</span>
            </a>
          ))}
        </div>

        <div className="tips">
          <h2>Quick Buy Tips</h2>
          <ul>
            <li>Pick padded, quilted, or fleece-lined for winter warmth.</li>
            <li>Look for 70-100 GSM fill or down-alternative insulation.</li>
            <li>Prefer water-resistant outer shell and adjustable hood.</li>
            <li>Target brands: Roadster, HRX, Tokyo Talkies, Mast & Harbour.</li>
            <li>Aim for ?4.2 rating with 500+ reviews when possible.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
