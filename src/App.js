import { useState } from 'react';

import photosApi from './photos-api';

import Container from './components/Container';
import Searchbar from './components/Searchbar';



const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [photos, setPhotos] = useState([]);


  const onChangeQuery = query => {
    setSearchQuery(query);
    setCurrentPage(1);

    fetchPhotos();

  };

  const fetchPhotos = () => {
    const options = { searchQuery, currentPage };
    
    photosApi
      .fetchPhotos(options)
      .then(data => {
        setPhotos(data);
      })
      .catch(error => console.log(error));
  };

    

  return (
    <>
      <Searchbar onSubmit={onChangeQuery} />
      <Container>
        
      </Container>
    </>
  );
};

export default App;
