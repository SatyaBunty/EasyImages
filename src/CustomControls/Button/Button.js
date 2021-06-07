import React from 'react';
import "./Button.css";

const Button = (props) => {
    const {
        title,
        name,
        className
    } = props;
    var _className = className;
    if(_className !== null && _className !== undefined && _className !== ""){} else{
        _className = "submitButton"
    }
      return (
        <div class="inputButtonDiv">
                                        {/* <tr> */}
                                            <input type="submit" name={name} value={title} className={_className}/>
                                        {/* </tr> */}
                                    </div>
      )
}
export default Button;