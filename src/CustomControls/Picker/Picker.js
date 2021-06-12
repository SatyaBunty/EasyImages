import React from 'react';
import "./Picker.css";

const Picker = (props) => {
    const {
        id,
        name,
        hintText,
        labelText,
        isRequired,
        children,
        onChange,
    } = props;
      return (
        <div className="inputDiv">
        <div className="inputLabelDiv">
            {/* <tr> */}
                <label className="entryLabels">{labelText}</label>
            {/* </tr> */}
        </div>
        <div className="inputTextPassDiv">
            {/* <tr> */}
                {/* <input type="text" id={id} name={name} placeholder={hintText} onChange={onChange} name="itemId" className="entries" isRequired={isRequired}/> */}
            {/* </tr> */}
            <select id={id} name={name} onChange={onChange} className="entries">
                {children}
            </select>
        </div>
    {/* <div className="brHeight" ></div> */}
    </div>
      )
}
export default Picker;