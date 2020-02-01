import React from 'react';

function OptionsList({ options = [] }) {
  return (
    <ul>
      {options.map((o, i) => (
        <li key={i}>{o}</li>
      ))}
    </ul>
  );
}

function OneList({ header, options, text }) {
  return (
    <section>
      <h2>{header}</h2>
      {options.length > 0 ? <OptionsList options={options} /> : ''}
      <div style={{ marginTop: '20px' }}>{text}</div>
    </section>
  );
}

export default OneList;
