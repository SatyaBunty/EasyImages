import React from 'react';
import ModalPage from '../ModalPage/ModalPage';
import "./Loader.css"

const Loader = (props) => {
  const uiMain = (
    <ModalPage showCloseButton={false}>
        <div className="loaderHolder">
            <div className="loaderSpinner"></div>
        </div>
    </ModalPage>
  );
  return uiMain;
}
export default Loader;