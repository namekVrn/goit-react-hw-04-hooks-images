import { useEffect } from 'react'
import './Modal.css'

import { InfinitySpin } from  'react-loader-spinner'
const  Modal =({modalImg,clouseModal})=>{
    useEffect(()=>{
      window.addEventListener('keydown', handleKeyDown);
      return ()=>{window.removeEventListener('keydown', handleKeyDown)} 
    },[])
  
      const handleKeyDown = e => {
        if (e.code === 'Escape') {
            console.log(e.code)
            clouseModal()
        }
      };

      const backdropClick = e => {
          if (e.currentTarget === e.target) {
            console.log('onClouseModal')
            clouseModal()
          }
      }

    console.log(clouseModal)
    return (
        <div className="Overlay" onClick={backdropClick}>
            <InfinitySpin color="blue" />
        <div className="Modal">
            
          <img src={modalImg} alt="bigIMg" />
        </div>
      </div>
    )
  
}
export default Modal