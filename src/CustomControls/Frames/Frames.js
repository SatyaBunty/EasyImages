import React from 'react';
import "./Frames.css";

export const openURLOptions = Object.freeze({
    BLANK: "_blank", // Opens the linked document in a new window or tab
    SELF: "_self", // Opens the linked document in the same frame as it was clicked (this is default)
    PARENT: "_parent", // Opens the linked document in the parent frame
    TOP: "_top", // Opens the linked document in the full body of the window
    FRAMENAME: "framename" // Opens the linked document in the named iframe
});

const Frames = (props) => {
    const {
        id,
        src,
        title,
        className,
        style,
        name,
        onLoad,
        frameParams,
    } = props;
    
    var _className = className;
    // if (_className !== null && _className !== undefined && _className !== "") { } else {
    //     _className = "submitButton"
    // }

    return (
        <iframe 
        id={id}
        src={src} 
        title={title}
        name={name}
        className={_className}
        style={style}
        onLoad={onLoad}
        {...frameParams}
        ></iframe>
    )
}
export default Frames;

