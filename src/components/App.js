
import React, { useState, useEffect } from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImages } from './services/fetchImages';
import {
  toastWarn,
  toastSuccess,
  toastError,
  toastInfoDuplication,
} from './services/toast';

import {Louder} from './Louder/Louder'

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { ErrorImg } from './ErrorImg/ErrorImg';
import img from 'components/images/404-Error-Websites.jpg';


export const App =() => {
  const [text, setText] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [largeImageData, setLargeImageData] = useState({});
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  

  useEffect(() => {
    if (text === '') {
      return;
    };
    setLoading(true);
    fetchImages(text, page).then(({ totalHits, hits }) => {
      if (totalHits === 0) {
        toastWarn();
        setLoading(false);
        setIsError(true);
        return;
      };
      if (page === 1 && hits.length > 1) {
        toastSuccess();
      };
      const onlyNeedValues = hits.map(
        ({ id, tags, webformatURL, largeImageURL }) => ({
          id,
          tags,
          webformatURL,
          largeImageURL,
        })
      );
      setImages(prevState => [...prevState, ...onlyNeedValues]);
      setLoading(false);
      setIsError(false);
    }).catch(error => toastError())
      .finally(() => {
        setLoading(false);
      });
  }, [text, page]);
  
  

  const searchImages = searchText => {
    if (text === searchText.trim()) {
      return toastInfoDuplication();
    }
    setText(searchText);
    setPage(1);
    setImages([]);
  };

  const loadMoreImages = () => {
    setPage(prevState => prevState + 1)
  };
  const toggleModal = event => {
    const { code } = event;
    const {nodeName, dataset: { source }, alt } = event.target;
    if (nodeName === 'IMG') {
      if (isModalOpen === true) {
        return;
      }
      setIsModalOpen(true);
      setLargeImageData({
        source,
        alt,
      });
    }
    if (nodeName === 'DIV' || code === 'Escape') {
      setIsModalOpen(false);
    }
  };

  
  
    return (
      <>
        <Searchbar
          onSubmit={searchImages}
          
        />
        {isError === true ? (
          <ErrorImg errorImg={img} />
        ) : (
          images.length > 0 && (
            <ImageGallery allImages={images} onToggleModal={toggleModal} />
          )
        )}
        {loading === true ? (
          <Louder />
        ) : (
          images.length >= 12 && (
            <Button
              text="Load more"
              type="button"
              loadMoreImages={loadMoreImages}
            />
          )
        )}
       
        {isModalOpen && (
          <Modal data={largeImageData} onToggleModal={toggleModal} />
        )}
        <ToastContainer autoClose={3000} />
      </>
    );
  
};


