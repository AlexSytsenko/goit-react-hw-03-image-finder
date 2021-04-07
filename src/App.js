import { useState, useEffect } from 'react';
import { Component } from 'react';

import photosApi from './photos-api';

import Container from './components/Container';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';

class App extends Component {
  state = {
    searchQuery: '',
    currentPage: 1,
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPhotos();
    }
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, currentPage: 1, images: [] });
  };

  fetchPhotos = () => {
    const { searchQuery, currentPage } = this.state;
    const options = { searchQuery, currentPage };

    photosApi
      .fetchPhotos(options)
      .then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => console.log(error));
  };

  render() {
    const { images } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0;

    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeQuery} />
        <Container>
          <ImageGallery photos={images} />
          {shouldRenderLoadMoreButton && <Button onClick={this.fetchPhotos} />}
        </Container>
      </div>
    );
  }
}

export default App;

// const App = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [photos, setPhotos] = useState([]);

//   const onChangeQuery = query => {
//     setSearchQuery(query);
//     setCurrentPage(1);
//   };

//   useEffect((prev) => {
//     if (searchQuery === '') {
//       setPhotos('');
//       setCurrentPage(1);
//     }
//       if (prev !== searchQuery) {
//         fetchPhotos();
//       }
//   }, [searchQuery]);

//   const fetchPhotos = () => {
//     const options = { searchQuery, currentPage };

//     photosApi
//       .fetchPhotos(options)
//       .then(data => {
//         setPhotos(data);
//         setCurrentPage(prev => prev + 1);
//       })
//       .catch(error => console.log(error));
//   };

//   return (
//     <div className="App">
//       <Searchbar onSubmit={onChangeQuery} />
//       <Container>
//         <ImageGallery photos={photos} />
//       </Container>
//     </div>
//   );
// };
