// function FetchImg(name, page) {
//     return fetch(`https://pixabay.com/api/?q=${name}&page=${page}&key=25440089-75c058e87851521159a5db732&image_type=photo&orientation=horizontal&per_page=12`)
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       }
//       return Promise.reject(new Error(`Нет картинки с именем ${name}`));
//     });
//     }
  
//   const api = {
//     FetchImg,
//   }; 

//   export default api;

  const KEY = '24700389-41a6c20aad42dc08b671c5623';

export default async function fetchApi(imageRequest, page) {
  const response = await fetch(
    `https://pixabay.com/api/?q=${imageRequest}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
}