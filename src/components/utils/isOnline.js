async function isOnline() {
    try {
      await fetch("https://google.com");
      return true;
    }catch{
        return false;
    }
  
    
  }
  export default isOnline