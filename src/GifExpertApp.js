import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  // const categories = ['One Punch', 'Samurai X', 'Dragon ball'];

  const [categories, setcategories] = useState([
    'One Punch',
    'Samurai X',
    'Dragon ball',
  ]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory></AddCategory>
      <hr />

      <ol>
        {categories.map((category, i) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
