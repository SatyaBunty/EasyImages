import React from 'react';
import "./CustomButton.css";

const CustomButton = (props) => {
    const {
        title,
        name,
        className,
        isInputButton,
        onClick
    } = props;
    var _className = className;
    if(_className !== null && _className !== undefined && _className !== ""){} else{
        _className = "submitButton"
    }
      return (
        <div class="inputButtonDiv">
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