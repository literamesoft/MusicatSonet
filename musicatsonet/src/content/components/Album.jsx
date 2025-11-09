import React, { useState, useEffect } from "react";

const AlbumDiseño = ({ artista, AñoAlbum }) => {
  const [chocolates, setChocolates] = useState(0);

  useEffect(() => {
    document.title = `Chocolate ${chocolates}`
  }, [chocolates]);

  return (
    <div>
      <p>
        Este es el album de {artista} del año {AñoAlbum}
      </p>
      <button onClick={() => setChocolates(chocolates + 1)}>
        compramos chocolates
      </button>
      la cantidad de chocolates michael jackson son: <h1> {chocolates} </h1>
    </div>
  );
};

export default AlbumDiseño;
