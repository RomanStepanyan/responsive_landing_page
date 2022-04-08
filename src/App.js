import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import InfiniteScroll from 'react-infinite-scroll-component';

import MenuBar from './Components/MenuBar/MenuBar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import GetImages from './Components/GetImages/GetImages';
import Modal from './Components/Modal/Modal';
import Spinner from './Components/Loader/Loader';
import MySlider from './Components/Carousel/Carousel';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

export default class App extends Component {
  state = {
    images: [],
    newSearchQuery: '',
    page: 1,
    modalSrc: '',
    isloading: false,
    searchedImages: [],
  };

  async componentDidMount() {
    try {
      const { page, searchQuery } = this.state;
      this.setState({ images: [], page: 1 });
      this.setState({ isloading: true });
      const newImages = await GetImages({ q: searchQuery, page });
      this.setState({
        images: [...newImages],
        page: page + 1,
      });
      this.setState({ isloading: false });
    } catch (error) {
      console.log('Error => ', error);
      return [];
    }
  }

  onSubmitHandler = search => {
    const tegSearch = search;
    this.state.images.map(image => {
      image.tags.split(',').map(tag => {
        if (tag.trim() === tegSearch) {
          this.state.searchedImages.push(image);
        }
      });
    });
    this.setState({ newSearchQuery: search });
  };

  loadMore = async () => {
    try {
      this.setState({ isloading: true });
      const { searchQuery, page } = this.state;
      const getNextPageImages = await GetImages({ q: searchQuery, page });
      this.setState(prevState => ({
        images: [...prevState.images, ...getNextPageImages],
        page: prevState.page + 1,
      }));
    } catch (error) {
      console.log('Error => ', error);
      return [];
    } finally {
      this.setState({ isloading: false });
    }
  };

  onModalImage = modalSrc => {
    this.setState({ modalSrc });
  };

  onCloseModal = () => {
    this.setState({ modalSrc: '' });
  };

  onCleareSearchedImages = () => {
    console.log('hi from onCleareSearchedImages');
    this.setState({ searchedImages: [] });
  };

  render() {
    const { images, modalSrc, isloading, searchedImages } = this.state;
    return (
      <div className="App">
        <MenuBar
          onSubmitHandler={this.onSubmitHandler}
          selectedImages={searchedImages}
          onCleareSearchedImages={this.onCleareSearchedImages}
        />
        <MySlider />
        <ToastContainer />
        <InfiniteScroll
          dataLength={images.length}
          next={this.loadMore}
          hasMore={true}
        >
          {searchedImages.length > 0 ? (
            <ImageGallery
              searchResult={searchedImages}
              onOpen={this.onModalImage}
            />
          ) : (
            <ImageGallery searchResult={images} onOpen={this.onModalImage} />
          )}
        </InfiniteScroll>
        {isloading && <Spinner />}
        {modalSrc && (
          <Modal
            largeImageURL={modalSrc}
            onCloseModal={this.onCloseModal}
            onClick={this.props.onOverlayClick}
          />
        )}
      </div>
    );
  }
}
