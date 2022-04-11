import react from 'react';
import errorImg from '../img/1958.jpg';
const Error = () => {
  return (
    <>
      <div className="error">
        <img src={errorImg} width="320" alt="error" />
        <p className="errorTitle">Вводи правильно!!</p>
      </div>
      
    </>
  );
};
export default Error;
