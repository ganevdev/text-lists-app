import React, { useEffect, useState } from 'react';

import OneList from '../OneList';
// @ts-ignore
import json from './json.json';

const jsonEx = json;

function AllLists() {
  const [state, setState] = useState(jsonEx);
  // TODO - обращение к API
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then((response) => response.json())
  //     .then((response) => setState(response));
  // }, []);

  return (
    <>
      {state.map(({ header, options, text }, i) => (
        <OneList key={i} header={header} options={options} text={text} />
      ))}
    </>
  );
}

export default AllLists;
