import React from 'react';

const PageBody = (props) => {

    const uiStyles = {
        mainBodyHolder: {
            height: "calc(93% - 20px)", //total height - total margin & padding
            marginTop: "10px",
            marginBottom: "10px",
            whiteSpace: "nowrap",
            overflowY: "scroll",
        },
    };

    const {
        children
    } = props;

    const uiMain = (
        <div style={uiStyles.mainBodyHolder}>
            {children}
        </div>
    );

    return uiMain;
}
export default PageBody;
