export const getGifs = async( category ) => {
  console.log(category);
  const api_key = 'NxSllw91dIrAqWn8doy2d89aqyPlolNY';
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${encodeURIComponent(category)}&limit=10`;
  //La función encodeURIComponent() en JavaScript se utiliza para codificar una cadena de texto para que pueda ser usada de forma segura dentro de una URL.
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    console.log(data);
    return gifs;
}