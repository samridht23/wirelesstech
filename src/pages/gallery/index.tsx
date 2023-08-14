import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';


const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    '/img/gallery/raw/1.jpg',
    '/img/gallery/raw/2.jpg',
    '/img/gallery/raw/3.jpg',
    '/img/gallery/raw/4.jpg',
    '/img/gallery/raw/5.jpg',
    '/img/gallery/raw/6.jpg',
    '/img/gallery/raw/7.jpg',
    '/img/gallery/raw/8.jpg',
    '/img/gallery/raw/9.jpg',
    '/img/gallery/raw/10.jpg',
    '/img/gallery/raw/11.jpg',
    '/img/gallery/raw/12.jpg',
    '/img/gallery/raw/13.jpg',
  ];
  const openImageViewer = useCallback((index: any) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <>
      <div className="max-w-[1536px] m-auto">
        <div className="flex justify-center p-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-start max-w-[1500px]">
            {images.map((src, index) => (
              <img
                src={src}
                onClick={() => openImageViewer(index)}
                key={index}
                alt=""
                className="object-cover w-full max-w-[300px] h-full cursor-pointer"
              />
            ))}
          </div>
          {isViewerOpen && (
            <ImageViewer
              src={images}
              currentIndex={currentImage}
              disableScroll={true}
              closeOnClickOutside={true}
              onClose={closeImageViewer}
            />
          )}
        </div>
      </div>
    </>
  )
}
export default Gallery
