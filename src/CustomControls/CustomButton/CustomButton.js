import React from 'react';
import "./CustomButton.css";

const CustomButton = (props) => {
    const {
        title,
        name,
        className,
        buttonHolderclassName,
        isInputButton,
        onClick
    } = props;

    var _buttonHolderclassName = buttonHolderclassName;
    if(_buttonHolderclassName !== null && _buttonHolderclassName !== undefined && _buttonHolderclassName !== ""){} else{
        _buttonHolderclassName = "inputButtonDiv"
    }
    var _className = className;
    if(_className !== null && _className !== undefined && _className !== ""){} else{
        _className = "submitButton"
    }

      return (
        <div className={_buttonHolderclassName}>
            {
                (isInputButton) ? 
                <input type="submit" name={name} value={title} className={_className}/>
                :
                <button className={_className} onClick={onClick}>{title}</button>
            }
        </div>
      )
}
export default CustomButton;