import React from 'react';
import "./AHref.css";

export const openURLOptions = Object.freeze({
    BLANK: "_blank", // Opens the linked document in a new window or tab
    SELF: "_self", // Opens the linked document in the same frame as it was clicked (this is default)
    PARENT: "_parent", // Opens the linked document in the parent frame
    TOP: "_top", // Opens the linked document in the full body of the window
    FRAMENAME: "framename" // Opens the linked document in the named iframe
});

const AHref = (props) => {
    const {
        id,
        href,
        title,
        className,
        target,
        buttonHolderclassName,
    } = props;

    let _target = openURLOptions.BLANK;
    if (target !== null && target !== undefined && target !== "" && target !== " ") {
        _target = target;
    }

    let _title = "";
    if (title !== null && title !== undefined && title !== "" && title !== " ") {
        _title = title;
    }
    else if (href !== null && href !== undefined && href !== "" && href !== " ") {
        _title = href;
    }

    var _buttonHolderclassName = buttonHolderclassName;
    if (_buttonHolderclassName !== null && _buttonHolderclassName !== undefined && _buttonHolderclassName !== "") { } else {
        _buttonHolderclassName = "inputButtonDiv"
    }
    var _className = className;
    // if (_className !== null && _className !== undefined && _className !== "") { } else {
    //     _className = "submitButton"
    // }

    return (
        <a className={_className} id={id} href={href} target={_target} rel="noreferrer">{_title}</a>
    )
}
export default AHref;

