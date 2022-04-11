
import { useState, useEffect, useRef } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallary from "./imageGallary/ImageGallery";
import '../components/imageGallary/ImageGallery.css'
export const App = () => {
  const [imageName, setImageName] = useState('')
  
  const updateState=(name)=>{ 
    console.log(name)
    setImageName(name)
  }

  return (
    <>
      <Searchbar onChange={updateState} />
      <ImageGallary className="ImageGallery" imageName={imageName}/>
    </>
  );
};
