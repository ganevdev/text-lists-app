import React, { useEffect, useState } from 'react';

import OneList from '../OneList';

function AllLists() {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/Ganevru/text-lists-app-api/data')
      .then((response) => response.json())
      .then((response) => setState(response));
  }, []);

  return (
    <>
      {state.map(({ header, options, text }, i) => (
        <OneList key={i} header={header} options={options} text={text} />
      ))}
    </>
  );
}

export default AllLists;
