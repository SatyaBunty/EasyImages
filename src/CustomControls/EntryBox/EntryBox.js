import React from 'react';
import "./EntryBox.css";

const EntryBox = (props) => {
    const {
        id,
        name,
        hintText,
        labelText,
        isRequired,
        onChange,
    } = props;
      return (
        <div class="inputDiv">
        <div class="inputLabelDiv">
            {/* <tr> */}
                <label class="entryLabels">{labelText}</label>
            {/* </tr> */}
        </div>
        <div class="inputTextPassDiv">
            {/* <tr> */}
                <input type="text" id={id} name={name} placeholder={hintText} onChange={onChange} name="itemId" class="entries" isRequired={isRequired}/>
            {/* </tr> */}
        </div>
    {/* <div class="brHeight" ></div> */}
    </div>
      )
}
export default EntryBox;