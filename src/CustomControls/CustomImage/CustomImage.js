import React from 'react';
import "./CustomButton.css";

const CustomButton = (props) => {
    const {
        title,
        name,
        className,
        buttonHolderclassName,
        isInputButton,
        onClick,
        isFullButton,
        isARefImage,
        imageSourceUrl,
        aRefUrl,
        altText
    } = props;

    var _imageSourceUrl = imageSourceUrl;
    if(_imageSourceUrl !== null && _imageSourceUrl !== undefined && _imageSourceUrl !== ""){} else{
        _imageSourceUrl = ""
    }

    var _aRefUrl = aRefUrl;
    if(_aRefUrl !== null && _aRefUrl !== undefined && _aRefUrl !== ""){} else{
        _aRefUrl = _imageSourceUrl
    }

    var _className = className;
    if(_className !== null && _className !== undefined && _className !== ""){} else{
        _className = ""
    }

      return (
        //   (isFullButton) ?
        // <div className={_buttonHolderclassName}>
        //     {
        //         (isInputButton) ? 
        //         <input type="submit" name={name} value={title} className={_className}/>
        //         :
        //         <button className={_className} onClick={onClick}>{title}</button>
        //     }
        // </div> : 
        (isARefImage) 
        ?
        <a href={imageSourceUrl} target="_blank" rel="noreferrer">
                     <img className={_className} alt="unable to load" src={imageSourceUrl} />
                  </a>
                   : <img className={_className} alt="unable to load" src={imageSourceUrl} />
      )
}
export default CustomButton;

