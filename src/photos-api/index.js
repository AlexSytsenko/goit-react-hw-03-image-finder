import axios from 'axios';


const apiKey = '20059079-3862fc9514b48e56c5e47271f';
const perPage = 12;

const fetchPhotos = ({ searchQuery, currentPage }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
    )
    .then(({ data }) => data.hits);
};

export default { fetchPhotos };