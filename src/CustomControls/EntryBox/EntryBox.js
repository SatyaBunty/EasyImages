import React from 'react';
import "./EntryBox.css";

const EntryBox = (props) => {
    const {
        id,
        name,
        hintText,
        labelText,
        type,
        value,
        formName,
        // isRequired,
        onChange,
    } = props;
    let _type = "text";
    if(_type !== null && _type !== undefined && _type !== "" && _type !== " "){
        _type = type;
    }
    let _value= "";
    if(value !== null && value !== undefined && value !== ""){
        _value = value;
    }
      return (
        <div className="inputDiv">
        <div className="inputLabelDiv">
            {/* <tr> */}
                <label name={name} className="entryLabels">{labelText}</label>
            {/* </tr> */}
        </div>
        <div className="inputTextPassDiv">
            {/* <tr> */}
                <input type={_type} id={id} name={name} placeholder={hintText} value={_value} onChange={onChange} className="entries"/>
            {/* </tr> */}
        </div>
    {/* <div className="brHeight" ></div> */}
    </div>
      )
}
export default EntryBox;