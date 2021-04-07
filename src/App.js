import { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

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
    isLoading: false,
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

    this.setState({ isLoading: true });

    photosApi
      .fetchPhotos(options)
      .then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data],
          currentPage: prevState.currentPage + 1,
        }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { images, isLoading } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;

    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeQuery} />
        <Container>
          <ImageGallery photos={images} />

          {isLoading && (
            <Loader
              type="BallTriangle"
              color="#00BFFF"
              height={75}
              width={75}
            />
          )}

          {shouldRenderLoadMoreButton && <Button onClick={this.fetchPhotos} />}
        </Container>
      </div>
    );
  }
}

export default App;

// git commit -m "add Load more btn and spinner"

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
