import {Component} from 'react';
import '../ImageGalleryItem/ImageGalleryItem.css'
const  ImageGalleryItem=({imgData,showModal})=> {
       const {webformatURL,tags,largeImageURL} = imgData
       console.log(showModal)
        return (
          <li className="ImageGalleryItem">
            <img className="ImageGalleryItem-image" src={webformatURL}  alt={tags} onClick={()=>showModal(largeImageURL)}/>
          </li>
        );
    
}
export default ImageGalleryItem