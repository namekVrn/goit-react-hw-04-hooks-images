import { useState, useEffect, useRef } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import '../imageGallary/ImageGallery.css';
import fetchAPI from '../utils/fetchAPI';
import Button from 'components/Button';
import Loader from '../Loader';
import Modal from '../Modal';
import Error from '../Error/Error';

const ImageGallery = ({ imageName }) => {
  const [hits, setHits] = useState(null);
  const [modalStatus, setModalStatus] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const [status, setStatus] = useState('expecting');
  const prevName = useRef('');
  const showModal = bigImg => {
    setModalStatus(true);
    setModalImg(bigImg);
  };
  const clouseModal = () => {
    setModalStatus(false);
  };
  
  useEffect(() => {
    if (!imageName) {
      setHits(null);
      return;
    }
    if (prevName.current !== imageName) {
      setHits(null);
      setPage(1);
    }

    fetchAPI(imageName, page)
      .then(response => response.json())
      .then(data => {
        if (page === 1) {
          if (data.total > 0) {

            setStatus('loader');
            prevName.current = imageName;
            setHits(data.hits);
            setStatus('resolved');
          }
          if (data.total === 0) {
            setError(true);
            setHits(null);
            setStatus('reject');
          }
        } else {
          setHits([...hits, ...data.hits]);
        }

        if (data.hits > 12) {
          setMaxPage(Math.ceil(data.totalHits / 12));
          setHits(data.hits);
          setError(null);
        }
      })
      .catch(error => {
        setError(error);
      });
  }, [imageName, page]);

  const downScroll = () => {
    window.onload = function () {
      window.scrollTo(0, document.body.scrollHeight);
    };
  };
  const loadMore = () => {
    downScroll();
    setStatus('loading');
    setPage(page + 1);
    setStatus('resolved');
  };

  return (
    <>
    {status === "reject" ? <Error />: null}
    {status === 'loader' ? <Loader/>: null}
    
      {modalStatus && <Modal modalImg={modalImg} clouseModal={clouseModal} />}
      <ul className="ImageGallery">
        {status === 'expecting' ? <p>Введите запрос</p> : null}
        {hits &&
          hits.map(img => {
            return (
              <ImageGalleryItem
                key={img.id}
                imgData={img}
                loadMore={loadMore}
                showModal={showModal}
              />
            );
          })}
      </ul>
      {hits && <Button loadMore={loadMore} />}
    </>
  );
};
export default ImageGallery;
