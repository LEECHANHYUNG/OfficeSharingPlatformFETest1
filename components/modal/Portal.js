import ReactDOM from 'react-dom';

const Portal = ({ children, selector }) => {
  console.log(document.getElementById(selector));
  if (typeof window !== 'undefined') {
    return ReactDOM.createPortal(children, document.getElementById(selector));
  } else {
    return null;
  }
};

export default Portal;
