import React, { useState } from 'react';

export const GifExpertApp = () => {
  // const categories = ['One Punch', 'Samurai X', 'Dragon ball'];

  const [categories, setcategories] = useState([
    'One Punch',
    'Samurai X',
    'Dragon ball',
  ]);

  const handledAdd = () => {
    // De ambas formas se puede añadir
    // setcategories([...categories, 'Hunter X Hunter']);

    setcategories((cats) => [...cats, 'Hunter X Hunter']);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />

      <button onClick={handledAdd}>Agregar</button>

      <ol>
        {categories.map((category, i) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
