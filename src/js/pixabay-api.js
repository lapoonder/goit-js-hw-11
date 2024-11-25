'use strict';
export default function fetchImages(searchImagesQuery) {
  const searchParams = new URLSearchParams({
      key: '47257785-d72a0dbe5696a4dd8bfb23e2a',
      q: `${searchImagesQuery}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 40,
    }),
    url = `https://pixabay.com/api/?${searchParams}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
