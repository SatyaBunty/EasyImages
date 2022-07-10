import React from 'react';
import "./Picker.css";

const Picker = (props) => {
    const {
        id,
        name,
        // hintText,
        labelText,
        formName,
        selectedValue,
        options,
        // isRequired,
        children,
        onChange,
    } = props;
    const listOfOptions = options;
    const selectOptions = (option) => {
        let _selected = (option===selectedValue);
        return(<option value={option} selected={_selected} >{option}</option>);
     }

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
            {/* <select id={id} name={name} onChange={onChange} className="entries">
                {children}
            </select> */}
            <select id={id} name={name} onChange={onChange} className="entries">
                {(listOfOptions !== null && listOfOptions !== undefined && listOfOptions !== "") ? listOfOptions.map(item => selectOptions(item)): children}
            </select>
        </div>
    {/* <div className="brHeight" ></div> */}
    </div>
      )
}
export default Picker;