import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  // const categories = ['One Punch', 'Samurai X', 'Dragon ball'];

  const [categories, setCategories] = useState([
    'One Punch',
    'Samurai X',
    'Dragon ball',
  ]);

  return (
    <>
      <h2>GifExpertApp</h2>

      {/* Se envia el metodo setCategories para que lo maneje AddCategory */}
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category, i) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
