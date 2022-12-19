import axios from 'axios';

export async function fetchImages(text, page) {
  const searchParams = new URLSearchParams({
    key: '30517728-589fd0b92afb9aae41e5e4126',
    q: text,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 12,
    page,
  });
  const images = await axios.get(`https://pixabay.com/api/?${searchParams}`);
  return images.data;
}
