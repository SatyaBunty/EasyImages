import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import "./ModalPage.css"

const ModalPage = (props) => {
    const {
        showCloseButton,
        onCloseButtonCLicked,
        children
    } = props;
    const uiMain = (
        <div className="modalMainHolder">
            {(showCloseButton) ?
                <div>
                    <CustomButton className="closeButton" title="X" onClick={onCloseButtonCLicked} />
                </div>
                :
                <>
                </>
            }
            <div className={(showCloseButton) ? "modalChildrenHolderWithCloseButton" : "modalChildrenHolderWithoutCloseButton"}>
                {children}
            </div>
        </div>
    );
    return uiMain;
}
export default ModalPage;